const getWeather = require('./app');

const latitude = 48.85;
const longitude = 2.35;

getWeather(latitude, longitude)
    .then(data => {
        console.log('Données météorologiques:', data);
    })
    .catch(error => {
        console.error('Erreur:', error);
    });