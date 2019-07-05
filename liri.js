require("dotenv").config();

const keys = require('./keys.js');
const Spotify = new Spotify(keys.spotify);
const omdb = keys.omdb.key;

const axios = require("axios");
const inquirer = require('inquirer');
const moment = require("moment");





