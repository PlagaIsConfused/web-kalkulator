document.getElementById('factorial-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    const input = document.getElementById('factorial-input').value; // Get the input value
    const result = fakultet(Number(input)); // Calculate the factorial
    document.getElementById('factorial-result').innerText = `Factorial Result: ${result}`; // Display the result
});

document.getElementById('fizzbuzz-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    const input = document.getElementById('fizzbuzz-input').value; // Get the input value
    const result = fizzBuzz(Number(input)); // Calculate FizzBuzz
    document.getElementById('fizzbuzz-result').innerText = `FizzBuzz Result: ${result}`; // Display the result
});
