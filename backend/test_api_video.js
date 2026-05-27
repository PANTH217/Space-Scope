const axios = require('axios');

async function checkApi() {
    try {
        const response = await axios.get('https://ll.thespacedevs.com/2.2.0/launch/upcoming/?limit=5&mode=detailed');
        const data = response.data;

        console.log("Found", data.results.length, "launches.");

        data.results.forEach((launch, i) => {
            console.log(`\n[${i}] ${launch.name}`);
            console.log("   vidURLs:", JSON.stringify(launch.vidURLs));
            // Check for empty array or null
            // Also check status to see if it makes sense to have a video
            console.log("   status:", launch.status?.name);
        });
    } catch (e) {
        console.error("Error:", e.message);
    }
}

checkApi();
