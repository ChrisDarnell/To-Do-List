//jshint esversion:6

const express = require("express");

const app = express();

let itemsToAdd = [];

app.use(express.urlencoded({
    extended: true
}));
app.use(express.static("public"));


app.set("view engine", "ejs");

app.get("/", (req, res) => {
    let today = new Date();
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    let day = today.toLocaleDateString("en-US", options);

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