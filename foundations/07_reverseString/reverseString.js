const reverseString = function(str) {
    let strArr = str.split('');
    let reverseArr = [];
    let reverseStr = ""
    for(let i = strArr.length - 1; i >= 0; i--)
    {
        reverseArr.push(strArr.pop());
    }
    
    reverseStr = reverseArr.join("");
    return reverseStr;
};
reverseString("hello there");

// Do not edit below this line
module.exports = reverseString;
