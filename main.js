import { fizzBuzz } from './fizzbuzz.js'; // Importing the fizzBuzz function

document.getElementById('factorial-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    const input = document.getElementById('factorial-input').value; // Get the input value
    const result = fakultet(Number(input)); // Calculate the factorial
    document.getElementById('factorial-result').innerText = `Factorial Result: ${result}`; // Display the result
});

document.getElementById('fizzbuzz-form').addEventListener('submit', function(event) {
    console.log("FizzBuzz form submitted."); // Debugging log

    event.preventDefault(); // Prevent the default form submission
    const input = document.getElementById('fizzbuzz-input').value; // Get the input value
    console.log(`Input value: ${input}`); // Debugging log
    let result = '';
    for (let i = 1; i <= Number(input); i++) {
        result += fizzBuzz(i) + '\n'; // Generate FizzBuzz results
    }
    console.log(`FizzBuzz Result: ${result.trim()}`); // Debugging log
    document.getElementById('fizzbuzz-result').innerText = result.trim(); // Display the result
});
