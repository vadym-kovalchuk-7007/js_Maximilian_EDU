const express = require('express');
const bodyParser = require('body-parser');

const app = express();
/* HTML Templates */
// app.set('view engine', 'ejs'); // set template module
// app.set('views', 'Server/Views');

// app.use(bodyParser.urlencoded({ extended: false })); //call body-parser
// app.use((request, response, next) => {
// 	response.setHeader('Content-Type', 'text/html');
// 	next(); // middleware for calling next use-method
// });
// app.use((request, response, next) => {
// 	const userName = request.body.username || 'Unknown User';
// 	response.render('index', {
// 		userName
// 	});
// 	// response.send(template);
// });

/* JSON */
const locationRouter = require('./Routes/location');

app.use(bodyParser.json());
app.use((_, response, next) => {
	response.setHeader('Access-Control-Allow-Origin', '*'); // Allow CORS from * or URL
	response.setHeader('Access-Control-Allow-Methods', 'OPTIONS, POST, GET'); //Allow methods
	response.setHeader('Access-Control-Allow-Headers', 'Content-Type'); // Request only Header
	next();
});
app.use(locationRouter);

app.listen(3000);