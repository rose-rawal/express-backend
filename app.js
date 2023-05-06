import express from 'express'; // package.json specify as "type": "module"
// const express = require("express") // if type is not set to module
import mongoose from "mongoose"
import dotenv from "dotenv"
import router from "./routes/index.js"
import ServerlessHttp from 'serverless-http';
dotenv.config()

const {
    NODE_ENV,
    DEV_MONGO_URL,
    PROD_MONGO_URL,
    PORT,
} = process.env

/**
 * For production: node index.js
 * For develpment: nodemon
 *     file changes watch, node index.js -> restart
 *     package:
 *          npm i nodemon --save-dev
 *          yarn add nodemon -D
 *  Running Scripts:
 *      For development:
 *          npm run dev or yarn dev
 *      For production:
 *          npm run serve or yarn serve    
 */
/**
 * express app initialization
 */
const app = express()

/**
 * database connection
 */
mongoose.connect(NODE_ENV === "development" ? DEV_MONGO_URL: PROD_MONGO_URL)
  .then(() => {
      console.log('Database connected');
  })
  .catch((err) => {
      console.log(err);
  });

// Parses the query params from request url
app.use(express.urlencoded({ extended: true }));
app.use(express.json()) // request body / response 

// Uses imported routes in express
app.use('/api',router);

app.use("/", (req,res)=>{
    res.send("reply from server")
})

/**
 * Server run certain port and hostname, 
 * port: 8000,
 * host: localhost
 */
export default ServerlessHttp(app)