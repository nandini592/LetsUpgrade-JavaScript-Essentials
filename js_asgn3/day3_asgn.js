let email = prompt("enter email");
let password = prompt("enter password");

console.log("output using if-else structure");

if ((email == "stu@letsupgrade.com") && (password == "12345")) {
    console.log("Hurray! Yor're logged in!!");
} else {
    console.log(":( please try again!");
}


console.log("output using ternary operator");

email == "stu@letsupgrade.com" && password == "12345" ?
    console.log("Hurray! Yor're logged in!!") :
    console.log(":( please try again!");

console.log("output using switch ");

switch (true) {
    case (email == "stu@letsupgrade.com" && password == '12345'):
        console.log("Hurray! Yor're logged in!!");
        break;
    default:
        console.log(":( please try again!");
}