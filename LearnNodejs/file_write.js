var fs = require('fs');
var config = {
    maxFile : 20,
    maxConnections : 15,
    rootPath : "/webrootdir"
}
var configTxt = JSON.stringify(config);
var options = {encoding:'utf-8', flag:'w'};
fs.writeFile('d:\config.txt', configTxt, options, function (err) {
    if(err) {
        console.log("config write failed.")
    } else {
        console.log("config saved.")
    }
});