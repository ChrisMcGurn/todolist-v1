
/*************** Modules ***************/
const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/modules/date.js");

/*************** Setup ***************/
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

/*************** Globals ***************/
const items = [];
const workItems = [];

/*************** /ROOT ***************/
app.get("/", (req, res) => {

  const day = date.getDate();

  res.render("list", { listTitle: day, newItems: items });

});

app.post("/", (req, res) => {

  const item = req.body.todoItem;

  if (req.body.list === "Work List") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }

});

/*************** /WORK ***************/
app.get("/work", (req, res) => {

  res.render("list", { listTitle: "Work List", newItems: workItems });

})



// Start server on port 3000
app.listen(3000, () => {

  console.log("Server started on port 3000")

});