const { use } = require('chai');
const express = require('express')
const path = require('path')

const app = express();

const pathToIndex = '../client/index.html'

pathToIndex = path.resolve(__dirname, pathToIndex)

use('/*', (request, response) => { response = sendFile(pathToIndex); })

module.exports.app