/*
Exercise One - Computing a lifetime supply of your favorite snack!

You just won a lifetime supply of your favorite snack. 
You are going to write a piece of code which will determine how much you
will actually need to last the rest of your life.

Follow the instructions to get the amount, putting your code after each instruction.

Remember to use descriptive variable names!
*/

// 1. Store your current age into a variable.
// Hint: let age = ...;
const age = 37;
console.log(age)

// 2. Store a maximum age into a variable.
let maxAge = 90;
console.log(maxAge)
// 3. Store an estimated amount per day (as a number).
// For example 1, for 1 bag of chips per day.
let bags = 2;
console.log(bags)
// 4. Calculate how many you would eat total for the rest of your life.
// Store the result in a variable.
// Hint: There are 365 days in a year, multiply that by the number of years and the amount per day...
let answer = (365 * 53) * 2;
console.log(answer);
// 5. Create a variable called message describing your result.
// "You will need NN to last you until the ripe old age of X".
let message = "You will need 38690 bags to last until I am 90 years old";
// 6. console.log() your message.
let message = "You will need 38690 bags to last until I am 90 years old";
console.log(message)

/*
Exercise Two - Calculating your future age.

You want to know how old you will be in any given year.  Create a piece of code that will computer
your age given your birth year and a year in the future. 
*/

// 1. Store your birth year in a variable.
const yearOfBirth = 1982;
console.log(yearOfBirth)
// 2. Store a future year in a variable.
const futureYear = 2050;
console.log(futureYear)
// 3. Calculate your 2 possible ages for that year based on the stored values.
// For example, if you were born in 1988, then in 2026 you'll be either 37 or 38, depending on what month it is in 2026.
let answer = 2050 - 1982;
console.log(answer)
// 4. Create a variable called message which describes the result.
// "I will be either NN or NN in YYYY", substituting the values.
let message = "I will be 67 or 68 in the year 2050."


// 5. console.log() your message.
let message = "I will be 67 or 68 in the year 2050."
console.log(message)
/*
Exercise Three - Temperature Converter

Build some code which can convert from Fahrenheit to Celcius, and also from Celcius to Fahrenheit.

Based upon the method described here: https://www.mathsisfun.com/temperature-conversion.html
Celcius to Fahrenheit:  Divide by 5, then multiply by 9, then add 32
Fahrenheit to Celcius:  Deduct 32, then multiply by 5, then divide by 9
*/

// 1. Store a celsius temperature into a variable.
// Hint: let tempInCelcius = 32;
let tempInCelcius = 55;
console.log(tempInCelcius)
// 2. Convert it to fahrenheit and store that in a new variable.
let convert = (55/5) * 9 + 32;

// 3. Output to console.log() in the format "NN°C is NN°F".
let convert = (55/5) * 9 + 32;
console.log(convert)
// 4. Now store a fahrenheit temperature into a variable.
let tempFahrenheit = 85;
console.log(tempFahrenheit)
// 5. Convert it to celsius  and store that in a new variable.
let converted = (85-32) * 5 / 9;
// 6. Output to console.log() in the format "NN°F is NN°C."
let converted = (85-32) * 5 / 9;
console.log(converted)