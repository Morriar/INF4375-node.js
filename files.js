var fs = require("fs");

// Ecrire `data` dans `file`
function write(file, data) {
	fs.writeFile(file, data, function(err) {
		if(err) {
			throw err;
		}
		console.log('Écriture...');
		check(file);
	});
}

// Vérifier que `file` existe
function check(file) {
	fs.exists(file, function(exists) {
		if(!exists) {
			throw 'Fichier ' + file + ' manquant';
		}
		console.log('Vérification... OK')
		read(file);
	});
}

// Lire le contenu de `file`
function read(file) {
	fs.readFile(file, function(err, data) {
		if(err) {
			throw err;
		}
		console.log('Lecture...');
		console.log('\t"' + data.toString() + '"');
		console.log('Fin de la séquence.')
	});
}

write("fichier.tmp", "Hello World!");
