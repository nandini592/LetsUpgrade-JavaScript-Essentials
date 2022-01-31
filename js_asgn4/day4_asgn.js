function printmytable() {
    let num = prompt("enter number");
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} * ${i} = ${num * i}`);
    }
}
printmytable();