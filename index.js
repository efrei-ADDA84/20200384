const getWeather = require('./app');

const latitude = process.env.LAT;
const longitude = process.env.LONG;

getWeather(latitude, longitude)
    .then(data => {
        console.log('Données météorologiques:', data);
    })
    .catch(error => {
        console.error('Erreur:', error);
    });
