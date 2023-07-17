const fs = require('fs');
function createFileBackup() {
    const sourceFile = './week2/source.txt';
    const backupFile = 'backup.txt';
    fs.copyFile(sourceFile, backupFile, (err) => {
        if (err) {
            console.error('Error creating file backup:', err);
        } else {
            console.log('File backup created successfully.');
        }
    });
}
function restoreFileFromBackup() {
    const backupFile = 'DD.txt';
    const restoredFile = 'DD.txt';
    fs.copyFile(backupFile, restoredFile, (err) => {
        if (err) {
            console.error('Error restoring file from backup:', err);
        } else {
            console.log('File restored from backup successfully.');
        }
    });
}
createFileBackup();
fs.writeFile('DD.txt', 'Modified content', (err) => {
    if (err) {
        console.error('Error modifying the original file:', err);
    } else {
        console.log('Original file modified.');
        restoreFileFromBackup();
    }
});