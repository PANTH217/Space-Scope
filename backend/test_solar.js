const axios = require('axios');

async function checkSolar() {
    try {
        const today = new Date();
        const lastWeek = new Date(today);
        lastWeek.setDate(today.getDate() - 7);
        const dateStr = lastWeek.toISOString().split('T')[0];

        // Using DEMO_KEY
        const url = `https://api.nasa.gov/donki/notifications?startDate=${dateStr}&type=all&api_key=DEMO_KEY`;
        console.log("Fetching:", url);

        const response = await axios.get(url);
        console.log("Status:", response.status);
        console.log("Data Length:", response.data.length);
        if (response.data.length > 0) {
            console.log("Sample:", response.data[0].messageType);
        }
    } catch (e) {
        console.error("API Failed:", e.response ? e.response.status : e.message);
        if (e.response && e.response.data) console.log("Details:", e.response.data);
    }
}

checkSolar();
