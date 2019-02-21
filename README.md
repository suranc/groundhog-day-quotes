# Groundhog Day Quote DB

A basic CRUD app to handle groundhog day quotes.

## TODO:
* Add function to display all quotes
* Add function to search quotes
* Add function to display a random quote

## To Run:

Start mongodb:  `docker run -e MONGO_INITDB_DATABASE=quotes -p 27017:27017 --name quotes-mongo -v $PWD/db:/data/db2 -v $PWD/init-db:/docker-entrypoint-initdb.d/ -d mongo`  
Run app: `node app.js`  
