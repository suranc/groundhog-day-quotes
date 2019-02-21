# Groundhog Day Quote DB

A basic CRUD app to handle groundhog day quotes.

## TODO:
* Make an initial database load for mongo, see: https://github.com/docker-library/docs/blob/master/mongo/README.md#mongo_initdb_database
* Add function to display all quotes
* Add function to search quotes
* Add function to display a random quote

## To Run:

Start mongodb:  `docker run -p 27017:27017 --name quotes-mongo -v $PWD/db:/data/db -d mongo`
Run app: `node app.js`
