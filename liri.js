require("dotenv").config();

const keys = require('./keys.js');
const Spotify = new Spotify(keys.spotify);
const omdb = keys.omdb.key;

const axios = require("axios");
const inquirer = require('inquirer');
const moment = require("moment");


// OMDB REQUEST

axios.get('http://www.omdbapi.com/?apikey='+ omdb + '&t=anchorman'  )
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
 


