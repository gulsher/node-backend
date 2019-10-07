const mysql = require('mysql');
const express = require('express');
var app = express();

const bodyparser = require('body-parser');
app.use(bodyparser.json());

let con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database : "test"
  });
  
  con.connect((err) => {
    if (!err)
        console.log('DB connection succeded.');
    else
        console.log('DB connection failed \n Error : ' + JSON.stringify(err, undefined, 2));
});

app.listen(3000,()=>console.log("server is running at port no 3000"));

app.get('/user',(res,req)=>{
    mysqlConnection.query('SELECT * FROM user', (err, rows, fields) => {
        if (!err)
            console.log(rows);
        else
            console.log(err);
    })
});