import { defineConfig } from "cypress"; // ES MODULE
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import "dotenv/config";

export default defineConfig({
  viewportHeight: 1080,
  viewportWidth: 1920,
  watchForFileChanges: false,
  chromeWebSecurity: false,
  retries: process.env.CI ? 2 : 0,
  video: false,
  e2e: {
    specPattern: "cypress/tests/**/*.cy.{js,jsx,ts,tsx}",
    baseUrl: "https://opensource-demo.orangehrmlive.com/web/index.php",
    setupNodeEvents(on) {
      //placeholder to add parameteers when used: on, config
      // implement node event listeners here
      on("file:preprocessor", createBundler());
    },
  },
  env: {
    secret: process.env.API_SECRET_KEY,
    ep: {
      buzz: "/buzz/viewBuzz",
    },
    api: {
      domain: "https://api.ilovepdf.com/v1",
      auth: "/auth",
      start: "/start",
      upload: "/upload",
      process: "/process",
      download: "/download",
    },
  },
});
