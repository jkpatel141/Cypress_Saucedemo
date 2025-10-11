const { defineConfig } = require("cypress");
const download = require("cypress-downloadfile/lib/addPlugin");
const fs = require("fs");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.saucedemo.com/",
    setupNodeEvents(on, config) {
      on("task", {
        // Task 1: Delete file
        deleteFile(filePath) {
          if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
            return null; // success
          }
          return null; // file doesn't exist
        },

        // ✅ Task 2: Download file
        downloadFile: download.downloadFile,
      });

      return config;
    },
  },
  viewportWidth: 1280,
  viewportHeight: 720,
  reporter:'mochawesome',
  reporterOptions:{
    reportDir: 'Cypress/reports',
    overwrite: false,
    html: true,
    json: true
  }
});