const {readFileSync, writeFileSync, appendFileSync} = require('fs');

const debug = require('debug')('app');
const chalk = require('chalk');

const express = require('express');
const app = express();
app.set('view engine', 'ejs');

// for parsing application/xwww-form-urlencoded
const bodyParser = require('body-parser');
const multer = require("multer");
const upload = multer();

app.use(
    bodyParser.json({
        limit: "50mb",
    })
);
app.use(
    bodyParser.urlencoded({
        limit: "50mb",
        extended: true,
    })
);
app.use(upload.array());

//Session router
const session_router = express.Router();
app.use(session_router);

//Get
session_router.route('/login').get((req,res) => {
    console.log("In get method")
    // res.render('login');
    console.log(JSON.stringify(req.body));
});

//Post
session_router.route('/login').post((req,res) => {

    console.log("In post method");
    console.log(req.body);
    let data = req.body;
    if(data['name'] && data['password']){
        // res.send("Login successfull");
        let result = addLoginData(data);
        result ? res.send("added to login file successfully") : res.send("adding to login file failed"); 
    }
    else{
        res.send("Login Failed: Username and password are required.");
    }

});

//Put
session_router.route('/update').put((req,res) => {
    console.log("In update method");
    console.log(req.body);
    let data = req.body;
    let result = updateLoginData(data);
    result ? res.send("Updated successfully") : res.send("Username do not exist");
});

//Delete
session_router.route('/delete').delete((req,res) => {
    console.log("In delete method");
    console.log(req.body);
    let data = req.body;
    let result = deleteLoginData(data);
    result ? res.send("Deleted successfully") : res.send("Username do not exist");
});

function deleteLoginData(data){
    let loginData = readData();
    console.log(loginData);
    console.log("Deleting..")
    let resultedData = loginData.filter((login) => login.name !== data.name);
    console.log(resultedData);
    console.log(resultedData.length);
    if(resultedData.length !== loginData.length){
        writeData(resultedData);
        return true;
    }else{
        return false;
    }
}

function updateLoginData(data){
    let loginData = readData();
    console.log(loginData);
    let result = false;
    console.log("Updating..")
    loginData.map((login) => login.name === data.name ? (login.password = data.password, result = true) : "");
    console.log(loginData);
    // console.log(result);
    if(result){
        writeData(loginData);
        return true;
    }else{
        return false;
    }
    
}

function addLoginData(data){
    let loginData = readData();
    console.log(loginData);
    loginData.push(data);
    console.log("appending");
    console.log(loginData);
    let result = writeData(loginData);
    return result;
    
}

function readData(){
    let data = readFileSync('login.json', 'utf-8');
    data = JSON.parse(data);
    return data;
    
}

function writeData(loginData){
    loginData = JSON.stringify(loginData);
    writeFileSync('login.json', loginData);
    return true;
}


app.listen(3000,() => {
    console.log(`Server is running on ${chalk.green('http://localhost:3000')}`);
});