const mysql = require('mysql');
const express = require('express');
const app = express();

const bodyparser = require('body-parser');
app.use(bodyparser.json());

var  mysqlConnection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database : "test"
  });
  
  mysqlConnection.connect((err) => {
    if (!err)
        console.log('DB connection succeded.');
    else
        console.log('DB connection failed');
});

app.listen(4000, () => console.log('Express server is runnig at port no : 4000'));


app.get('/user', (req, res) => {
  mysqlConnection.query('SELECT * FROM test.user', (err, rows, fields) => {
      if (!err)
          res.send(rows);
      else
          console.log(err);
  })
});