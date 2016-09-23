'use strict'

const cli = require('cli')
const debug = require('debug')
const FirebaseServer = require('firebase-server')
const initialState = {
  "projects": {
    "-KR1D-FDZ42f0v2Pm-6B": {
      "description" : "",
      "name" : "Orçamento da Tia do Breno",
      "valuePerHour" : "40"
    },
    "-teste": {
      "description" : "Teste",
      "name" : "Teste",
      "valuePerHour" : "35"
    }
  },
  "tasks" : {
    "-KR1DkySbDrr2QidX6fz" : {
      "analysis_duration" : 3,
      "description" : "Instalar o woocommerce e cadastrar alguns produtos de teste",
      "development_duration" : 2,
      "discounted" : false,
      "testing_duration" : 2,
      "title" : "Configurar Woocommerce",
      "projectId": "-KR1D-FDZ42f0v2Pm-6B"
    },
    "-KR1EBXpC0zhP1Roq0vb" : {
      "analysis_duration" : 1,
      "description" : "Baseado em layout",
      "development_duration" : 3,
      "discounted" : false,
      "testing_duration" : 2,
      "title" : "Tela de home",
      "projectId": "-KR1D-FDZ42f0v2Pm-6B"
    },
    "-KR1E_tmJXszcQxdtXWI" : {
      "analysis_duration" : 3,
      "description" : "",
      "development_duration" : 6,
      "discounted" : false,
      "testing_duration" : 3,
      "title" : "Tela de produtos",
      "projectId": "-KR1D-FDZ42f0v2Pm-6B"
    },
    "-KR1Eukkl_y9Oj7iDEOF" : {
      "analysis_duration" : 1,
      "description" : "Tela contendo os detalhes de um produto",
      "development_duration" : 3,
      "discounted" : false,
      "testing_duration" : 3,
      "title" : "Tela de produto",
      "projectId": "-KR1D-FDZ42f0v2Pm-6B"
    },
    "-KR1F11Iv4jQmIiJjb7K" : {
      "analysis_duration" : 1,
      "description" : "",
      "development_duration" : 3,
      "discounted" : false,
      "testing_duration" : 2,
      "title" : "Tela de about",
      "projectId": "-KR1D-FDZ42f0v2Pm-6B"
    },
    "-KR1HAtLfms5DRYdlWU2" : {
      "analysis_duration" : 20,
      "description" : "",
      "development_duration" : 40,
      "discounted" : false,
      "testing_duration" : 10,
      "title" : "Integração com banco de dados",
      "projectId": "-KR1D-FDZ42f0v2Pm-6B"
    },
    "-teste3" : {
      "analysis_duration" : 20,
      "description" : "",
      "development_duration" : 40,
      "discounted" : false,
      "testing_duration" : 10,
      "title" : "Integração com banco de dados",
      "projectId": "-teste"
    }
  }
}

debug.enable('firebase-server*')

new FirebaseServer(3000, '127.0.0.1', initialState)
