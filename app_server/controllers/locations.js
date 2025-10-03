/* GET 'home' page */
const home = function(req, res){
res.render('home', { title: 'Home' });
};
/* GET 'Location info' page */
const login = function(req, res){
res.render('login', { title: 'Login' });
};
/* GET 'Add review' page */
const signin = function(req, res){
res.render('signin', { title: 'Register Account' });
};
module.exports = {
home,
login,
signin
};
