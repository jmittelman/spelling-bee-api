# Scripps National Spelling Bee Results JSON API

> _In 2019, there were 8 champions declared for the Scripps National Spelling Bee after the dictionary of qualified words was exhausted. With kids now using ever more sophisticated study methods, this result seemed to highlight that the National Spelling Bee now faces an unprecedented number of young students able to master the challenge._

An api built to interact with results data of the Scripps National Spelling Bee for the years 2000-2019.

![Api Screenshot]

The api draws on data originally shared online by [the competition](http://spellingbee.com/) and scraped and made more user-friendly by statistician Christopher Long:

[octonion github: (spelling bees)](https://github.com/octonion/spelling)

## Built With

The api was created with Node.js, Express, MongoDB, and Mongoose.

Postman was used for testing routes throughout development.

Deployed via Heroku. Hosted by MongoDB Atlas.

## Dependencies

express, mongoose, nodemon

## Current Features

- Utilizes models for Bees, Champions, and Sponsors with relevant data fields including year, champion, winning word, and winning word definition, as well as sponsor name, city, and state.

- Incorporates complete CRUD functionality implemented with RESTful routes:

## Wish List

In the future I hope to develop further functionality including:
