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

const AuthRouter = require("./Router/AuthRouter");
const MovieRouter = require("./Router/AuthRouter");
const DiscoverRouter= require("./Router/DiscoverRouter")
const TvShowsRouter = require("./Router/TvRouter");
const UserRouter = require("./Router/UserRouter");
const PaymentRouter = require("./Router/PaymentRouter");

app.use("/api/auth",AuthRouter);
app.use("/api/movies",MovieRouter);
app.use("/api/discover", DiscoverRouter);
app.use("/api/tv", TvShowsRouter);
app.use("/api/user", UserRouter);
app.use("/api/payment", PaymentRouter);


 



    
app.listen(3001, function () {
    console.log("Server started on port 3001")
})