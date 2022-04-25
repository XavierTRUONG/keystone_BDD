require("dotenv").config({ path: `./config/${process.env.NODE_ENV}.env` });


const express = require('express'); // importe le paquet express
const cors = require('cors'); // importe le paquet cors
const session = require('express-session');
const cookieParser = require('cookie-parser');

const app = express();

app.use(session({
    secret: 'ma_session_super_secret_key',
    saveUninitialized: false,
    resave: false,
    cookie: { httpOnly: true, maxAge: 1000 * 60 * 60 * 24 }
}));

app.use('/static',express.static('./public/images'));
app.use(cors()); // permet de parcer(analyser) toutes les requêtes en cors
app.use(express.json()); // permet de parcer(analyser) toutes les requêtes en json
app.use(cookieParser());


const todosRoute = require('./routes/index'); // import ce qui est exporter dans l'index


app.use('/api', todosRoute); // rajoute sur le chemin un router supplémentaire et un préfixe /api avant /todosRoute
app.get('/api', (_,res) => res.send("Hello from keystone BDD v1")); // Ecoute la methode GET et la route "/"
app.listen(process.env.PORT, () => console.log(`Backend is running on PORT ${process.env.PORT}`)); // Démarrer le serveur et écouter un port précis


module.exports = app;