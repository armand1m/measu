'use strict'

const cli = require('cli')
const debug = require('debug')
const FirebaseServer = require('firebase-server')
const initialState = {}

debug.enable('firebase-server*')

new FirebaseServer(3000, '127.0.0.1', initialState)
