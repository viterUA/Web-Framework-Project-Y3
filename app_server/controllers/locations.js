const request = require('request');
const mongoose = require('mongoose');
const Club = mongoose.model('Club');

const apiOptions = { 
    server: 'http://localhost:3000' 
}; 
if (process.env.NODE_ENV === 'production') { 
    apiOptions.server = 'https://helloexpress-mykhailohnylytskyi.onrender.com'; 
}

const _renderHomepage = function(req, res, clubs){ 
    const dynamo = clubs.find(c => c.name === "FC Dynamo Kyiv");
    const alex = clubs.find(c => c.name === "FC Oleksandriya");
    const shakhtar = clubs.find(c => c.name === "FC Shakhtar Donetsk");
    const polissya = clubs.find(c => c.name === "FC Polissya Zhytomyr");
    res.render('home', { 
        title: 'Home',
        pageHeader: {
            title: 'The best teams of the Ukrainian Premier League 2024/2025',
            text: `Here are the top 4 teams in the Ukrainian Premier League that have a chance to qualify for the Champions League, Europa League and Conference League next season.
                    This season, something incredible happened: Dynamo Kyiv played 30 games 
                    in the championship without a single defeat, Shakhtar sensationally failed 
                    to take the top two spots in the table, and mid-table clubs FC Oleksandriya, 
                    which took second place, and FC Polissya Zhytomyr, which took fourth place, 
                    rose in the race for European cups. Despite this, they performed poorly in the European arena, 
                    positioning themselves as strong teams on the international level. In the 25/26 season, Dynamo Kyiv and 
                    Shakhtar are currently playing in the Conference League, while the other two have given up the fight for 
                    European cups and are focusing on the Ukrainian championship.`
        },
        dynamo,
        alex,
        shakhtar,
        polissya
    });
};

const home = function(req, res){
    const requestOptions = {
        url: `${apiOptions.server}/api/clubs`,
        method: 'GET',
        json: {}
    };

    request(requestOptions, function(err, response, body) {
        if (err) {
            console.log(err);
            res.status(500).send("API request failed");
        } else {
            _renderHomepage(req, res, body);
        }
    });
};

const login = function(req, res){
    let error = null;
    if (req.flash) {
        const messages = req.flash('error');
        if (messages && messages.length > 0) {
            error = messages[0];
        }
    }
    res.render('login', { 
        title: 'Login',
        error
    });
};

const signin = function(req, res){
    res.render('signin', { title: 'Register Account' });
};

module.exports = {
    home,
    login,
    signin,
    _renderHomepage
};
