require('dotenv').config();

const axios = require('axios');
const apiKey = process.env.API_KEY;

async function getWeather(latitude, longitude) {
    try {
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

        const response = await axios.get(apiUrl);
        return response.data;
    } catch (error) {
        console.error('Erreur lors de la récupération des données météorologiques:', error);
        throw error;
    }
}

module.exports = getWeather;
