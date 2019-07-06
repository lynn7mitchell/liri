require("dotenv").config();

const keys = require('./keys.js');
// const Spotify = new Spotify(keys.spotify);
const omdb = keys.omdb.key;

const axios = require("axios");
const inquirer = require('inquirer');
const moment = require("moment");

//USER INPUT VARIABLES
let userCommand = process.argv[2];
let userInput = process.argv[3];

// let userInputArr = [];
// let userInput = userInputArr.toString();
// for(let i = 2; i < process.argv.length; i++){
//     if(process.argv[i] != null){
//     userInputArr.push(process.argv[i]);
//     }
//   }
// console.log(userInputArr)
// console.log(userInput)

switch(userCommand){
  case "concert-this":
    console.log("worked");
    break
  case "spotify-this-song":
    console.log(2);
    break
  case "movie-this":
    omdb();
    break
  case"do-what-it-says":
    console.log(4);
    break
}



// OMDB REQUEST

var omdb = function(){
  axios.get('http://www.omdbapi.com/?apikey='+ userInput + '&t=anchorman'  )
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


