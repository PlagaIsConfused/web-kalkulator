const fakultet = function(tall) {
    if (tall < 0) return 0; // Factorial is not defined for negative numbers
    let result = 1;
    for (let i = 1; i <= tall; i++) {
        result *= i;
    }
    return result;
}



module.exports = { fakultet }; // Exporting the factorial function
