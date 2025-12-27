const repeatString = function(str,num) {
    let returnStr = "";
    for(let i = 0; i < num; i++){
        returnStr += str
    }
        
    return returnStr;
};

alert(repeatString("hello",3));

// Do not edit below this line
module.exports = repeatString;
