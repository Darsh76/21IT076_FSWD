function simulateAsyncOperation(callback) {
  setTimeout(function () {

    var result = "Operation completed.";

    callback(result);
  }, 2000);
}

function handleResult(result) {
  console.log("Result:", result);
}

console.log("Starting asynchronous operation...");
simulateAsyncOperation(handleResult);
console.log("Asynchronous operation initiated.");
