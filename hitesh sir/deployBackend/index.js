// const express = require('express')       ------ this is  common js type 
import express from "express"    // this is module js 
const app = express()
const port = 3000

app.get("/", (req, res) => {
    res.send("This is Home page")
})

app.get("/about", (req, res) => {
    res.send(`<h1>this is about page</h1>`)
})

app.get("/contact", (req, res) => {
    res.send("this is contact us page.")
})

app.listen(port, () => {
    console.log(`Example app listen on Port number : ${port}.`);
})