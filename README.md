# Scripps National Spelling Bee Results JSON API

> _In 2019, there were 8 champions declared for the Scripps National Spelling Bee after the dictionary of qualified words was exhausted. With kids now using ever more sophisticated study methods, this result seemed to highlight that the National Spelling Bee now faces an unprecedented number of young students able to master the challenge._

An api built to interact with results data of the Scripps National Spelling Bee for the years 2000-2019.

[Screencast](https://youtu.be/rZpzYlnDu88)

The api draws on data originally shared online by [the competition](http://spellingbee.com/) and scraped and made more user-friendly by statistician Christopher Long:

[octonion github: (spelling bees)](https://github.com/octonion/spelling)

## Built With

The api was created with Node.js, Express, MongoDB, and Mongoose.

Postman was used for testing routes throughout development.

Deployed via Heroku. Hosted by MongoDB Atlas.

## Dependencies

express, mongoose, nodemon, cors

## Current Features

- Utilizes models for Bees, Champions, and Sponsors with relevant data fields including year, champion, winning word, and winning word definition, as well as sponsor name, city, and state.

- Incorporates complete CRUD functionality implemented with RESTful routes:

## Routes for Bees

|    Name    |      Path       | HTTP Verb |                  Purpose                  |
| :--------: | :-------------: | :-------: | :---------------------------------------: |
|   index    |   /api/bees/    |    GET    |             Displays all Bees             |
| getByYear  | /api/bees/:year |    GET    |       Displays one Bee by the year        |
|   newBee   |    /api/bees    |   POST    |  creates a new Bee using data from body   |
| updatedBee |  /api/bees/:id  |    PUT    | Edit an existing Bee using data from body |
| deletedBee |  /api/bees/:id  |  DELETE   |       Delete an existing Bee by id        |

## Routes for Champions

|      Name       |         Path         | HTTP Verb |                    Purpose                     |
| :-------------: | :------------------: | :-------: | :--------------------------------------------: |
|      index      |   /api/champions/    |    GET    |             Displays all Champions             |
|    getByName    | /api/champions/:name |    GET    |         Displays one Champion by name          |
|   newChampion   |    /api/champions    |   POST    |  creates a new Champion using data from body   |
| updatedChampion | /api/champions/:name |    PUT    | Edit an existing Champion using data from body |
| deletedChampion | /api/champions/:name |  DELETE   |      Delete an existing Champion by name       |

## Routes for Sponsors

|      Name      |         Path         | HTTP Verb |                    Purpose                    |
| :------------: | :------------------: | :-------: | :-------------------------------------------: |
|     index      |    /api/sponsors/    |    GET    |             Displays all Sponsors             |
|    getById     |  /api/sponsors/:id   |    GET    |          Displays one Sponsor by id           |
|   newSponsor   |    /api/sponsors     |   POST    |  creates a new Sponsor using data from body   |
| updatedSponsor | /api/champions/:name |    PUT    | Edit an existing Sponsor using data from body |
| deletedSponsor | /api/champions/:name |  DELETE   |      Delete an existing Sponsor by name       |
