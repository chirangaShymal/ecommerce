
// pass-bVZutZ4Sg5eEZtVC
const express = require("express");
const mongoose = require("mongoose");
const userouter = require("./Routes/UserRoutes");
const inventrouter = require("./Routes/InventoryRoute");
const cartRouter = require('./Routes/CartRoute');

const app = express();
const cors= require("cors");
const port = 5000;

//middleware
app.use(express.json());
app.use(cors());
app.use("/users",userouter);
app.use ("/invent",inventrouter);
app.use("/cart",cartRouter);



// mongoose.connect("mongodb://localhost:27017/homeinventory");
const connection = mongoose.connect("mongodb://localhost:27017/userManagement")
.then(() => console.log("connected to mongo"))
.then(() => {
    app.listen(port);
    console.log(`Server is running on ${port}`)
})
.catch((err) => console.log((err)));