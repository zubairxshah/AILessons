import inquirer from "inquirer";
const result = await inquirer.prompt([
    { message: "Enter first number", type: "number", name: "firstNumber" },
    { message: "Enter second number", type: "number", name: "secondNumber" },
    {
        Message: "Select one of the operators to perform action operation",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
// conditional statement
if (result.operator === "Addition") {
    console.log(result.firstNumber + result.secondNumber);
}
else if (result.operator === "Subtraction") {
    console.log(result.firstNumber - result.secondNumber);
}
else if (result.operator === "Multiplication") {
    console.log(result.firstNumber * result.secondNumber);
}
else if (result.operator === "Division") {
    console.log(result.firstNumber / result.secondNumber);
}
else {
    console.log("Please select a valid operator");
}
// Conditional statement using 'switch'
// switch (result.operator) {
//   case ('Addition'):
//   console.log (result.firstNumber + result.secondNumber)
//   break;
//   case ('Subtraction') :
//   console.log (result.firstNumber - result.secondNumber)
//   break;
//   case ('Multiplication') :
//     console.log (result.firstNumber * result.secondNumber)
//     break;
//   case ('Division'):
//     console.log(result.firstNumber / result.secondNumber)
//     break;
//   default:
//     console.log('Select an arithmatic function.')
//     break;
// }
// program ends here.
