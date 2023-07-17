const fs = require('fs');
function compareFiles(file1Path, file2Path) {
    const file1Content = readFileSync(file1Path, 'utf-8');
    const file2Content = readFileSync(file2Path, 'utf-8');
    const file1Size = Buffer.byteLength(file1Content, 'utf-8');
    const file2Size = Buffer.byteLength(file2Content, 'utf-8');
    console.log(`File 1 size: ${file1Size} bytes`);
    console.log(`File 2 size: ${file2Size} bytes`);
    if (file1Size > file2Size) {
        console.log('File 1 is larger than File 2');
    } else if (file1Size < file2Size) {
        console.log('File 2 is larger than File 1');
    } else {
        console.log('Both files are of the same size');
    }
    const file1Lines = file1Content.split('\n');
    const file2Lines = file2Content.split('\n');
    for (let i = 0; i < file1Lines.length; i++) {
        if (file1Lines[i] !== file2Lines[i]) {
            console.log(`Difference found at line ${i + 1}:`);
            console.log(`File 1: ${file1Lines[i]}`);
            console.log(`File 2: ${file2Lines[i]}`);
            console.log(''); // Add an empty line for readability
        }
    }
}
const file1Path = './week2/file1.txt';
const file2Path = './week2/file2.txt';
compareFiles(file1Path, file2Path);file