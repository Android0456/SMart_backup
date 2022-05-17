const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const pg = require("pg");
const PORT = 5001;

const pool = new pg.Pool({
  user: "postgres",
  password: "0000",
  host: "localhost",
  port: 5432,
  database: "distance_lecture_db",
  max: 10,
});

pool.connect((err, db, done) => {
  if (err) {
    console.log(err);
  } else {
    db.query("SELECT * FROM temperature", (err, table) => {
      done();
      if (err) {
        return console.log(err);
      } else {
        console.log(table.rows);
        db.end();
      }
    });
  }
});
/*
pool.connect((err, db, done) => {
  if (err) {
    console.log(err);
  } else {
    var first_name = "Dummy";
    var last_name = "Dummyson";
    var person_no = "666666666666";
    var email = "dummy@gmail.com";
    var card_no = "99999999999";
    var student_mail = "dummy@kth.se";

    db.query(
      "INSERT INTO student (first_name, last_name, person_no, email, card_no, student_mail) VALUES ($1,$2, $3, $4, $5, $6)",
      [first_name, last_name, person_no, email, card_no, student_mail],
      (err, table) => {
        done();
        if (err) {
          return console.log(err);
        } else {
          console.log("NEW STUDENTDATA INSERTED");
          db.end();
        }
      }
    );
  }
});
*/
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(morgan("dev"));

app.use(function (request, response, next) {
  response.header("Access-Control-Allow-Origin", "*");
  response.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.post("/api/get-courses", function (request, response) {
  console.log(request.body);

  pool.connect((err, db, done) => {
    if (err) {
      console.log(err);
    } else {
      db.query("SELECT * FROM course", (err, table) => {
        done();
        if (err) {
          return console.log(err);
        } else {
          console.log(table.rows);
          db.end();
        }
      });
    }
  });
});

app.post("/api/get-temperature", function (request, response) {
  console.log(request.body);

  pool.connect((err, db, done) => {
    if (err) {
      console.log(err);
    } else {
      db.query("SELECT * FROM course", (err, table) => {
        done();
        if (err) {
          return console.log(err);
        } else {
          console.log(table.rows);
          db.end();
        }
      });
    }
  });
});

app.get("/api/temperature", function (request, response) {
  pool.connect(function (error, db, done) {
    if (error) {
      return response.status(400).send(error);
    } else {
      db.query("SELET * FROM temperature", function (error, table) {
        done();
        if (error) {
          return response.status(400).send(error);
        } else {
          return response.status(200).send(table.rows);
        }
      });
    }
  });
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
