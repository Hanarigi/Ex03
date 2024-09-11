function isTheSame(array1,array2){
    if (array1 === null || array2 === null) return "wrong input";
    else if(array1.length !== array2.length) return false;
    else{
        let check = 1;
        for(let i =0; i < array1.length; i++){
            if (array1[i] !== array2[i]) check = 0;
            if (check === 0) break;
        }
        if (check === 1) return true;
        else return false;
    }
}

