var MongoClient = require('mongodb').MongoClient;
function addOject(collection, object) {
    collection.insert(object, function (err, result) {
        if(!err) {
            console.log("Insert : ");
            console.log(result);
        } else {
            console.log(err);
        }
    });
}

MongoClient.connect("mongodb://dbadmin:passw0rd@localhost:27017", function (err, db) {
    var newDB = db.db("newDB");
    // newDB.createCollection("nebulae", function (err, nebulae) {
    //     addOject(nebulae, {ngc:"NGC 7293", name:"Helix", type:"planetary", location:"Aquila"});
    //     addOject(nebulae, {ngc:"NGC 6543", name:"Cat's Eye", type:"planetary", location:"Draco"});
    //     addOject(nebulae, {ngc:"NGC 1952", name:"Crab", type:"supernova", location:"Taurus"});
    // });

    newDB.collection("nebulae", function (err, nebulae) {
        nebulae.find(function (err, items) {
            items.toArray(function (err, itemArr) {
                console.log("Document Array : ")
                console.log(itemArr);
            });
        });
        nebulae.find(function (err, items) {
            items.each(function (err, item) {
                if(item) {
                    console.log("Singular Document: ");
                    console.log(item);
                }
            });
        });
        nebulae.findOne({type:'planetary'}, function (err, item) {
            console.log("Found One: ");
            console.log(item);
        });
    });
    setTimeout(function () {
        db.close();
    }, 3000);
});