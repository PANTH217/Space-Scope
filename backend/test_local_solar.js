const axios = require('axios');

async function testBackend() {
    try {
        console.log("Testing http://localhost:5000/api/solar...");
        const response = await axios.get('http://localhost:5000/api/solar');
        console.log("Status:", response.status);
        console.log("Data Type:", typeof response.data);
        console.log("Is Array:", Array.isArray(response.data));
        if (Array.isArray(response.data) && response.data.length > 0) {
            console.log("First Item:", JSON.stringify(response.data[0]));
        } else {
            console.log("Data:", response.data);
        }
    } catch (e) {
        console.error("Test Failed:", e.message);
        if (e.response) {
            console.error("Response Status:", e.response.status);
            console.error("Response Data:", e.response.data);
        }
    }
}

testBackend();
