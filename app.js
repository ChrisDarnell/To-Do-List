//jshint esversion:6

const express = require("express");

const app = express();

let items = [];
let workItems = [];

app.use(express.urlencoded({
    extended: true
}));
app.use(express.static("public"));

app.set("view engine", "ejs");

// Template

app.get("/", (req, res) => {
    let today = new Date();
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    let day = today.toLocaleDateString("en-US", options);

    res.render("list", {
        listTitle: day,
        newListItems: items
    });
});

app.post("/", (req, res) => {
    let item = req.body.newItem;
    let testVar = req.body.list;
    console.log(testVar);
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