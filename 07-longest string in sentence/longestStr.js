function longestWord(str){
    let words = str.split(" ");
    let longest = " ";
    for(let word of words){
        if (longest.length < word.length) longest = word;
    }
    return longest;
}
