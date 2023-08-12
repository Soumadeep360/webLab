var mysql=require('mysql');

var con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"weblab"
});

con.connect(function(err){
    if(err)throw(err);
    console.log("connected!");
    con.query("create table customer (name varchar(255),age int,place varchar(255))",function(err,result){
        if(err) throw(err);
        console.log("Table Created!");
    })
})