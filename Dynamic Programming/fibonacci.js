// Recursive version
function fib(n){
    if(n<=2) return 1;
    return fib(n-1) + fib(n-2);
}

// Big O
// O(2^n) this is not great

// Dymamic version
function fib(n, memo=[]){
    if(memo[n] !== undefined) return memo[n];
    if(n<=2) return 1;
    let res = fib(n-1, memo) + fib(n-2, memo);
    memo[n] = res;
    return res;
}

// Big O
// O(N)
// will run out of space at high numbers

// Tabulation version (start from bottom)
function fib(n){
    if(n<=2) return 1;
    let fibNums = [0,1,1];
    for(let i=3; i<=n; i++){
        fibNums[i] = fibNums[i-1] + fibNums[i-2];
    }
    return fibNums[n]
}

// Big O
// O(N) - only 1 loop
// space complexity lower then memoization version beacuse not storing anything