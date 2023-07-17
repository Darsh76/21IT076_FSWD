const http = require("http");
const fs = require("fs");
const httpserver = http.createServer(function (req, res) {
    if (req.method == 'GET') {
        console.log("This is get request");
        res.end("This is GET request");
    }
    if (req.method == 'POST') {
        res.end("This is POST request");
    }
}
);

httpserver.listen(3000, () => {
    console.log("Listning on port 3000...");
}
)