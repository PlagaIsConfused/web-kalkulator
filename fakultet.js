const fakultet = function(tall) {
    if (tall < 0) return 0; // Factorial is not defined for negative numbers
    let result = 1;
    for (let i = 1; i <= tall; i++) {
        result *= i;
    }
    return result;
}

export function fibonacci(n) {
    if (n <= 1) return 1; // Base cases
    let a = 1, b = 1;
    for (let i = 2; i < n; i++) {
        const temp = a;
        a = b;
        b = temp + b; // Fibonacci calculation
    }
    return b;
}

document.querySelector('form').addEventListener('submit', function(event) {

    console.log('Form submitted'); // Debugging statement

    console.log('Form submitted'); // Debugging statement
    event.preventDefault(); // Prevent the default form submission
    console.log('Input value:', input); // Debugging statement

    console.log('Input value:', input); // Debugging statement
    const result = fakultet(Number(input)); // Calculate the factorial
    console.log('Calculated result:', result); // Debugging statement

    console.log('Calculated result:', result); // Debugging statement

});
