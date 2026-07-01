import readlineSync from 'readline-sync';
let n = readlineSync.questionInt("Enter a num");
function prime(n) {
    for (let i = 2; i < n / 2; i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}
for (let i = 2; i < n; i++) {
    if (prime(i)) {
        console.log("Prime number: ", i);
    }
}
