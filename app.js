#! /usr/bin/env node
import inquirer from "inquirer";
let balance = 100000;
let pinCode = 7787;
let pin = await inquirer.prompt({
    name: "code",
    type: "number",
    message: "Enter your Pin",
});
if (pin.code === pinCode) {
    console.log("welcome");
    let opretion = await inquirer.prompt({
        name: "menu",
        type: "list",
        choices: ["withdraw", "check balance"],
        message: "Choose one option",
    });
    if (opretion.menu === "withdraw") {
        let amount = await inquirer.prompt({
            name: "cash",
            type: "number",
            message: "Enter your Amount",
        });
        if (amount.cash < balance) {
            balance -= amount.cash;
            console.log(`Your current balance is ${balance}`);
        }
        else {
            console.log("insufficient balance");
        }
    }
    else if (opretion.menu === "check balance") {
        console.log(`Your current balance is ${balance}`);
    }
}
else {
    console.log("incorrect pin");
}
