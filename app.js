const express = require("express");
const app = express(); 

// use name of root folder as parameter
let staticMiddleware = express.static('public');// attach folder name here
app.use(staticMiddleware);

// use the EJS VIEW Engine
app.set('view engine', 'ejs');

app.get('/file-test', (req,res)=>{
    res.sendFile(__dirname + "/public/test.html");
});


app.get('/view-test', (req,res)=>{
    res.render('view-test', {animal:"whale"}); // name of template
});
app.set('port',process.env.PORT || 8080);

const server = app.listen(app.get('port'), ()=> {
    console.log("Server listening on",app.get('port'));
});