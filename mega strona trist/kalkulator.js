let firstFollowingInput = Number(prompt("Enter first number:", 0));
let sign = prompt("Enter a sign:");
let secondFollowingInput = Number(prompt("Enter second number:", 0));
let result;

if (!Number.isNaN(firstFollowingInput) && !Number.isNaN(secondFollowingInput)) {
    switch (sign) {
        case "+": 
            result = firstFollowingInput + secondFollowingInput; 
            break;
        case "-":
            result = firstFollowingInput - secondFollowingInput;
            break;
        case "*":
            result = firstFollowingInput * secondFollowingInput;
            break;
        case "/":
            result = firstFollowingInput / secondFollowingInput;
            break;
        default:
            result = "Error: unknown sign";
    }
} else {
    result = "Error: at least one of the entered values is not a number";
}
alert(result);
