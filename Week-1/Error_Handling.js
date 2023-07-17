function checkPositiveNumber(number) {
    if (number < 0) {
        throw new Error("Number must be positive.");
    }
    return number;
}

try {
    var result = checkPositiveNumber(-5);
    console.log("Result:", result);
} catch (error) {
    console.log("Error:", error.message);
}
