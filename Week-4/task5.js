const path = require('path');
function getFileExtension(filePath) {
    const extension = extname(filePath);
    return extension;
}
const filePath = '../backup.txt';
const fileExtension = getFileExtension(filePath);
console.log('File Extension:', fileExtension);