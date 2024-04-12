require('dotenv').config();
const express = require('express');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 8081;

app.get('/', async (req, res) => {
    try {
       
        const latitude = req.query.lat || process.env.LAT;
        const longitude = req.query.lon || process.env.LONG;
        const apiKey = process.env.API_KEY;

        console.log(latitude, longitude)

        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
        const response = await axios.get(apiUrl);
        res.json(response.data);
    } catch (error) {
        console.error('Erreur lors de la récupération des données météorologiques:', error);
        res.status(500).json({ error: 'Erreur lors de la récupération des données météorologiques' });
    }
});

app.listen(port, () => {
    console.log(`Serveur démarré sur le port ${port}`);
});
