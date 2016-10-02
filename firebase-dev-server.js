'use strict'

const data = require('./dev-server-data.json')
const cli = require('cli')
const debug = require('debug')
const FirebaseServer = require('firebase-server')

debug.enable('firebase-server*')

new FirebaseServer(3000, '127.0.0.1', data)
