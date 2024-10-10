function prodCalc(a, b = 2, c = 1) {
    return a * b * c;
  }
  
  const result1 = prodCalc(3);
  const result2 = prodCalc(2, 4);
  const result3 = prodCalc(1, 2, 3);
  const result4 = prodCalc(2, undefined, 5);

  console.log("Result 1:", result1);
  console.log("Result 2:", result2);
  console.log("Result 3:", result3);
  console.log("Result 4:", result4);