const fetch = require('node-fetch'); // Ensure node-fetch is available or use native fetch in Node 18+

async function checkApi() {
    try {
        const response = await fetch('https://ll.thespacedevs.com/2.2.0/launch/upcoming/?limit=5&mode=detailed');
        const data = await response.json();

        console.log("Found", data.results.length, "launches.");

        data.results.forEach((launch, i) => {
            console.log(`\n[${i}] ${launch.name}`);
            console.log("   vidURLs:", JSON.stringify(launch.vidURLs));
            // Check if there's possibly another field?
            if (launch.videos) console.log("   videos:", JSON.stringify(launch.videos));
        });
    } catch (e) {
        console.error("Error:", e);
    }
}

checkApi();
