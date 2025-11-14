const request = require('request');
const User = require('../models/user'); 

const apiOptions = { 
    server: 'http://localhost:3000' 
};
if (process.env.NODE_ENV === 'production') {
    apiOptions.server = 'https://helloexpress-mykhailohnylytskyi.onrender.com';
}

const getSignup = function(req, res) {
    res.render('signin', { title: 'Register Account' });
};

const postSignup = function(req, res) {
    const path = '/api/signin'; 
    const requestOptions = {
        url: apiOptions.server + path,
        method: 'POST',
        json: {
            name: req.body.name,
            email: req.body.email,
            countryCode: req.body.countryCode,
            phone: req.body.phone,
            dob: req.body.dob,
            county: req.body.county,
            password: req.body.password
        }
    };

    request(requestOptions, (err, response, body) => {
        if (err) {
            console.log(err);
            res.status(500).render('error', {
                message: 'Error connecting to API',
                error: err
            });
        } else if (response.statusCode === 201) {
            res.redirect('/');
        } else {
            res.status(response.statusCode).render('signin', {
                title: 'Register Account',
                error: body.message || 'Error creating account'
            });
        }
    });
};

module.exports = {
    getSignup,
    postSignup
};
