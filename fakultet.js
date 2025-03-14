const fakultet = function(tall) {
    if (tall < 0) return 0; // Factorial is not defined for negative numbers
    let result = 1;
    for (let i = 1; i <= tall; i++) {
        result *= i;
    }
    return result;
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
