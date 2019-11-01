require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const sequelize = require('./db.js');

sequelize.sync();

app.use(bodyParser.json());

app.use(require('./middleware/headers'));
app.use(require('./middleware/validateSession'));

app.listen(process.env.PORT, () => console.log(`app is listening on ${process.env.PORT}`));

app.use('/scorestacc/user', require("./controllers/userController"));
app.use('/scorestacc/login', require('./controllers/sessionController'));
app.use('/scorestacc/playlist', require('./controllers/playlistController'));
app.use('/scorestacc/music', require('./controllers/scoreController'));