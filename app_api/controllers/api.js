const mongoose = require('mongoose');
const passport = require('passport');
const Club = mongoose.model('Club');
const User = mongoose.model('User');
const Standings = mongoose.model('Standings');
const Strikers = mongoose.model('Strikers');

module.exports.login = function (req, res, next) {
    const { email, password } = req.body;

    if (!email || !password)
        return res.status(400).json({ message: "Email and password required" });

    passport.authenticate('local', (err, user, info) => {
        if (err) {
            return next(err);
        }

        if (!user) {
            return res.status(401).json({
                message: (info && info.message) || "Invalid login"
            });
        }

        req.logIn(user, (err) => {
            if (err) {
                return next(err);
            }

            try {
                req.session.user = {
                    id: user._id.toString(),
                    name: user.name,
                    email: user.email
                };
            } catch (e) {}

            const wantsJson =
                req.headers.accept &&
                req.headers.accept.indexOf('application/json') !== -1;

            if (wantsJson || req.xhr)
                return res.json({ message: "Login successful" });

            return res.redirect('/home');
        });
    })(req, res, next);
};

module.exports.signin = async function (req, res, next) {
    const { name, email, password, password2, countryCode, phone, dob, county } = req.body;

    if (!name || !email || !password || !password2)
        return res.status(400).json({ message: "Name, email, and passwords are required" });

    if (password !== password2)
        return res.status(400).json({ message: "Passwords do not match" });

    try {
        if (!dob) return res.status(400).json({ message: "Date of birth required" });

        const birth = new Date(dob);
        if (isNaN(birth)) return res.status(400).json({ message: "Invalid date of birth" });

        const age = (Date.now() - birth.getTime()) / (365.25 * 24 * 60 * 60 * 1000);
        if (age < 18) return res.status(400).json({ message: "You must be at least 18 years old" });

        const emailExists = await User.findOne({ email });
        if (emailExists) return res.status(409).json({ message: "Email already registered" });

        if (phone) {
            const phoneExists = await User.findOne({ phone });
            if (phoneExists) return res.status(409).json({ message: "Phone number already registered" });
        }

        const userData = {
            name,
            email,
            countryCode,
            phone,
            dob,
            county
        };

        User.register(new User(userData), password, (err, createdUser) => {
            if (err) {
                if (err.name === 'UserExistsError') {
                    return res.status(409).json({ message: "Email already registered" });
                }
                return res.status(500).json({ error: err.message });
            }

            try {
                req.session.user = {
                    id: createdUser._id.toString(),
                    name: createdUser.name,
                    email: createdUser.email
                };
            } catch (e) {}

            const wantsJson =
                req.headers.accept &&
                req.headers.accept.indexOf('application/json') !== -1;

            if (wantsJson || req.xhr)
                return res.status(201).json({ message: "Registration successful" });

            return res.redirect('/home');
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports.getClubs = async function (req, res) {
    try {
        const clubs = await Club.find().lean();
        res.json(clubs);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports.getStandings = async function (req, res) {
  try {
      const standings = await Standings.find().lean();
      res.json(standings);
  } catch (err) {
      res.status(500).json({ error: err.message });
  }
};

module.exports.getPlayers = async function (req, res) {
  try {
      const players = await Strikers.find().lean();
      res.json(players);
  } catch (err) {
      res.status(500).json({ error: err.message });
  }
};
