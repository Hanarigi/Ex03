function reverseString(inputstring){
    if (!inputstring === null){
        let arr = [];
    arr = inputstring;
    let reversed = [];
    for(let i = arr.length - 1; i>=0; i--){
        reversed.push(arr[i]);
    }
    inputstring = reversed.join("");
    return inputstring;
    } 
    else return "wrong input";
}
function isPalindrome(str){
    if(!str === null){
        str = str.toLowerCase();
    reversed = reverseString(str);
    if (reversed === str) return true;
    else return false;
    }
    else return "wrong input";
}
