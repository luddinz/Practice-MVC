const express = require("express");
const router = require("./router");

const PORT = 3000;

const app = express();

// Kita perlu tambahkan line ini sebelum use Router
// Dipakai untuk handle request dari Form
app.use(
  express.urlencoded({
    extended: false,
  })
);

// Dipakai untuk memasang view Engine EJS
app.set("view engine", "ejs");

app.use(router);

app.listen(PORT, () => {
  console.log(`Listening on https://localhost:${PORT}`);
});
