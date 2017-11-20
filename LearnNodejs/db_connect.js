var MongoClient = require('mongodb').MongoClient;
MongoClient.connect("mongodb://dbadmin:passw0rd@localhost:27017",
    function (err, db) {
        if (err) {
            console.log("Connection Failed !");
        } else {
            var adminDB = db.admin();
            // adminDB.listDatabases(function (err, databases) {
            //         if (err) {
            //             console.log(err);
            //         } else {
            //             console.log("Before add Database list:");
            //             console.log(databases);
            //         }
            //     }
            // );

            var newDB = db.db("newDB");
            newDB.collection("newCollection", function (err, collection) {
                collection.find(function (err, items) {
                    items.toArray(function (err, itemArr) {
                        console.log(itemArr);
                    })
                });
                collection.stats(function (err, stats) {
                    console.log(stats);
                    db.close();
                })
            });


            console.log("Connected!");
            // db.logout(function (err, result) {
            //     if (!err) {
            //         console.log("Logged out via connection!")
            //     }
            //     db.close();
            //     console.log("connection closed...");
            // });
        }
    })
;