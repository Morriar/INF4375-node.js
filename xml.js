var fs = require('fs');
var xmldom = require('xmldom');

// Parse `catalog` xml file and call `callback(catalog domxml root)`
function parse_catalog(catalog, callback) {
	// Read xml file content
	fs.readFile(catalog, function(err, data) {
		if (err) {
			throw 'Error reading XML catalog';
		} else {
			// Parse xml content and return dom root
			var domRoot = new xmldom.DOMParser().parseFromString(data.toString());
			// Call callback passing dom root
			callback(domRoot)
		}
	});
}

// Print the number of cds in `domCatalog`
function print_catalog_len(domCatalog) {
	var cds = domCatalog.getElementsByTagName('cd');
	console.log('This catalog contains ' + cds.length + ' entries');
}

// Print `domCatalog` cds in console
function print_catalog(domCatalog) {
    var cds = domCatalog.getElementsByTagName('cd');
	for(var i = 0; i < cds.length; i++) {
		var cd = cds[i];
		var title = cd.getElementsByTagName('title')[0].textContent;
		var artist = cd.getElementsByTagName('artist')[0].textContent;
		var price = cd.getElementsByTagName('price')[0].textContent;
		console.log('\t* ' + title + ' - ' + artist + ' - ' + price + '$');
    }
}

// Print catalog length
parse_catalog('catalog.xml', print_catalog_len);
// Print catalog entries
parse_catalog('catalog.xml', print_catalog);
