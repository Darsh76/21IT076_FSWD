var Client = require('node-rest-client').Client;
var client = new Client();
var args = {
    data: { test: "hello" },
    headers: { "Content-Type": "application/json" }
};
client.post("http://remote.site/rest/xml/method", args, function (data, response) {
    console.log(data);
    console.log(response);
});
client.registerMethod("postMethod", "http://remote.site/rest/json/method", "POST");
client.methods.postMethod(args, function (data, response) {
    console.log(data);
    console.log(response);
});