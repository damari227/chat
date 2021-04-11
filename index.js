const app = require('express')();
const http = require('http');
const port = 8000;


// Route app
app.get('/', (req, res) => {
    console.log('get /');
    res.sendFile(__dirname+'/src/page/index.html');
});

// Start server
app.listen(port, () => {
    console.log(`Development server has started at port ${port}`);
});