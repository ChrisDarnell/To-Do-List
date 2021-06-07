//jshint esversion:6

const express = require("express");
const date = require(__dirname +"/date.js");

const app = express();
const items = [];
const workItems = [];

app.use(express.urlencoded({
    extended: true
}));
app.use(express.static("public"));

app.set("view engine", "ejs");

// Template

app.get("/", (req, res) => {

    const day = date.getDate();

    res.render("list", {
        listTitle: day,
        newListItems: items
    });
});

app.post("/", (req, res) => {
    const item = req.body.newItem;
    if (req.body.list === "Work") {
        workItems.push(item);
        res.redirect("/work");
    } else {
        items.push(item);
        res.redirect("/");
    }
});


// Work Page 

app.get("/work", (req, res) => {
    res.render("list", {
        listTitle: "Work List",
        newListItems: workItems
    });
});


// Listen

app.listen(3000, () => {
    console.log("Server started port 3000");
});