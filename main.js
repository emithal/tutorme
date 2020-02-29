const express = require('express'),
  app = express(),
  errorController = require('./controllers/errorController'),
  homeController = require('./controllers/homeController'),
  subscribersController = require('./controllers/subscribersController'),
  layouts = require('express-ejs-layouts'),
  mongoose = require('mongoose');

mongoose.connect('mongodb+srv://emithal:mongoDB2019@it-231-gi6yu.azure.mongodb.net/test?retryWrites=true&w=majority', {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

mongoose.set('useCreateIndex', true);
const db = mongoose.connection;

db.once('open', () => {
  console.log('It finally worked. Connected to MongoDB.');
});

app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(layouts);
app.use(
  express.urlencoded({
    extended: false
  })
);
app.use(express.json());
app.use(homeController.logRequestPaths);

app.get('/name', homeController.respondWithName);
app.get('/items/:vegetable', homeController.sendReqParam);

app.get('/subscribers', subscribersController.getAllSubscribers, (req, res, next) => {
  res.render('subscribers', { subscribers: req.data });
});

app.get('/', homeController.index);
app.get('/services', homeController.showServices);
app.get('/contact', subscribersController.getSubscriptionPage);
app.post('/subscribe', subscribersController.saveSubscriber);
app.get('/clients', homeController.showClients);
app.get('/certifications', homeController.showCertifications);
app.get('/worldview', homeController.showWorldView);

app.use(errorController.logErrors);
app.use(errorController.respondNoResourceFound);
app.use(errorController.respondInternalError);

app.listen(app.get('port'), () => {
  console.log(`Server running at http://localhost:${app.get('port')}`);
});
