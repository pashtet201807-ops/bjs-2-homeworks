"use strict";

function solveEquation(a, b, c) {
  let discriminant = b**2 - 4 * a * c;
  
  if (discriminant < 0) {
    return [];
  }
  
  if (discriminant === 0) {
    let root = -b / (2 * a);
    return [root];
  }
  
  let root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
  let root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
  return [root1, root2];
}


function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let parsedPercent = Number(percent);
  let parsedContribution = Number(contribution);
  let parsedAmount = Number(amount);
  let parsedCountMonths = Number(countMonths);

  if (Number.isNaN(parsedPercent) || Number.isNaN(parsedContribution) || 
      Number.isNaN(parsedAmount) || Number.isNaN(parsedCountMonths)) {
    return false;
  }

  let p = parsedPercent / 100 / 12;
  let s = parsedAmount - parsedContribution;
  let n = parsedCountMonths;

  let monthlyPayment = s * (p + (p / (((1 + p) ** n) - 1)));
  let totalAmount = monthlyPayment * n;

  return Number(totalAmount.toFixed(2));
}
