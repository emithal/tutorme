exports.logRequestPaths = (req, res, next) => {
  console.log(`request made to: ${req.url}`);
  next();
};

exports.sendReqParam = (req, res) => {
  let veg = req.params.vegetable;
  res.send(`This is the page for ${veg}`);
};

exports.respondWithName = (req, res) => {
  res.render('index');
};

exports.showServices = (req, res) => {
  res.render('services');
};

exports.index = (req, res) => {
  res.render('index');
};

exports.showSignUp = (req, res) => {
  res.render('contact');
};

exports.postedContactForm = (req, res) => {
  res.render('thanks');
};

exports.showClients = (req, res) => {
  res.render('clients');
};

exports.showCertifications = (req, res) => {
  res.render('certifications');
};

exports.showWorldView = (req, res) => {
  res.render('worldview');
};
