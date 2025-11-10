const mongoose = require("mongoose");
const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cookieparser = require("cookie-parser");
const UserModel = require("./Model/UserModel")
const emailSender = require("./utility/DynamicEmailSender")

dotenv.config();

const dbLink = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.3eexpys.mongodb.net/moviesverse?retryWrites=true&w=majority&appName=Cluster0`;;
// console.log(dbLink);

mongoose.connect(dbLink)
    .then(function (connection) {
        console.log("connected to db")
    }).catch(err => console.log(err))


  app.use(express.json());
  app.use(cookieparser());

const AuthRouter = require("./Routes/AuthRouter");
const MovieRouter = require("./Routes/AuthRouter");
app.use("/api/auth",AuthRouter);
app.use("/api/movies",MovieRouter)


 



    
app.listen(3000, function () {
    console.log("Server started on port 3000")
})