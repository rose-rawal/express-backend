# Backend App

A simple express server for API

## Initialization

1. Create a empty direcotry
2. Run the following scripts to initiaze npm project
   ```bash
    npm init -y
    ```
3. Install dependencies
    ```bash
    yarn add express
    yarn add -D nodemon
    ```
4. Create a index.js file 
    ```bash
    import express from "express";
    
    const app = express();

    app.listen(8080, function(){
        console.log("App running on http://localhost:8000")
    })
5. Serve
    - For production
        ```bash
        node index.js
        ```
    - For development
        ```
        nodemon
        ```
## API checks
1. Postman
2. Thunderclient (VSCode)
