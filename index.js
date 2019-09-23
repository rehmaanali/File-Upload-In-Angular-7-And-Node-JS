const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

// Data Limit
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(bodyParser.json({ limit: '50mb' }));

// static Folders
app.use(cors(), express.static('public'));

// REST API's
app.use('/api', cors(), require('./controllers'));

// PORT
app.listen(process.env.PORT, () => {
	console.log('Server is runnnig on port ' + process.env.PORT);
});
