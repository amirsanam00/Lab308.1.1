//The below example is from the CodeSandBox listed in the assignment.

// The initial numbers that must be verified.
// const n1 = 10;
// const n2 = 15;
// const n3 = 20;
// const n4 = 5;

// // Check one: add up to 50
// // This is a fairly simple operation using
// // arithmetic operators and a comparison.
// const isSum50 = (n1 + n2 + n3 + n4) == 50;

// // Check two: at least two odd numbers
// // Here, we use modulus to check if something is odd.
// // Since % 2 is 0 if even and 1 if odd, we can use
// // arithmetic to count the total number of odd numbers.
// const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// // Check three: no number larger than 25
// // This time, we use the OR operator to check
// // if ANY of the numbers is larger than 25.
// const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

// // Check four: all unique numbers
// // This is long, and there are more efficient
// // ways of handling it with other data structures
// // that we will review later.
// const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// // Here, we put the results into a single variable 
// // for convenience. Note how we negate isOver25 using
// // the ! operator. We could also have tested for 
// // "isUnder25" as an alternative.
// const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// // Finally, log the results.
// console.log(isValid);

// // Here's another example of how this COULD be done,
// // but it SHOULD NOT be done this way. As programmers,
// // we break things into small, manageable pieces so that
// // they can be better understood, scaled, and maintained.
// const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
//   ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  // !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
//   (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);

// =================================================
// Part 1:

const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

  //Implement the following:
  // Check if all numbers are divisible by 5. Cache the result in a variable.

  const allDvisibleBy5 = (n1 % 5 === 0) && (n2 % 5 === 0) && (n3 % 5 === 0) && (n4 % 5 === 0);
  console.log ("allDvisibleBy5");

  // Check if the first number is larger than the last. Cache the result in a variable.

  const isTheFirstNumberLargerThanLast = n1 > n4;
  console.log("true")

  // Accomplish the following arithmetic chain:
      // Subtract the first number from the second number.
      let result = n2 - n1;
      // Multiply the result by the third number.
      result *= n3;
      // Find the remainder of dividing the result by the fourth number.
      result %= n4;

      console.log("result of the arithmetic")

  // Change the way that isOver25 calculates so that we do not need to use the NOT operator (!) in other logic comparisons. Rename the variable as appropriate.

  const isUnder25 = n1 < 25 && n2 < 25 && n3 < 25 && n4 < 25;
  console.log ("numbersAreUnder25")
  // These are all arbitrary problems, but they demonstrate the simplicity of working with arithmetic and comparisons in programming. No matter the complexity of the task in front of you, you will always use these core operators to accomplish it.
// Before continuing, go back through your code and add console log statements  for each check. Use string concatenation or template literals to format the outputs in a reasonable way.
console.log (`FinalOutput,
  - AllNumbersDividedBy5;
  - isTheFirstNumberLargerThanLast; 
  - ResultsofTheArithmetic;
  - NumbersAreUnder25`
)

// Part 2
    // Let’s look at a more practical scenario. You are planning a cross-country road trip!
      // The distance of the trip, in total, is 1,500 miles.
      const totalDistance = 1500; // in miles
      // Your car’s fuel efficiency is as follows:
      // At 55 miles per hour, you get 30 miles per gallon (mpg).
      const mpgAt55 = 30;
      // At 60 miles per hour, you get 28 miles per gallon.
      const mpgAt60 = 28;
      // At 75 miles per hour, you get 23 miles per gallon.
      const mpgAt75 = 23;
      // You have a fuel budget of $175.
      const fuelBudget = 175; // in dollars
      // The average cost of fuel is $3 per gallon.
      const fuelCostPerGallon = 3; 
    // Set up a program to answer the following questions:
      // How many gallons of fuel will you need for the entire trip?
      // Will your budget be enough to cover the fuel expense?
      // How long will the trip take, in hours?
      // Compare the results when traveling at an average of 55, 60, and 75 miles per hour. Which makes the most sense for the trip?
    // Log the results of your calculations using string concatenation or template literals.

// =================================

    // --- Calculations for 55 mph ---
const gallonsNeededAt55 = totalDistance / mpgAt55; // Gallons needed
const totalFuelCostAt55 = gallonsNeededAt55 * fuelCostPerGallon; // Fuel cost
const timeTakenAt55 = totalDistance / 55; // Time in hours
const isBudgetEnoughAt55 = totalFuelCostAt55 <= fuelBudget; // Budget check

console.log(`Trip details at 55 mph:
  - Gallons of fuel needed: ${gallonsNeededAt55}
  - Total fuel cost: $${totalFuelCostAt55}
  - Time taken: ${timeTakenAt55} hours
  - Budget sufficient: ${isBudgetEnoughAt55}`);

  //================================

  // --- Calculations for 60 mph ---
const gallonsNeededAt60 = totalDistance / mpgAt60; // Gallons needed
const totalFuelCostAt60 = gallonsNeededAt60 * fuelCostPerGallon; // Fuel cost
const timeTakenAt60 = totalDistance / 60; // Time in hours
const isBudgetEnoughAt60 = totalFuelCostAt60 <= fuelBudget; // Budget check

console.log(`Trip details at 60 mph:
  - Gallons of fuel needed: ${gallonsNeededAt60}
  - Total fuel cost: $${totalFuelCostAt60}
  - Time taken: ${timeTakenAt60} hours
  - Budget sufficient: ${isBudgetEnoughAt60}`);

// =========================================

  // --- Calculations for 75 mph ---
const gallonsNeededAt75 = totalDistance / mpgAt75; // Gallons needed
const totalFuelCostAt75 = gallonsNeededAt75 * fuelCostPerGallon; // Fuel cost
const timeTakenAt75 = totalDistance / 75; // Time in hours
const isBudgetEnoughAt75 = totalFuelCostAt75 <= fuelBudget; // Budget check

console.log(`Trip details at 75 mph:
  - Gallons of fuel needed: ${gallonsNeededAt75.}
  - Total fuel cost: $${totalFuelCostAt75}
  - Time taken: ${timeTakenAt75} hours
  - Budget sufficient: ${isBudgetEnoughAt75}`);