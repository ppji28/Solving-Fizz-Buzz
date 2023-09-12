# Solving Fizz Buzz

Fizz Buzz is a classic coding challenge often used in programming interviews and coding assessments. The rules are simple: you need to write a program that prints numbers from 1 to a given input number. However, there's a twist:

- If the number is divisible by 3, print "Fizz" instead of the number.
- If the number is divisible by 5, print "Buzz" instead of the number.
- If the number is divisible by both 3 and 5, print "FizzBuzz" instead of the number.

Here's a simple pseudocode to solve the Fizz Buzz challenge:

```plaintext
FOR each number FROM 1 TO inputNumber DO
    IF number MOD 3 EQUALS 0 THEN
        PRINT "Fizz"
    ELSE IF number MOD 5 EQUALS 0 THEN
        PRINT "Buzz"
    ELSE
        PRINT number
    END IF
END FOR
```

This pseudocode outlines a basic algorithm for solving Fizz Buzz:

1. Loop through numbers from 1 to the input number.
2. Check if the current number is divisible by 3. If yes, print "Fizz."
3. If not, check if the current number is divisible by 5. If yes, print "Buzz."
4. If the number is not divisible by either 3 or 5, print the number itself.