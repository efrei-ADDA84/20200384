## First step

In order to realise this project, I decided to create a node js application. I took the data from the OpenWeather API thanks to the key that they gave me. Then I used axios for the HTTP requests. 

## Second step

Next, I have created a docker image and then I used docker build for the construction of this image.

## Third step

With docker push, I have published this image on DockerHub.

## Fourth step

Thanks to Treavy, I analysed the vulnerabilities and tried to solve them.

## Issues 

Vulnerabilites were the most difficult thing to fix for me and I finally find alpine 3.19 witch allowed me to fix them. I had also some issues with the async function and node.js.


