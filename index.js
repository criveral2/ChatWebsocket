const path = require('path');
const express = require('express');
const app = express();


//static files

console.log(__dirname)
//app.use(express.static(''))


//settings
app.set('port', process.env.PORT || 3000);


//start the server
app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'));
});




