function factorial(n){
    n = parseInt(n);
    let f = 1;
    for(let i = 1; i <= n; i++){
        f *= i;
    }
    return f;
}
