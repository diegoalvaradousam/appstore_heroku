const express = require('express')

var port = process.env.PORT || 3000;


const app = express();




app.use(express.static(__dirname + '/fronted'))


app.get('/', (req, res) => {
    res.redirect('/index.html')
})




app.listen(port)