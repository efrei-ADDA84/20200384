## First step

Added the api.js file, allowing the server to be launched on port 8081. Using Express to create our API.

## Seconde step

Created a workflow (in main.yaml) to build a Docker image for each new commit on the main branch, then publish it to Docker Hub.
The port used in our case is the port 8081.

## Third step 

Creation of different GitHub secrets such as: the DockerHub username and password, as well as the API key used.

## Fourth step 

Run the server : docker run -p 8081:8081 --env API_KEY=58f990fcf720daaf8715d70cc078142c image_tp2
Then you can make a curl in order to load the data : curl "http://localhost:8081/?lat=5.902785&lon=102.754175"

## Difficulties

Use and understanding of GitHub secrets (environment variables etc...) and manage dependencies between different versions.








