// import fs from 'fs';
// import { resolve } from 'path';

// function areSameFiles(file1, file2) {
//     // Get the absolute paths for the two files
//     const absPath1 = resolve(file1);
//     const absPath2 = resolve(file2);

//     // Compare the absolute paths to check if they are the same file
//     return absPath1 === absPath2;
// }

// // Example usage:
// const file1 = 'path/to/file1.txt';
// const file2 = 'path/../path/to/file1.txt'; // Equivalent to 'path/to/file1.txt'

// const result = areSameFiles(file1, file2);
// console.log('Are the files the same?', result);

const fs = require('fs');
const path = require('path');
function areSameFiles(filePath1, filePath2) {
    const absolutePath1 = resolve(filePath1);
    const absolutePath2 = resolve(filePath2);
    return absolutePath1 === absolutePath2;
}

const file1 = '../backup.txt';
const file2 = '../backup.txt';

if (areSameFiles(file1, file2)) {
    console.log(`${file1} and ${file2} refer to the same file.`);
} else {
    console.log(`${file1} and ${file2} do not refer to the same file.`);
}