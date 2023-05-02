import express from 'express'; // package.json specify as "type": "module"
// const express = require("express") // if type is not set to module

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


app.use(express.json())
/**
 * 
 */
app.get("/", (req, res) => {
    console.log( req.query)
    // res.send("GET:hi how are you")
    res.json({
        "success": true,
        "data": []
    })
})
app.post("/", (req, res) => {
    console.log("Request body", req.body)
    res.send("POST:hi from post request")
})

/**
 * Server run certain port and hostname, 
 * port: 8000,
 * host: localhost
 */
app.listen(8000, () => {
    console.log("Server running on http://localhost:8000")
})