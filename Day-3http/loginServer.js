const http = require('http');
const {readFileSync, writeFileSync} = require('fs');

const server = http.createServer((req, res) => {
    // Handle HTTP GET
    if (req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/plain' })
        if(req.url === '/'){
            console.log("In get method");
            res.end("In Login get method");
            // req.on('end',()=>{JSON.parse(jsonData)});
        }
    }

    // Handle HTTP POST
    else if (req.method === 'POST') {
        res.writeHead(200, { 'Content-Type': 'text/plain' })
        // res.end('Received a POST request\n')
        console.log("In post method");
        req.on("data",(logindata)=>{
            let data = JSON.parse(logindata);
            console.log(data);
            if(data['name'] && data['password']){
                // res.send("Login successfull");
                let result = addLoginData(data);
                result ? res.end("added to login file successfully") : res.end("adding to login file failed"); 
            }
            else{
                res.end("Login Failed: Username and password are required.");
            }
        })
    }

    // Handle HTTP PUT
    else if (req.method === 'PUT') {
        res.writeHead(200, { 'Content-Type': 'text/plain' })
        // res.end('Received a PUT request\n')
        req.on("data",(data)=>{
            console.log("In update method");
            let result = updateLoginData(JSON.parse(data));
            result ? res.end("Updated successfully") : res.end("Username do not exist");
        })
    }

    // Handle HTTP DELETE
    else if (req.method === 'DELETE') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        req.on("data",(data)=>{
            console.log("In delete method");
            let result = deleteLoginData(JSON.parse(data));
            result ? res.end("Deleted successfully") : res.end("Username do not exist");
        })
    }

    // Default response for other methods
    else {
        res.writeHead(405)
        res.end(`${req.method} is not allowed on this server`)
    }
})

function addLoginData(data){
    let loginData = readData();
    console.log(loginData);
    loginData.push(data);
    console.log("appending");
    console.log(loginData);
    let result = writeData(loginData);
    return result;
    
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

const PORT = 3000
server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
});

