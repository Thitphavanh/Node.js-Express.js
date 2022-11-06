// Preview Callback Function

function calculate(x, y, callback) {
  console.log("Calculating...");
  setTimeout(() => {
    const sum = x + y;
    callback(sum);
  }, 3000);
}

// function display(result) {
//   console.log("Result = ${result}");
// }

// Nomal Function
// const sum = calculate(100, 50);
// display(sum);

// Function Callback
// calculate(100, 50);
calculate(100, 50, function (result) {
  console.log(`Result = ${result}`);
});
