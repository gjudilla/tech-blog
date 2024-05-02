// Import applications
const express = require ('express');
const path = require ('path');
const session = require ('express-session');
const exphbs = require ('express-handlebars');
const routes = require ('./controllers');
const helpers = require ('./utils/helpers');
const sequelize = require ('./config/connection');

const app = express();
const PORT = process.env.PORT;

// FINISH SET UP

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`App listening on port ${PORT}.`));
});