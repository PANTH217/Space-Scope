const https = require('https');
const fs = require('fs');
const path = require('path');

// Read keys from backend/.env
const envPath = path.join(__dirname, 'backend', '.env');
let keys = [];
try {
    const envContent = fs.readFileSync(envPath, 'utf8');
    const matches = envContent.match(/GEMINI_API_KEY_\d+=([^\s]+)/g);
    if (matches) {
        keys = matches.map(m => m.split('=')[1].trim());
    }
} catch (e) {
    console.error("Could not read .env:", e.message);
    process.exit(1);
}

if (keys.length === 0) {
    console.error("No GEMINI_API_KEYs found in .env");
    process.exit(1);
}

console.log(`Found ${keys.length} keys. Testing...`);

const testKey = (key) => {
    return new Promise((resolve) => {
        const url = `https://generativelanguage.googleapis.com/v1beta/models?key=${key}`;
        https.get(url, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                if (res.statusCode === 200) {
                    try {
                        const json = JSON.parse(data);
                        const models = json.models ? json.models.map(m => m.name.replace('models/', '')) : [];
                        console.log(`\n✅ Key ending in ...${key.slice(-5)} WORKED!`);
                        fs.writeFileSync('models.json', JSON.stringify(models, null, 2));
                        resolve(true);
                    } catch (e) {
                        console.log(`❌ Key ...${key.slice(-5)}: Invalid JSON`);
                        resolve(false);
                    }
                } else {
                    console.log(`❌ Key ...${key.slice(-5)}: Failed (${res.statusCode}) - ${data}`);
                    resolve(false);
                }
            });
        }).on('error', (e) => {
            console.log(`❌ Key ...${key.slice(-5)}: Network Error ${e.message}`);
            resolve(false);
        });
    });
};

(async () => {
    let anyValid = false;
    for (const key of keys) {
        const valid = await testKey(key);
        if (valid) anyValid = true;
    }

    if (!anyValid) {
        console.log("\n⚠️ ALL KEYS FAILED. The 'Generative Language API' is likely NOT ENABLED in the Google Cloud Console for these keys.");
    }
})();
