const fakultet = function(tall) {
    if (tall < 0) return 0; // Factorial is not defined for negative numbers
    let result = 1;
    for (let i = 1; i <= tall; i++) {
        result *= i;
    }
    return result;
}

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    const input = document.querySelector('input[name="tall"]').value; // Get the input value
    const result = fakultet(Number(input)); // Calculate the factorial
    console.log('Input value:', input); // Debugging statement
    console.log('Calculated result:', result); // Debugging statement

    document.querySelector('.resultat').innerHTML = `Resultatet er: ${result}`; // Update the result display
});
