const mongoose = require('mongoose');
const Club = mongoose.model('Club');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = mongoose.model('User');

module.exports.login = async function (req, res) {
    const { email, password } = req.body;

    if (!email || !password)
        return res.status(400).json({ message: "Email and password required" });

    try {
        const user = await User.findOne({ email }).lean();
        if (!user) return res.status(401).json({ message: "Invalid login" });

        const match = await bcrypt.compare(password, user.password);
        if (!match) return res.status(401).json({ message: "Invalid login" });

        const token = jwt.sign({ id: user._id }, "SECRET123", { expiresIn: "2h" });

        res.json({ message: "Login successful", token });
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports.signin = async function (req, res) {
    const { name, email, password, password2, countryCode, phone, dob, county } = req.body;

    if (!name || !email || !password || !password2)
        return res.status(400).json({ message: "Name, email, and passwords are required" });

    if (password !== password2)
        return res.status(400).json({ message: "Passwords do not match" });


    try {
        const exists = await User.findOne({ email });
        if (exists) return res.status(409).json({ message: "User already exists" });

        const hashed = await bcrypt.hash(password, 10);

        await User.create({
            name,
            email,
            countryCode,
            phone,
            dob,
            county,
            password: hashed,
            password2: hashed 
        });

        res.json({ message: "Registration successful" });
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
};


module.exports.getClubs = async function (req, res) {
    try {
        const clubs = await Club.find().lean();
        res.json(clubs);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
};
