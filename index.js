const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('@immutable/passport'); // Assuming you've installed the Immutable Passport SDK
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ secret: 'your-secret-key', resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

app.set('view engine', 'ejs');
app.set('views', 'views');

// Routes
app.use('/', require('./routes/auth'));
app.use('/', require('./routes/profile'));
app.use('/', require('./routes/posts'));
app.use('/', require('./routes/messages'));

app.listen(port, () => {
  console.log(`Greazy is running on http://localhost:${port}`);

