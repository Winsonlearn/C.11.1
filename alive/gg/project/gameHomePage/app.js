const express = require("express");

const handlebars = require("express-handlebars");

const app = express();
const hbs = handlebars.create({});
hbs.handlebars.registerHelper('add', (a, b) => a + b);

app.engine("handlebars", handlebars.engine());
app.set("view engine", "handlebars");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index", {
    title: "Home",
    message: "Howdy Handlebars",
  });
});

app.get("/buy-now", (req, res) => {
  res.render("buy", {
    title: "buy",
    message: "Howdy Handlebars!",
    num1: 5,
    num2: 10,
  });
});

app.get('/news', (req, res) => {
  const today = new Date();
  const about = today.getUTCDate() === 25 && today.getUTCMonth() + 1 === 12;
  
  res.render('news', {
    title: 'about',
    about: about,
  })
})

app.use((req, res) => {
  res.status(404).send("<h1>404, opps not found!</h1>");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port http://127.0.0.1:${PORT}`);
});

