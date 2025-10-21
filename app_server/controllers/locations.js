/* GET 'home' page */
const home = function(req, res){
    res.render('home', { 
        title: 'Home',
        pageHeader: {
            title: 'The best teams of the Ukrainian Premier League 2024/2025',
            text: `Here are the top-4 teams in the Ukrainian Premier League that have a chance to qualify for the Champions League, Europa League and Conference League next season.
                    This season, something incredible happened: Dynamo Kyiv played 30 games 
                    in the championship without a single defeat, Shakhtar sensationally failed 
                    to take the top two spots in the table, and mid-table clubs FC Oleksandriya, 
                    which took second place, and FC Polissya Zhytomyr, which took fourth place, 
                    rose in the race for European cups. Despite this, they performed poorly in the European arena, 
                    positioning themselves as strong teams on the international level. In the 25/26 season, Dynamo Kyiv and 
                    Shakhtar are currently playing in the Conference League, while the other two have given up the fight for 
                    European cups and are focusing on the Ukrainian championship.`
        },
        dynamo: {
            
            name: 'FC Dynamo Kyiv',
            image: '/images/dynamokyiv.jpg',
            alt: 'Dynamo Kyiv',
            description: `Football Club 'Dynamo Kyiv' is a Ukrainian professional football club based in Kyiv.
            Founded in 1927 as a branch of the bigger Soviet Dynamo Sports Society, the club as 
            a separate business entity was officially formed only in 1989 and currently plays in 
            the Ukrainian Premier League, and has never been relegated to a lower division.`,
            nicknames: 'The Blue & Whites',
            founded: 1927,
            ground: [
                'Olimpiyskiy National Sports Complex',
                'Valeriy Lobanovskyi Dynamo Stadium'
            ],
            capacity: ['70,050', '16,000'],
            owners: [
                'Ihor Surkis (63.71%)',
                'Investment Fund "Sports Capital" (23%)',
                'Alutsiana Commercial Ltd (Cyprus) (11.26%)',
                'Dynamo (.66%)',
                'Svitlana Lobanovska (.72%)'
            ],
            president: 'Ihor Surkis',
            manager: 'Oleksandr Shovkovskyi',
            league: 'Ukrainian Premier League',
            season: '2024-25',
            position: '1st of 16 (champions)',
            achievements: [
                { title: 'UEFA Supercup Winner', count: '1x', years: '75/76' },
                { title: 'Cup Winners Cup Winner', count: '2x', years: '85/86, 74/75' },
                { title: 'Ukrainian Champion', count: '17x', years: '24/25, 20/21, 15/16, 14/15, 08/09, 06/07, 03/04, 02/03, 00/01, 99/00, 98/99, 97/98, 96/97, 95/96, 94/95, 93/94, 92/93' },
                { title: 'Ukrainian Cup Winner', count: '13x', years: '20/21, 19/20, 14/15, 13/14, 06/07, 05/06, 04/05, 02/03, 99/00, 98/99, 97/98, 95/96, 92/93' },
                { title: 'Ukrainian Super Cup Winner', count: '9x', years: '20/21, 19/20, 18/19, 16/17, 11/12, 09/10, 07/08, 06/07, 04/05' },
                { title: 'Soviet Champion', count: '13x', years: '1990, 1986, 1985, 1981, 1980, 1977, 1975, 1974, 1971, 1968, 1967, 1966, 1961' },
                { title: 'Soviet Cup Winner', count: '9x', years: '89/90, 86/87, 84/85, 1982, 1978, 1974, 65/66, 1964, 1954' }
            ]
        },
        alex: {
            name: 'FC Oleksandriya',
            image: '/images/oleksandriya.jpg',
            alt: 'Oleksandriya',
            description: `Football dynamo 'Oleksandriya' is a Ukrainian 
            professional football dynamo based in the city of Oleksandriya, 
            Kirovohrad Oblast. The year 1948 on the dynamo's crest appeared 
            after its merger with UkrAhroKom in 2014 and depicts football 
            heritage of the dynamo rather than the dynamo's foundation.`,
            nicknames: [
                'Mistiany (The Citizens)', 
                'Sashka (The Alex)'
            ],
            founded: 1990,
            ground: 'CSC Nika',
            capacity: '7,000',
            owners: [
                'Serhiy Kuzmenko (honorary president)',
                'UkrAhroKom (98.5%)',
                'AhroVista (1.5%)'
            ],
            president: 'Ivan Kuzmenko',
            manager: 'Kyrylo Nesterenko',
            league: 'Ukrainian Premier League',
            season: '2024-25',
            position: '2nd of 16',
            achievements: [
                { title: 'Ukrainian second tier champion', count: '2x', years: '14/15, 10/11'}
            ]
        },
        shakhtar: {
            name: 'FC Shakhtar Donetsk',
            image: '/images/shakhtar.jpg',
            alt: 'Shakhtar Donetsk',
            description: `Football Club Shakhtar Donetsk is a Ukrainian professional football club 
            that was based in the city of Donetsk until 2014 when, due to the War in Donbas, the 
            club was forced to move to Lviv, and played matches in Lviv (2014-2016) and in Kharkiv 
            (2017-2020) whilst having its office headquarters and training facilities in Kyiv. 
            In May 2020, Shakhtar started to play home matches at NSC Olimpiyskyi in Kyiv. Since 
            the beginning of the 2023-24 season, Shakhtar has played home matches once again at Arena Lviv.`,
            nicknames: [
                'Hirnyky (Miners)',
                'Kroty (Moles)'
            ],
            founded: 1936,
            ground: [
                    'Donbas Arena',
                	'Arena Lviv', 
                    'Henryk Reyman Municipal Stadium (European cups)'
            ],
            capacity: [
                '52,187',
                '34,915',
                '33,326'
            ],
            owners:'Rinat Akhmetov',
            president: 'Serhiy Palkin',
            manager: 'Arda Turan',
            league: 'Ukrainian Premier League',
            season: '2024-25',
            position: '3rd of 16',
            achievements: [
                { title: 'UEFA Cup Winner', count: '1x', years: '08/09'},
                { title: 'Ukrainian Champion', count: '15x', years: '23/24, 22/23, 19/20, 18/19, 17/18, 16/17, 13/14, 12/13, 11/12, 10/11, 09/10, 07/08, 05/06, 04/05, 01/02'},
                { title: 'Ukrainian Cup Winner', count: '15x', years: '24/25, 23/24, 18/19, 17/18, 16/17, 15/16, 12/13, 11/12, 10/11, 07/08, 03/04, 01/02, 00/01, 96/97, 94/95'},
                { title: 'Ukrainian Super Cup winner', count: '9x', years: '21/22, 17/18, 15/16, 14/15, 13/14, 12/13, 10/11, 08/09, 05/06'},
                { title: '4x Soviet cup winner', count: '4x', years: '1983, 1980, 1962, 1961'}
            ]
        },
        polissya: {
            name: 'FC Polissya Zhytomyr',
            image: '/images/polissya.jpg',
            alt: 'Polissya Zhytomyr',
            description: `Football Club Polissya Zhytomyr is a Ukrainian 
            professional football club based in Zhytomyr, Polissya.
             It plays in the Ukrainian Premier League, the top tier 
             of Ukrainian football.`,
            nicknames: [
                'Polissya Wolves',
                'Green-Yellows'
            ],
            founded: 1959,
            ground: 'Tsentralnyi Stadion',
            capacity: '5,928',
            owners: 'Hennadiy Butkevych',
            president: 'Volodymyr Zahurskyi',
            manager: 'Ruslan Rotan',
            league: 'Ukrainian Premier League',
            season: '2024-25',
            position: '4th of 16',
            achievements: [
                { title: 'Ukrainian second tier champion', count: '1x', years: '22/23'}
            ]
        }
    });
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
