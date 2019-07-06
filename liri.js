require("dotenv").config();

const Spotify = require('node-spotify-api');
const axios = require("axios");
const inquirer = require('inquirer');
const moment = require("moment");

const keys = require('./keys.js');
const spotify = new Spotify(keys.spotify);
const omdb = keys.omdb.key;


//USER INPUT VARIABLES
let userCommand = process.argv[2];
let userInput = process.argv[3];


switch (userCommand) {
  case "concert-this":
    bandsintownCall();
    break
  case "spotify-this-song":
    spotifyCall();
    break
  case "movie-this":
    omdbCall();
    break
  case "do-what-it-says":
    console.log(4);
    break
}



// OMDB REQUEST

function omdbCall() {
  axios.get('http://www.omdbapi.com/?apikey=' + keys.omdb.key + '&t=' + userInput)
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
}

//SPOTIFY API CALL
function spotifyCall() {
  spotify.search({
    type: 'track',
    query: 'All the Small Things'
  }, function (err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }

    console.log(data);
  });
}

//BANDS IN TOWN API CALL
function bandsintownCall(){
  axios.get("https://rest.bandsintown.com/artists/" + userInput + "/events?app_id=codingbootcamp")
  .then(function (response) {
    // handle success
    console.log("BND");
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
}