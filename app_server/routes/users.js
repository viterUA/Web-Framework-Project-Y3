const mongoose = require('mongoose');
const passport = require('passport');
const User = mongoose.model('User');

const getSignup = function(req, res) {
    res.render('signin', {
        title: 'Register Account',
        error: null
    });
};

const postSignup = async function(req, res, next) {
    const { name, email, countryCode, phone, dob, county, password, password2 } = req.body;

    if (!name || !email || !password || !password2) {
        return res.render('signin', {
            title: 'Register Account',
            error: 'Name, email and both password fields are required.'
        });
    }

    if (password !== password2) {
        return res.render('signin', {
            title: 'Register Account',
            error: 'Passwords do not match.'
        });
    }

    try {
        if (!dob) {
            return res.render('signin', {
                title: 'Register Account',
                error: 'Date of birth is required.'
            });
        }

        const birth = new Date(dob);
        if (isNaN(birth)) {
            return res.render('signin', {
                title: 'Register Account',
                error: 'Invalid date of birth.'
            });
        }

        const age = (Date.now() - birth.getTime()) / (365.25 * 24 * 60 * 60 * 1000);
        if (age < 18) {
            return res.render('signin', {
                title: 'Register Account',
                error: 'You must be at least 18 years old.'
            });
        }

        const emailExists = await User.findOne({ email });
        if (emailExists) {
            return res.render('signin', {
                title: 'Register Account',
                error: 'Email already registered.'
            });
        }

        if (phone) {
            const phoneExists = await User.findOne({ phone });
            if (phoneExists) {
                return res.render('signin', {
                    title: 'Register Account',
                    error: 'Phone number already registered.'
                });
            }
        }

        const userData = {
            name,
            email,
            countryCode,
            phone,
            dob: birth,
            county
        };

        User.register(new User(userData), password, (err, user) => {
            if (err) {
                if (err.name === 'UserExistsError') {
                    return res.render('signin', {
                        title: 'Register Account',
                        error: 'Email already registered.'
                    });
                }
                return next(err);
            }

            passport.authenticate('local')(req, res, function () {
                res.redirect('/home');
            });
        });
    } catch (err) {
        return next(err);
    }
};

module.exports = {
    getSignup,
    postSignup
};
