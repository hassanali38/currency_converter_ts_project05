# currency_converter_ts_project05

Welcome to the Currency Converter application! This is a simple Node.js command-line application that allows you to convert an amount from one currency to another. The supported currencies are USD, PKR, EUR, AED, SAR, and QAR.

## Features

- Convert between different currencies.
- User-friendly command-line interface using `inquirer`.
- Accurate conversion rates with USD as the base currency.

## Prerequisites

Make sure you have Node.js installed on your system. You can download it from [Node.js official website](https://nodejs.org/).

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/currency-converter.git
    cd currency-converter
    ```

2. Install the necessary packages:

    ```bash
    npm install
    ```

## Usage

To use the currency converter, you can run it directly using Node.js or via the NPX command.

### Running with Node.js

```bash
node index.js
```

### Running with NPX

You can also run the application using the following NPX command:

```bash
npx currency-converter-byhassanali
```

### How to Use

1. The application will prompt you to select the initial currency.
2. Then, you will be asked to select the target currency and enter the amount you want to convert.
3. The application will display the converted amount.
4. Finally, you will be asked if you want to perform another conversion or exit the application.

### Example
```bash
Welcome to Currency Converter

? Select the currency which you want to convert: (Use arrow keys)
  USD
  PKR
  EUR
  AED
  SAR
  QAR
```

```bash
? Select the targeted currency: (Use arrow keys)
  USD
  PKR
  EUR
  AED
  SAR
  QAR
? Enter the amount in USD: 100
The amount in PKR: 27800.00

? Do you want to convert another amount? (Use arrow keys)
  Yes
  No
```

### Currency Conversion Rate
The conversion rates used in this application are based on USD as the base currency:

1- 1 USD = 1 USD
2- 1 USD = 0.93 EUR
3- 1 USD = 278 PKR
4- 1 USD = 3.67 AED
5- 1 USD = 3.75 SAR
6- 1 USD = 3.64 QAR

### Contributing 
Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

### Author
Hassan Ali
