require("dotenv").config();

const Spotify = require('node-spotify-api');
const axios = require("axios");
const inquirer = require('inquirer');
const moment = require("moment");
const fs = require("fs");

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
      // console.log(response);

      var showData = [
        "Title: " + response.data.Title,
        "Year: " + response.data.Year,
        "Rating: " + response.data.Ratings.join(", "),
        "Country " + response.data.Country,
        "Language " + response.data.Language,
        "Plot " + response.data.Plot,
        "Actors " + response.data.Actors
      ].join("\n\n");
      
      console.log(showData)

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
    query: userInput,
  }, function (err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }

  
    // console.log(data.tracks);
    var showData = [
      "Artist: " + data.tracks.items[0].album.artists[0].name,
      "Title: " + data.tracks.items[0].name,
      "Album: " + data.tracks.items[0].album.name,

    ].join("\n\n");
    
    console.log(showData)


    
  });
}

//BANDS IN TOWN API CALL
function bandsintownCall(){
  axios.get("https://rest.bandsintown.com/artists/" + userInput + "/events?app_id=codingbootcamp")
  .then(function (response) {
    // handle success
    // console.log(response.data[0].venue);

    var showData = [
      "Venue " + response.data[0].venue.name,
      "Location " + response.data[0].venue.city + " " + response.data[0].venue.country,
      "Date " + response.data[0].datetime 
    ].join("\n\n");
    
    console.log(showData)

  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
}


//DO WHAT IT SAYS