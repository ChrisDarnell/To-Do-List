//jshint esversion:6

const express = require("express");

const app = express();

var itemsToAdd = [];

app.use(express.urlencoded({
    extended: true
  }));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    var today = new Date();
    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    var day = today.toLocaleDateString("en-US", options);

    res.render("list", {
        kindOfDay: day,
        newListItems: itemsToAdd
    });
});

app.post("/", (req, res) => {
    itemToAdd = req.body.newItem;
    itemsToAdd.push(itemToAdd);

    res.redirect("/");
});



app.listen(3000, () => {
    console.log("Server started port 3000");
});