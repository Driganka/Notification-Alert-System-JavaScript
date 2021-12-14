const express = require('express') ;
const devRoutes = require('./src/routes/developersroute')
const dptRoutes = require('./src/routes/departmentroute')
const msgRoutes = require('./src/routes/messageroute')



const bodyParser = require('body-parser'); 

const app = express() ;
const port = process.env.PORT || 5000 ; 

// parse request data content type application/x-www-form-rulencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse request data content type application/json
app.use(bodyParser.json()) ; 


app.get('/', (req, res) => {
    res.send('Notification Alert System')
}) ; // Root Route

app.use('/api/developers', devRoutes) ; 

app.use('/api/departments', dptRoutes) ; 

app.use('/api/messages', msgRoutes) ; 


app.listen(port, () => {
    console.log(`Express Server is running at http://localhost:${port}`) ;
}) ;
