function playFizzBuzz() {
    // Get user input
    const userInput = parseInt(document.getElementById("userInput").value);
    
    // Check if the input is a valid number
    if (!isNaN(userInput) && userInput > 0) {
        let result = "";

        // Generate Fizz Buzz for numbers from 1 to userInput
        for (let i = 1; i <= userInput; i++) {
            if (i % 3 === 0 && i % 5 === 0) {
                result += "FizzBuzz, ";
            } else if (i % 3 === 0) {
                result += "Fizz, ";
            } else if (i % 5 === 0) {
                result += "Buzz, ";
            } else {
                result += i + ", ";
            }
        }

        // Remove the trailing comma and display the result in an alert
        result = result.slice(0, -2);
        alert(result);
    } else {
        alert("Please enter a valid number greater than 0.");
    }
}
