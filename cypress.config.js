const { defineConfig } = require("cypress");
const { Client } = require('pg');

module.exports =
{
  experimentalStudio: true,
  chromeWebSecutiry: false,
  pageLoadTimeout: 60000,
  defaultCommandTimeout: 60000,
  e2e:
  {
    setupNodeEvents(on, config)
    {
      // implement node event listeners here
      on("task", {
        async executaQuery(query){
          const client = new Client({
            user: "postgres",
            password: "Post@sol",
            host: "192.168.8.25",
            database: "#cli_automacao_testes_okr_nao_usar#",
            port: 5432,
            ssl: false
          })
          await client.connect()
          const res = await client.query(query)
          await client.end()
          return res.rows;
        }
      })
    },
  },
  "reporter": "mochawesome",
  "reporterOptions":
  {
    "charts": true,
    "overwrite": false,
    "html": false,
    "json": true,
    "reportDir": "cypress/report/mochawesome-report"
  }
};