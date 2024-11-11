const { defineConfig } = require("cypress");
require('dotenv').config({ path: '../.env' })

module.exports = defineConfig({
  env: {
    MY_USER: process.env.MY_LOCAL_USERNAME,
    MY_PASSWORD: process.env.MY_LOCAL_PASSWORD,
},
  e2e: {
    baseUrl: 'http://127.0.0.1:8009/',
    setupNodeEvents(on, config) {
    },
  },
});

