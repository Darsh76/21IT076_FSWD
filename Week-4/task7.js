import { access, constants } from 'fs';
function checkFileExists(filePath) {
    access(filePath, constants.F_OK, (err) => {
        if (err) {
            console.error(`Error: The file "${filePath}" does not exist.`);
        } else {
            console.log(`Success: The file "${filePath}" exists.`);
        }
    });
}
const filePath = 'D:/FSWD/student.txt';
checkFileExists(filePath);