const express = require("express");
const mysql = require("mysql");
const url = require("url");
const PORT = 8888;
const app = express();
// eslint-disable-next-line
const endPointRoot = "/4537/termproject/api/v1/";
const getUserRoot = "/4537/termproject/api/v1/user";
const getAllUsersRoot = "/4537/termproject/api/v1/users";
const createUsersRoot = "/4537/termproject/api/v1/users";
const loginUserRoot = "/4537/termproject/api/v1/login";

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "postify"
});

db.connect((err) => {
    if(err) throw err;
    console.log('Connected to MySQL Server!');
});

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Origin", "http://localhost:8080");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, Content-Length, X-Request-With");
    next();
});

app.get(getAllUsersRoot, (req, res) => {
    const sqlQuery = `SELECT * FROM users`;
    // console.log(1);
    // console.log(req.url);
    db.query(sqlQuery, (err, result) => {
        if(err) {
            res.status(404).send(`Unable to retrieve from database.`);
        }
        res.send(JSON.stringify(result));
    });
});

app.get(getUserRoot, (req, res) => {
    const urlQuery = url.parse(req.url, true);
    const sqlQuery = `SELECT * FROM users WHERE UserId=${urlQuery.query["userId"]}`;

    db.query(sqlQuery, (err, result) => {
        if(err) {
            res.status(404).send(`Unable to retrieve User from database.`);
        }
        res.send(JSON.stringify(result));
    });
});

app.put(createUsersRoot, (req, res) => {
    let body = "";
    req.on('data', function(chunk) {
        if(chunk != null) {
            body += chunk;
        }
    });
    req.on('end', function() {
        // SECUIRITY FLAW, USE PARAMETERIZED QUERIES
        const sqlQuery = `INSERT INTO users(LastName, FirstName, UserName, Password, JoinDate) VALUES ('${JSON.parse(body).LastName}', '${JSON.parse(body).FirstName}', '${JSON.parse(body).UserName}', '${JSON.parse(body).Password}', NOW())`;
        
        // console.log(sqlQuery);
        // eslint-disable-next-line
        db.query(sqlQuery, (err, result) => {
            if(err) {
                res.status(404).send(`Unable to store '${JSON.parse(body).UserName}' in Database.`)
            }
            res.status(200).send(`'${JSON.parse(body).UserName}' was stored in DB`);
        });
    });
});

app.post(loginUserRoot, (req, res) => {
    console.log("hi");
    let body = "";
    req.on('data', function(chunk) {
        if(chunk != null) {
            body += chunk;
        }
    });
    req.on('end', function() {
        const sqlQuery = `SELECT UserName, Password FROM users WHERE UserName='${JSON.parse(body).UserName}' and Password='${JSON.parse(body).Password}'`;
        console.log(JSON.parse(body));

        // console.log(sqlQuery);
        db.query(sqlQuery, (err, result) => {
            // console.log(result.UserName);
            if(err) {
                res.status(404).send(`Unable to store '${JSON.parse(body).UserName}' in Database.`)
            }
            console.log(result.length);
            if (result.length === 0) {
                res.status(401).send(`'${JSON.parse(body).UserName}' was not found in DB`);
            } else {
                res.status(200).send(`'${JSON.parse(body).UserName}' was found in DB`);
            }

        });
    });
});

app.listen(PORT, (err) => {
    if(err) throw err;
    console.log("Listening to port: " + PORT);
});
