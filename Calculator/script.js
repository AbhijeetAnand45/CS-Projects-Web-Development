let firstnumber
let secondnumber
let operation
let result

function numone(){
    if(document.calForm.inputs.value == "0" || document.calForm.inputs.value == result){
        document.calForm.inputs.value = "1"
    }
    else{
        document.calForm.inputs.value += "1"
    }
}
function numtwo(){
    if(document.calForm.inputs.value == "0" || document.calForm.inputs.value == result){
        document.calForm.inputs.value = "2"
    }
    else{
        document.calForm.inputs.value += "2"
    }
}
function numthree(){
    if(document.calForm.inputs.value == "0" || document.calForm.inputs.value == result){
        document.calForm.inputs.value = "3"
    }
    else{
        document.calForm.inputs.value += "3"
    }
}
function numfour(){
    if(document.calForm.inputs.value == "0" || document.calForm.inputs.value == result){
        document.calForm.inputs.value = "4"
    }
    else{
        document.calForm.inputs.value += "4"
    }
}
function numfive(){
    if(document.calForm.inputs.value == "0" || document.calForm.inputs.value == result){
        document.calForm.inputs.value = "5"
    }
    else{
        document.calForm.inputs.value += "5"
    }
}
function numsix(){
    if(document.calForm.inputs.value == "0" || document.calForm.inputs.value == result){
        document.calForm.inputs.value = "6"
    }
    else{
        document.calForm.inputs.value += "6"
    }
}
function numseven(){
    if(document.calForm.inputs.value == "0" || document.calForm.inputs.value == result){
        document.calForm.inputs.value = "7"
    }
    else{
        document.calForm.inputs.value += "7"
    }
}
function numeight(){
    if(document.calForm.inputs.value == "0" || document.calForm.inputs.value == result){
        document.calForm.inputs.value = "8"
    }
    else{
        document.calForm.inputs.value += "8"
    }
}
function numnine(){
    if(document.calForm.inputs.value == "0" || document.calForm.inputs.value == result){
        document.calForm.inputs.value = "9"
    }
    else{
        document.calForm.inputs.value += "9"
    }
}
function numzero(){
    if (document.calForm.inputs.value == "0") {  
  
        document.calForm.inputs.value = "0";  

    } else if (document.calForm.inputs.value == result) {  
        document.calForm.inputs.value = "0";  
    } else  
    {  
        document.calForm.inputs.value = document.calForm.inputs.value + "0";  
    }  

}
function numdoublezero(){
    // alert("clicked")
    if(document.calForm.inputs.value == "0" || document.calForm.inputs.value == result){
        return;
    }
    else{
        document.calForm.inputs.value += "00"
    }
}
function clr(){
    document.calForm.inputs.value = "0";
    document.calForm.res.value = "";
    
}
function addition(){
    operation = "+"
    firstnumber = parseInt(document.calForm.inputs.value);
    document.calForm.inputs.value = "0";
    document.calForm.res.value = firstnumber + operation;

}
function multiply(){
    operation = "*"
    firstnumber = parseInt(document.calForm.inputs.value);
    document.calForm.inputs.value = "0";
    document.calForm.res.value = firstnumber + operation;

}
function subtract(){
    operation = "-"
    firstnumber = parseInt(document.calForm.inputs.value);
    document.calForm.inputs.value = "0";
    document.calForm.res.value = firstnumber + operation;

}
function divide(){
    operation = "/"
    firstnumber = parseInt(document.calForm.inputs.value);
    document.calForm.inputs.value = "0";
    document.calForm.res.value = firstnumber + operation;

}
// function powerof(){
//     operation = "^"
//     firstnumber = parseInt(document.calForm.inputs.value)
//     document.calForm.inputs.value = "0"
// }
function percent(){
    operation = "%"
    firstnumber = parseInt(document.calForm.inputs.value);
    document.calForm.inputs.value = "0";
    document.calForm.res.value = firstnumber + operation;
}

function squareroot(){
    firstnumber = document.calForm.inputs.value;
    result = Math.sqrt(parseInt(document.calForm.inputs.value))
    document.calForm.inputs.value = result;
    document.calForm.res.value = "sqrt("+ firstnumber + ") = "+ result;

}
function erase(){
    if(document.calForm.inputs.value == "0"){
        return;
    }
    else{
        document.calForm.inputs.value = document.calForm.inputs.value.substr(0,document.calForm.inputs.value.length - 1);

    }
    

}
function equalsto(){

    secondnumber = parseInt(document.calForm.inputs.value);
    switch(operation){
        case '+':
            result = firstnumber + secondnumber;
            break;
        case '*':
            result = firstnumber * secondnumber;
            break;
        case '-':
            result = firstnumber - secondnumber;
            break;
        case '/':
            result = firstnumber / secondnumber; 
            break;
        case '%':
            if(document.calForm.inputs.value == "0"){
                result = firstnumber/100;
                document.calForm.res.value = firstnumber + operation + "100"
            }
            else if(document.calForm.inputs.value != "0"){
                result = firstnumber/secondnumber  * 100;
                document.calForm.res.value = firstnumber + operation + secondnumber + "* 100" + " = " + result;
            }
            break;
        case '^':
            for (var i = 0; i < secondnumber; i++) {  
                result = firstnumber * i;  
            }
            document.calForm.res.value = "pow("+firstnumber+","+secondnumber+")="+result;  
            break;

    }
    
        document.calForm.inputs.value = ""
        document.calForm.inputs.value = result.toString();
        document.calForm.res.value = firstnumber + operation + secondnumber + "=" + result.toString();   

}


function playsound(){
   let  sound = new Audio("audio/Audio.mp3")
    sound.play()
}
// function darkmode(){
    
//     let element = document.body;
//     element.classList.toggle("darkmode")
     
// }

