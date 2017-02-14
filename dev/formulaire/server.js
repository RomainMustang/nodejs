/*  Librairies à utiliser sur le fichier  */
var express    = require("express");
var path       = require("path");
var app        = express();
var bodyParser = require("body-parser");
var fs         = require("fs");


/*  décode l'en-tête de la page  */
app.use(bodyParser.urlencoded({extended: true}));


/*  Afficher la page index.html pour la route "/"  */
app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'index.html'));
});


/*  Post les éléments du formulaire dans le fichier data.txt  */
app.post('/post.html', (req, res) => {
	var parametre = req.body;
	var name      = parametre['name'];
	var firstName = parametre['firstName'];
	var mail      = parametre['mail'];
	var message   = parametre['message'];

	fs.appendFile('data.txt', name + " , " + firstName + " , " + mail + " , " + message + "\n" , (err) => {
  		if (err) throw err;
	});

	res.redirect("/");

});

/*  Ecoute le port 3000  */
app.listen(3000);