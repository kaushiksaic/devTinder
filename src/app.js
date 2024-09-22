const express = require("express");

const app = express();

app.use("/test",(req,res) => {
    res.send('Test from the site')
})

app.use("/hello",(req,res) => {
    res.send('Hello Hello Testing Hello')
})

app.use("/",(req,res) => {
    res.send('Hello World')
})

app.listen('7777',() => {
    console.log('Server listening at port 7777')
});