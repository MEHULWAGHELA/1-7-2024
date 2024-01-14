require("dotenv").config()
const express = require('express');
const app = express();
const db=require('./config/db')
const PORT=process.env.PORT || 8000;
const cors = require('cors')
app.use(cors())
const bodyParser = require('body-parser')
app.use(bodyParser.json())

db();
const router=require("./routes/router")
app.get("/", (req, res) => {
    res.send("Hello from backend side");
})

app.use("/api",router)

app.listen(PORT, () => {
    console.log("listen on port " + PORT);
})