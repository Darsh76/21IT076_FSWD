const fs = require('fs');
readFile('./week2/student-data.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }
    const students = data.split('\n');
    const filteredStudents = students.filter((student) => {
        const [name, cgpa] = student.split(',');
        const nameRegex = /ma/i; // Regex to match 'MA' (case-insensitive)
        return name.match(nameRegex) && parseFloat(cgpa) > 7;
    });
    console.log('Students with name containing "MA" and CGPA > 7:');
    console.log(filteredStudents);
});