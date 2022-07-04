const express = require('express');
const routes = require('./routes/');

//importing sequalize connection / app express / PORT
const sequalize = require('./config/connection');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(routes);

//sync sequlize models with the DB. Turn ON server after that
sequalize.sync({force:false}).then(() =>{
    app.listen(PORT,()=> console.log('Now listening'));
});