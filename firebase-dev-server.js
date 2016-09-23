'use strict'

const cli = require('cli')
const debug = require('debug')
const FirebaseServer = require('firebase-server')
const initialState = {
  "projects": {
    "1": {
      "description" : "Teste",
      "name" : "Test 1",
      "valuePerHour" : "40"
    },
    "2": {
      "description" : "Teste",
      "name" : "Test 2",
      "valuePerHour" : "35"
    }
  },
  "tasks" : {
    
  }
}

debug.enable('firebase-server*')

new FirebaseServer(3000, '127.0.0.1', initialState)
