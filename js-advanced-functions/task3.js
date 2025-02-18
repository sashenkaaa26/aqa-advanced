function divide(numerator,denominator){
  if (typeof numerator !== 'number' || typeof denominator !== 'number') {
    throw new Error("Both arguments must be numbers");
}
if (denominator === 0) {
    throw new Error("Cannot divide by zero");
}
return numerator / denominator;
}

try {
  console.log(divide(5, 2)); 
} catch (error) {
  console.error(error.message);
} finally {
  console.log("Робота завершена");
}

try {
  console.log(divide(2, 0)); 
} catch (error) {
  console.error(error.message);
} finally {
  console.log("Робота завершена");
}

try {
  console.log(divide('t', 4))
} catch (error) {
  console.error(error.message);
} finally {
  console.log("Робота завершена");
}
