const {readFile, writeFile} = require('fs');

readFile('input.txt', 'UTF-8',(err, data) => {

    if(err){
        console.log(err);
        return
    }
    console.log(data.toUpperCase());
    writeData(data.toUpperCase());
})

function writeData(data){
    writeFile('uppercase.txt', data, (err) => {
        if(err){
            console.log(err);
            return
        }
    })
}