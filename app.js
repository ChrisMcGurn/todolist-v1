
/*************** Includes ***************/

const express = require("express");
const bodyParser = require("body-parser");

/*************** Setup ***************/

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

/*************** Globals ***************/

const items = [];

// GET req to root
app.get("/", (req, res) => {

  let today = new Date();
  let options = {
    weekday: "long",
    month: "long",
    day: "numeric"
  };

  let day = today.toLocaleDateString("en-UK", options);

  res.render("list", { kindOfDay: day, newItems: items });
});

// POST req to root
app.post("/", (req, res) => {

  items.push(req.body.todoItem);

  res.redirect("/");

});



// Listen
app.listen(3000, () => {
  console.log("Server started on port 3000")
});