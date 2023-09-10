function playFizzBuzz() {
    // Get user input
    const userInput = document.getElementById("userInput").value;
    
    // Check if the input is a number
    if (!isNaN(userInput)) {
        let result = "";

        // Check for divisibility by 3 and 5
        if (userInput % 3 === 0) {
            result += "Fizz";
        }
        if (userInput % 5 === 0) {
            result += "Buzz";
        }
        if (userInput % 5,3 === 0) {
            result += "FizzBuzz";
        }
        // Display the result in an alert
        if (result) {
            alert(result);
        } else {
            alert(userInput);
        }
    } else {
        alert("Please enter a valid number.");
    }
}
