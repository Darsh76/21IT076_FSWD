const readline = require('readline');
const url = require('url');

// Create a readline interface to get user input
const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to parse and display the URL components
function parseURL(inputURL) {
    const parsedURL = new URL(inputURL);

    console.log('Protocol:', parsedURL.protocol);
    console.log('Host:', parsedURL.host);
    console.log('Path:', parsedURL.pathname);
    console.log('Query Parameters:');
    parsedURL.searchParams.forEach((value, key) => {
        console.log(`  ${key}: ${value}`);
    });
}

// Prompt the user to enter a URL
rl.question('Enter a URL: ', (inputURL) => {
    parseURL(inputURL);
    rl.close();
});
