const express = require("express");
const addDays = require("date-fns/addDays");
const app = express();

app.get("/", (request, require) => {
  const newDate = addDays(new Date(), 100);

  Response.send(
    `
            ${newDate.getDate()}/${newDate.getMonth()}/${newDate.getFullYear()}
        `
  );
});

module.exports = app;
