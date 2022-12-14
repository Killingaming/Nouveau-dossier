const express = require("express");
const dbo = require("./db.js");
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const app = express();
const port = 4444;


dbo.connectToServer();


app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.listen(port, function () {
  console.log(`App listening on port ${port}!`);
});

app.use(bodyParser.urlencoded({ extended: true }));


/* index.js code before... */
app.get("/pokemon", function (req, res) {
  //on se connecte à la DB MongoDB
  const dbConnect = dbo.getDb();
  //premier test permettant de récupérer mes pokemons !
  dbConnect
    .collection("pokemon")
    .find({}) // permet de filtrer les résultats
    /*.limit(50) // pourrait permettre de limiter le nombre de résultats */
    .toArray(function (err, result) {
      if (err) {
        res.status(400).send("Error fetching pokemons!");
      } else {
        res.json(result);
      }
    });

    app.post('/pokemon/insert', jsonParser, (req, res) => {
      const body = req.body;
      console.log('Got body:', body);
      //on code ensuite l'insertion dans mongoDB, lisez la doc hehe !!
      res.json(body);
  });
  
    /*
    Bref lisez la doc, 
    il y a plein de manières de faire ce qu'on veut :) 
    */
    
});





