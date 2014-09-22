express = require('express');
app     = express();
fs      = require('fs');
hbs     = require('hbs');
routes  = require('./app/routes');

/* 
 Setup the template engine, which is based off of Handlebars
*/
hbsPartialDir = __dirname + '/app/views/partials'
hbsFileNames  = fs.readdirSync(hbsPartialDir)

hbsFileNames.forEach(function (filename) {
  matches = /^([^.]+).hbs$/.exec(filename)
  if(!matches) {
    return;
  }
  name = matches[1];
  template = fs.readFileSync(hbsPartialDir + '/' + filename, 'utf8');
  hbs.registerPartial(name, template);
});

// view engine setup
app.set("views", "./app/views");
app.set("view engine", "hbs");

// Identify where our static (scripts/css) content is located
app.use(express.static('./public'));

// Load all routes in our default index.js route
app.use('/', routes);


app.listen(3500);
