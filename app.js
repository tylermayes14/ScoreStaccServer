require('dotenv').config();
const express = require('express');
const app = express();
const sequelize = require('./db.js');

// const playlist = require('./controllers/playlistController');

sequelize.sync();

app.use(express.json());

app.use(require('./middleware/headers'));

app.use('/scorestacc/user', require("./controllers/userController"));
app.use('/scorestacc/login', require('./controllers/sessionController'));
app.use(require('./middleware/validateSession'));
app.use('/scorestacc/playlist', require("./controllers/playlistController"));
app.use('/scorestacc/music', require('./controllers/scoreController'));

app.listen(process.env.PORT, () => console.log(`App is listening on 3000`));