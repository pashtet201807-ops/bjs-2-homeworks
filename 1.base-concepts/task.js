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
