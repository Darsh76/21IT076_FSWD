const os = require("os");
console.log("Username: " + os.userInfo().username);
console.log("Home Directory: " + os.userInfo().homedir);
console.log("Operating System Platform: " + os.platform());

function memory() {
    console.log("Total System Memory: " + os.totalmem() + " bytes");
    console.log("Free Memory: " + os.freemem() + " bytes");
    console.log("Percentage of Free Memory Available: " + (os.freemem() / os.totalmem()) * 100 + "%");
    //in GB
    console.log("Total System Memory: " + (os.freemem()) / 1024 / 1024 / 1024 + " GB");
}
memory();
