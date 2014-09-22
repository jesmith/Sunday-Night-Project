var express = require('express');
var router 	= express.Router();

//  GET / 
router.get('/', function(req, res) {
	// render the index template ('/views/index.hbs')
	res.render('index');
});

module.exports = router