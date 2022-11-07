const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/morningdb");


const conn = mongoose.connection;

conn.on("connected", () => {
    console.log("Connected to db");
});
conn.on("error", () => {
    console.log("Could not connected to db");
});
conn.on("Disconnectd", () => {
    console.log("disconnected from db");
});