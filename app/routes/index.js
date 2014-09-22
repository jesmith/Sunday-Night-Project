var express = require('express');
var router 	= express.Router();
var db			= require('../modules/db.js');


//  GET / 
router.get('/', function(req, res) {
	// render the index template ('/views/index.hbs')
	res.render('index');
});

router.get('/api/server_stats', function(req, res) {
	db.query('SELECT 1 + 1 AS sum', function(err, rows, fields) {
	  if(err) {
	  	res.json(500, 'Server Error');
	  } else {
	  	/* 
	  		Build out your results into a javascript object and return it as a JSON response.
				This example simply returs the array of row objects
	  	*/
	  	res.json(rows);
	  }
	})
});

module.exports = router;