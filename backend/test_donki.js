const axios = require('axios');

const KEY = 'DEMO_KEY'; // Or use the real one if available
const BASE_URL = 'https://api.nasa.gov/DONKI';

async function testDonki() {
    console.log("Testing DONKI Notifications endpoint...");
    try {
        // Fetch notifications which cover GST, FLR, IPS, etc.
        const response = await axios.get(`${BASE_URL}/notifications`, {
            params: {
                api_key: KEY,
                type: 'all'
            }
        });
        console.log("Success! Data length:", response.data.length);
        if (response.data.length > 0) {
            console.log("Sample:", JSON.stringify(response.data[0], null, 2));
            const types = [...new Set(response.data.map(d => d.messageType))];
            console.log("Available Types:", types);
        }
    } catch (e) {
        console.error("Error:", e.message);
        if (e.response) console.error(e.response.data);
    }
}

testDonki();
