const {readFile, writeFile} = require('fs');

readFile('data.json', 'utf-8', (err,data) => {
    if(err){
        console.log(err);
        return
    }
    console.log(data);
    data = JSON.parse(data);
    for(let i in data){
        data[i]['updatedAt'] = new Date();
    }
    data = JSON.stringify(data);
    console.log(data);
    writeData(data);
})

function writeData(data){
    writeFile('modifiedData.json', data, (err) => {
        if(err){
            console.log(err);
            return
        }
    })
}
