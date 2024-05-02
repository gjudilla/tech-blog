// Import applications
const express = require ('express');
const path = require ('path');
const session = require ('express-session');
const exphbs = require ('express-handlebars');
const routes = require ('./controllers');
const helpers = require ('./utils/helpers');
const sequelize = require ('./config/connection');

// Express/PORT set up
const app = express();
const PORT = process.env.PORT;

// Set up session
const sess = {
    secret: 'my secret',
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 900000, 
    }
};
app.use(session(sess));

// Set up handlebars engine
const hbs = exphbs.create();
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);


sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`App listening on port ${PORT}.`));
});