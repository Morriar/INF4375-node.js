/*
 * Thanks to Jean-Philippe Caissy for this file!
 */

var fs = require('fs');

/*
 * Attention: Évitez d'utiliser les méthodes synchrones!
 */
fs.writeFileSync('fichier', 'Cette chaine est dans le fichier');

fs.readFile('fichier', function(err, data) {
	if(err) {
		throw err;
	}
	console.log('Callback de la lecture du fichier');
	console.log(data.toString());
	// solution: console.log('Fin du fichier javascript');
});
console.log('Fin du fichier javascript');
