const axios = require('axios');
require('dotenv').config();

async function listModels() {
    const key = process.env.GEMINI_API_KEY_1;
    if (!key) {
        console.log("No key found.");
        return;
    }

    console.log("Using Key: " + key.slice(0, 5) + "...");

    try {
        const url = `https://generativelanguage.googleapis.com/v1beta/models?key=${key}`;
        const response = await axios.get(url);

        console.log("Available Models:");
        const models = response.data.models;
        if (models) {
            models.forEach(m => {
                if (m.name.includes('gemini')) {
                    console.log(` - ${m.name} (${m.version})`);
                }
            });
        } else {
            console.log("No models returned in list.");
        }

    } catch (error) {
        if (error.response) {
            console.error("API Error Status:", error.response.status);
            console.error("API Error Data:", JSON.stringify(error.response.data, null, 2));
        } else {
            console.error("Network Error:", error.message);
        }
    }
}

listModels();
