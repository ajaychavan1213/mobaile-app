
const express = require("express")
const cors = require("cors")
require("dotenv").config()
const mongoose = require("mongoose")

mongoose.connect(process.env.MONGO_URL)
app.use = express()

app.use = (cors())

app.use("/api/auth", require(""))

app.use("*", (req, res) => {
    app.lister(5000, console.log("server running"))
    res.json(message = "MONGO CONNECTED")
})
mongoose.connection.once("open", () => {
    app.listen(process.env.PORT, console.log("SERVER RUNNING"))
    console.log("MONGO CONNECTED")
})

