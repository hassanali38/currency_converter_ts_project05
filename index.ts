#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.bold.green.underline('\t\t\t\t\tWelcome to Currency Converter\n'));

while (true) {
    let currencyNames : string[] = ["USD", "PKR", "EUR", "AED", "SAR", "QAR"];

    let initialCurrency = await inquirer.prompt([
        {
            type : "list",
            name : "currency",
            message : "Select the currency which you want to convert: ",
            choices : ["USD", "PKR", "EUR", "AED", "SAR", "QAR"]
        }
    ]);
    
    //Removing the currency which the user already opted, as the initial currency, from the targeted currencies
    currencyNames.splice(currencyNames.indexOf(initialCurrency.currency), 1);
    
    let targetCurrency = await inquirer.prompt([
        {
            type : "list",
            name : "currency",
            message : "Select the targeted currency: ",
            choices : currencyNames
        },
        {
            type : "number",
            name : "amount",
            message : `Enter the amount in ${initialCurrency.currency}: `,
        }
    ]);
    
    //Creating an object named as Currency with USD as a base currency
    const Currency : {[key:string] : number} = {
        USD : 1,
        EUR : 0.93,
        PKR : 278,
        AED : 3.67,
        SAR : 3.75,
        QAR : 3.64
    };
    
    //Converting the given amount to equivalent USD amount as a base amount
    let baseAmount : number = targetCurrency.amount / Currency[initialCurrency.currency];

    //Converting the base amount (in USD) to the targeted currency
    let convertedAmount : number = baseAmount * Currency[targetCurrency.currency];
    
    console.log(`The amount in ${targetCurrency.currency}: ${convertedAmount.toFixed(2)}\n`);

    //Prompting the user whether to again use the program or not
    let againConvert = await inquirer.prompt([
        {
            type : "list",
            name : "choice",
            message : "Do you want to convert another amount? ",
            choices : ["Yes", "No"]
        }
    ]);

    if (againConvert.choice === 'No') 
        break;
}








