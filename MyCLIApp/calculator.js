// console.log(process.argv);

let [operation, num1, num2] = process.argv.slice(2);
num1 = Number(num1);
num2 = Number(num2);

operation === 'add' ? add() : "";
operation === 'subtract' ? sub(): "";
operation === 'multiply' ? multiply() : "";
operation === 'divide' ? divide(): "";

function add(){
    try{
        if(!isNaN(num1) && !isNaN(num2)){
                console.log(`Addition of ${num1} + ${num2} is ${num1+num2}`);
        }
        else{
            throw 'Entered a non-digit number';
        }
    }catch(err){
        console.log(err);
    }
}


function sub(){
    try{
        if(!isNaN(num1) && !isNaN(num2)){
            console.log(`Subtraction of ${num1} - ${num2} is ${(num1-num2).toFixed(2)}`);
        }
        else{
            throw 'Entered a non-digit number';
        }
    }catch(err){
        console.log(err);
    }
}

function multiply(){
    try{
        if(!isNaN(num1) && !isNaN(num2)){
            console.log(`Multiplication of ${num1} * ${num2} is ${(num1*num2)}`);
        }
        else{
            throw 'Entered a non-digit number';
        }
    }catch(err){
        console.log(err);
    }
}

function divide(){
    try{
        if(!isNaN(num1) && !isNaN(num2)){
            if(num2 !== 0){
                console.log(`Division of ${num1} / ${num2} is ${(num1/num2)}`);
            }
            else throw 'Cannot division by zero';
        }
        else{
            throw 'Entered a non-digit number';
        }
    }catch(err){
        console.log(err);
    }
}