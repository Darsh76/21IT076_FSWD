const path = require('path');
function extractDirAndBaseNames(filePath) {
    const dirname = _dirname(filePath);
    const basename = _basename(filePath);
    return { dirname, basename };
}
const filePath = 'FSWD/employee-data.json';

const { dirname, basename } = extractDirAndBaseNames(filePath);
console.log('Directory Name:', dirname);
console.log('Base Name:', basename);