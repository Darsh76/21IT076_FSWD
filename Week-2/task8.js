const fs = require("fs");
const path = "./Directory";
access(path, (error) => {
    // To check if the given directory
    // already exists or not
    if (error) {
        // If current directory does not exist
        // then create it
        mkdir(path, (error) => {
            if (error) {
                console.log(error);
            } else {
                console.log("New Directory created successfully !!");
            }
        });
    } else {
        console.log("Given Directory already exists !!");
    }
});