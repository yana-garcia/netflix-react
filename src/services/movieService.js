import * as genresAPI from './genreService';

export const moviesData = [
    {
        "_id": 1,
        "title": "Demon Slayer: Kimetsu no Yaiba",
        "genre": [
            { "_id": 1, "name": "Action" },
            { "_id": 2, "name": "Adventure" }
        ],
        "rating": "16+",
        "episode": "44 episode",
        "favorite": true,
        "category": "series",
        "year": "2019",
        "duration": "25m",
        "thumbnail": require("../assets/thumbnail/Demon-Slayer.jpeg")
    },
    {
        "_id": 2,
        "title": "Demon Slayer The Movie Mugen Train",
        "genre": [
            { "_id": 1, "name": "Action" },
            { "_id": 2, "name": "Adventure" }
        ],
        "rating": "16+",
        "episode": "1 movie",
        "favorite": true,
        "category": "movie",
        "year": "2020",
        "duration": "1h 57m",
        "thumbnail": require("../assets/thumbnail/Demon-slayer-mugen-train.jpg")
    },
    {
        "_id": 3,
        "title": "Naruto",
        "genre": [
            { "_id": 1, "name": "Action" },
            { "_id": 2, "name": "Adventure" }
        ],
        "rating": "16+",
        "episode": "220 episode",
        "favorite": true,
        "category": "series",
        "year": "2006",
        "duration": "23m",
        "thumbnail": require("../assets/thumbnail/naruto.jpg")
    },
    {
        "_id": 4,
        "title": "Attack on Titan",
        "genre": [
            { "_id": 1, "name": "Action" },
            { "_id": 2, "name": "Adventure" }
        ],
        "rating": "18+",
        "episode": "86 episode",
        "favorite": true,
        "category": "series",
        "year": "2013",
        "duration": "24m",
        "thumbnail": require("../assets/thumbnail/attack-on-titan.jpg")
    },
    {
        "_id": 5,
        "title": "Hunter x Hunter",
        "genre": [
            { "_id": 1, "name": "Action" },
            { "_id": 2, "name": "Adventure" }
        ],
        "rating": "16+",
        "episode": "148 episode",
        "favorite": true,
        "category": "series",
        "year": "2011",
        "duration": "23m",
        "thumbnail": require("../assets/thumbnail/hunterxhunter.jpg")
    },
    {
        "_id": 6,
        "title": "My Hero Academia",
        "genre": [
            { "_id": 1, "name": "Action" },
            { "_id": 2, "name": "Adventure" },
            { "_id": 9, "name": "Sci-Fi" }
        ],
        "rating": "16+",
        "episode": "113 episode",
        "favorite": true,
        "category": "series",
        "year": "2016",
        "duration": "24m",
        "thumbnail": require("../assets/thumbnail/my-hero-academia.jpg")
    },
    {
        "_id": 7,
        "title": "Horimiya",
        "genre": [
            { "_id": 8, "name": "Romance" },
            { "_id": 10, "name": "Slice of Life" }
        ],
        "rating": "7+",
        "episode": "13 episode",
        "favorite": true,
        "category": "series",
        "year": "2021",
        "duration": "23m",
        "thumbnail": require("../assets/thumbnail/horimiya.jpg")
    },
    {
        "_id": 8,
        "title": "Moriarty the Patriot",
        "genre": [
            { "_id": 1, "name": "Action" },
            { "_id": 7, "name": "Mystery" }
        ],
        "rating": "16+",
        "episode": "24 episode",
        "favorite": true,
        "category": "series",
        "year": "2020",
        "duration": "23m",
        "thumbnail": require("../assets/thumbnail/moriarty-the-patriot.jpg")
    },
    {
        "_id": 9,
        "title": "Fruits Basket",
        "genre": [
            { "_id": 5, "name": "Dramas" },
            { "_id": 8, "name": "Romance" },
            { "_id": 10, "name": "Slice of Life" }
        ],
        "rating": "16+",
        "episode": "63 episode",
        "favorite": true,
        "category": "series",
        "year": "2019",
        "duration": "23m",
        "thumbnail": require("../assets/thumbnail/fruits-basket.jpg")
    },
    {
        "_id": 10,
        "title": "Kakegurui",
        "genre": [
            { "_id": 7, "name": "Mystery" }
        ],
        "rating": "16+",
        "episode": "12 episode",
        "favorite": true,
        "category": "series",
        "year": "2017",
        "duration": "24m",
        "thumbnail": require("../assets/thumbnail/kakegurui.jpg")
    },
    {
        "_id": 11,
        "title": "Erased",
        "genre": [
            { "_id": 5, "name": "Dramas" },
            { "_id": 9, "name": "Sci-Fi" }
        ],
        "rating": "13+",
        "episode": "12 episode",
        "favorite": true,
        "category": "series",
        "year": "2016",
        "duration": "22m",
        "thumbnail": require("../assets/thumbnail/erased.jpg")
    },
    {
        "_id": 12,
        "title": "Another",
        "genre": [
            { "_id": 7, "name": "Mystery" }
        ],
        "rating": "18+",
        "episode": "13 episode",
        "favorite": true,
        "category": "series",
        "year": "2012",
        "duration": "24m",
        "thumbnail": require("../assets/thumbnail/another.jpg")
    },
    {
        "_id": 13,
        "title": "Tokyo Revengers",
        "genre": [
            { "_id": 1, "name": "Action" },
            { "_id": 2, "name": "Adventure" },
            { "_id": 9, "name": "Sci-Fi" }
        ],
        "rating": "18+",
        "episode": "24 episode",
        "favorite": true,
        "category": "series",
        "year": "2021",
        "duration": "23m",
        "thumbnail": require("../assets/thumbnail/tokyo-revengers.jpg")
    },
    {
        "_id": 14,
        "title": "Spy x Family",
        "genre": [
            { "_id": 1, "name": "Action" },
            { "_id": 4, "name": "Comedies" }
        ],
        "rating": "13+",
        "episode": "12 episode",
        "favorite": true,
        "category": "series",
        "year": "2022",
        "duration": "24m",
        "thumbnail": require("../assets/thumbnail/spy-x-family1.jpg")
    },
    {
        "_id": 15,
        "title": "Death Note",
        "genre": [
            { "_id": 1, "name": "Action" },
            { "_id": 7, "name": "Mystery" },
            { "_id": 9, "name": "Sci-Fi" }
        ],
        "rating": "16+",
        "episode": "37 episode",
        "favorite": true,
        "category": "series",
        "year": "2006",
        "duration": "22m",
        "thumbnail": require("../assets/thumbnail/deathnote.JPG")
    },
    {
        "_id": 16,
        "title": "Rascal Does Not Dream of Bunny Girl Senpai",
        "genre": [
            { "_id": 7, "name": "Mystery" },
            { "_id": 8, "name": "Romance" },
            { "_id": 9, "name": "Sci-Fi" }
        ],
        "rating": "16+",
        "episode": "13 episode",
        "favorite": true,
        "category": "series",
        "year": "2018",
        "duration": "23m",
        "thumbnail": require("../assets/thumbnail/rascal-does-not-dream-of-bunny-girl-senpai.jpg")
    },
    {
        "_id": 17,
        "title": "Steins;Gate",
        "genre": [
            { "_id": 7, "name": "Mystery" },
            { "_id": 9, "name": "Sci-Fi" }
        ],
        "rating": "16+",
        "episode": "49 episode",
        "favorite": true,
        "category": "series",
        "year": "2011",
        "duration": "23m",
        "thumbnail": require("../assets/thumbnail/steins-gate.jpg")
    },
    {
        "_id": 18,
        "title": "The Anthem of the Heart",
        "genre": [
            { "_id": 5, "name": "Dramas" },
            { "_id": 6, "name": "Music" }
        ],
        "rating": "13+",
        "episode": "1 movie",
        "favorite": true,
        "category": "movie",
        "year": "2015",
        "duration": "1h 59m",
        "thumbnail": require("../assets/thumbnail/anthem-of-the-heart.jpg")
    },
    {
        "_id": 19,
        "title": "Haikyuu",
        "genre": [
            { "_id": 11, "name": "Sports" }
        ],
        "rating": "13+",
        "episode": "85 episode",
        "favorite": true,
        "category": "series",
        "year": "2014",
        "duration": "24m",
        "thumbnail": require("../assets/thumbnail/haikyuu.jpeg")
    },
    {
        "_id": 20,
        "title": "Free",
        "genre": [
            { "_id": 11, "name": "Sports" }
        ],
        "rating": "13+",
        "episode": "39 episode",
        "favorite": true,
        "category": "series",
        "year": "2012",
        "duration": "24m",
        "thumbnail": require("../assets/thumbnail/free.jpg")
    },
    {
        "_id": 21,
        "title": "Kuroko no Basket",
        "genre": [
            { "_id": 11, "name": "Sports" }
        ],
        "rating": "13+",
        "episode": "25 episode",
        "favorite": true,
        "category": "series",
        "year": "2012",
        "duration": "24m",
        "thumbnail": require("../assets/thumbnail/kuroko-no-basket.JPG")
    },
    {
        "_id": 22,
        "title": "Iwa-Kakeru! Climbing Girls",
        "genre": [
            { "_id": 11, "name": "Sports" }
        ],
        "rating": "7+",
        "episode": "12 episode",
        "favorite": true,
        "category": "series",
        "year": "2020",
        "duration": "23m",
        "thumbnail": require("../assets/thumbnail/iwa-kakeru.JPG")
    },
    {
        "_id": 23,
        "title": "Howl's Moving Castle",
        "genre": [
            { "_id": 3, "name": "Children & Family" },
            { "_id": 8, "name": "Romance" }
        ],
        "rating": "7+",
        "episode": "1 movie",
        "favorite": true,
        "category": "movie",
        "year": "2004",
        "duration": "1h 59m",
        "thumbnail": require("../assets/thumbnail/howls-moving-castle.JPG")
    },
    {
        "_id": 24,
        "title": "Kaguya-sama: Love Is War",
        "genre": [
            { "_id": 4, "name": "Comedies" },
            { "_id": 8, "name": "Romance" },
            { "_id": 10, "name": "Slice of Life" }
        ],
        "rating": "16+",
        "episode": "12 episode",
        "favorite": true,
        "category": "series",
        "year": "2019",
        "duration": "23m",
        "thumbnail": require("../assets/thumbnail/kaguya-sama-love-is-war.JPG")
    },
    {
        "_id": 25,
        "title": "Noragami",
        "genre": [
            { "_id": 1, "name": "Action" },
            { "_id": 4, "name": "Comedies" },
            { "_id": 9, "name": "Sci-Fi" }
        ],
        "rating": "13+",
        "episode": "29 episode",
        "favorite": true,
        "category": "series",
        "year": "2014",
        "duration": "24m",
        "thumbnail": require("../assets/thumbnail/noragami.jpg")
    },
    {
        "_id": 26,
        "title": "Violet Evergarden the Movie",
        "genre": [
            { "_id": 5, "name": "Dramas" },
            { "_id": 8, "name": "Romance" }
        ],
        "rating": "13+",
        "episode": "1 movie",
        "favorite": true,
        "category": "movie",
        "year": "2020",
        "duration": "2h 20m",
        "thumbnail": require("../assets/thumbnail/violet-evergarden.jpg")
    },
    {
        "_id": 27,
        "title": "My Little Monster",
        "genre": [
            { "_id": 4, "name": "Comedies" },
            { "_id": 8, "name": "Romance" },
            { "_id": 10, "name": "Slice of Life" }
        ],
        "rating": "13+",
        "episode": "13 episode",
        "favorite": true,
        "category": "series",
        "year": "2013",
        "duration": "24m",
        "thumbnail": require("../assets/thumbnail/my-little-monster.png")
    },
    {
        "_id": 28,
        "title": "My Dress-up Darling",
        "genre": [
            { "_id": 4, "name": "Comedies" },
            { "_id": 8, "name": "Romance" },
            { "_id": 10, "name": "Slice of Life" }
        ],
        "rating": "13+",
        "episode": "12 episode",
        "favorite": true,
        "category": "series",
        "year": "2022",
        "duration": "23m",
        "thumbnail": require("../assets/thumbnail/my-dress-up-darling.JPG")
    },
    {
        "_id": 29,
        "title": "Hello World",
        "genre": [
            { "_id": 5, "name": "Dramas" },
            { "_id": 8, "name": "Romance" },
            { "_id": 9, "name": "Sci-Fi" }
        ],
        "rating": "13+",
        "episode": "1 movie",
        "favorite": true,
        "category": "movie",
        "year": "2019",
        "duration": "1h 37m",
        "thumbnail": require("../assets/thumbnail/hello-world.jpg")
    },
    {
        "_id": 30,
        "title": "5 Centimeters per Seconds",
        "genre": [
            { "_id": 5, "name": "Dramas" },
            { "_id": 8, "name": "Romance" }
        ],
        "rating": "13+",
        "episode": "1 movie",
        "favorite": true,
        "category": "movie",
        "year": "2007",
        "duration": "1h 6m",
        "thumbnail": require("../assets/thumbnail/5-cetimeters-per-second.JPG")
    },
    {
        "_id": 31,
        "title": "Flavors of Youth",
        "genre": [
            { "_id": 5, "name": "Dramas" },
            { "_id": 8, "name": "Romance" },
            { "_id": 10, "name": "Slice of Life" }
        ],
        "rating": "13+",
        "episode": "1 movie",
        "favorite": true,
        "category": "movie",
        "year": "2018",
        "duration": "1h 18m",
        "thumbnail": require("../assets/thumbnail/flavors-of-youth.jpg")
    },
    {
        "_id": 32,
        "title": "Fireworks",
        "genre": [
            { "_id": 8, "name": "Romance" },
            { "_id": 9, "name": "Sci-Fi" }
        ],
        "rating": "13+",
        "episode": "1 movie",
        "favorite": true,
        "category": "movie",
        "year": "2017",
        "duration": "1h 30m",
        "thumbnail": require("../assets/thumbnail/fireworks.jpg")
    },
    {
        "_id": 33,
        "title": "A Whiskers Away",
        "genre": [
            { "_id": 8, "name": "Romance" },
            { "_id": 9, "name": "Sci-Fi" }
        ],
        "rating": "13+",
        "episode": "1 movie",
        "favorite": true,
        "category": "movie",
        "year": "2020",
        "duration": "1h 44m",
        "thumbnail": require("../assets/thumbnail/a-whisker-away.jpg")
    },
    {
        "_id": 34,
        "title": "Your Name",
        "genre": [
            { "_id": 5, "name": "Dramas" },
            { "_id": 8, "name": "Romance" },
            { "_id": 9, "name": "Sci-Fi" }
        ],
        "rating": "13+",
        "episode": "1 movie",
        "favorite": true,
        "category": "movie",
        "year": "2016",
        "duration": "1h 46m",
        "thumbnail": require("../assets/thumbnail/your-name.JPG")
    },
    {
        "_id": 35,
        "title": "Weathering with You",
        "genre": [
            { "_id": 5, "name": "Dramas" },
            { "_id": 8, "name": "Romance" },
            { "_id": 9, "name": "Sci-Fi" }
        ],
        "rating": "13+",
        "episode": "1 movie",
        "favorite": true,
        "category": "movie",
        "year": "2019",
        "duration": "1h 52m",
        "thumbnail": require("../assets/thumbnail/weathering-with-you.JPG")
    },
    {
        "_id": 36,
        "title": "Garden of Words",
        "genre": [
            { "_id": 5, "name": "Dramas" },
            { "_id": 8, "name": "Romance" },
            { "_id": 10, "name": "Slice of Life" }
        ],
        "rating": "13+",
        "episode": "1 movie",
        "favorite": true,
        "category": "movie",
        "year": "2013",
        "duration": "46m",
        "thumbnail": require("../assets/thumbnail/garden-of-words.png")
    },
    {
        "_id": 37,
        "title": "I Want to Eat Your Pancreas",
        "genre": [
            { "_id": 5, "name": "Dramas" },
            { "_id": 8, "name": "Romance" },
            { "_id": 10, "name": "Slice of Life" }
        ],
        "rating": "13+",
        "episode": "1 movie",
        "favorite": true,
        "category": "movie",
        "year": "2018",
        "duration": "1h 48m",
        "thumbnail": require("../assets/thumbnail/i-want-to-eat-your-pancreas.jpg")
    },
    {
        "_id": 38,
        "title": "My Neighbor Totoro",
        "genre": [
            { "_id": 2, "name": "Adventure" },
            { "_id": 3, "name": "Children & Family" }
        ],
        "rating": "All",
        "episode": "1 movie",
        "favorite": true,
        "category": "movie",
        "year": "1988",
        "duration": "1h 27m",
        "thumbnail": require("../assets/thumbnail/my-neighor-totoro.JPG")
    },
    {
        "_id": 39,
        "title": "Kotaro Lives Alone",
        "genre": [
            { "_id": 3, "name": "Children & Family" },
            { "_id": 4, "name": "Comedies" },
            { "_id": 5, "name": "Dramas" },
            { "_id": 10, "name": "Slice of Life" }
        ],
        "rating": "13+",
        "episode": "10 episode",
        "favorite": true,
        "category": "series",
        "year": "2022",
        "duration": "27m",
        "thumbnail": require("../assets/thumbnail/kotaro-lives-alone.JPG")
    },
    {
        "_id": 40,
        "title": "Ponyo",
        "genre": [
            { "_id": 2, "name": "Adventure" },
            { "_id": 3, "name": "Children & Family" }
        ],
        "rating": "All",
        "episode": "1 movie",
        "favorite": true,
        "category": "movie",
        "year": "2008",
        "duration": "1h 40m",
        "thumbnail": require("../assets/thumbnail/ponyo.jpg")
    },
    {
        "_id": 41,
        "title": "Whisper of the Heart",
        "genre": [
            { "_id": 3, "name": "Children & Family" },
            { "_id": 5, "name": "Dramas" },
            { "_id": 8, "name": "Romance" },
            { "_id": 10, "name": "Slice of Life" }
        ],
        "rating": "All",
        "episode": "1 movie",
        "favorite": true,
        "category": "movie",
        "year": "1995",
        "duration": "1h 51m",
        "thumbnail": require("../assets/thumbnail/whisper-of-the-heart.JPG")
    },
    {
        "_id": 42,
        "title": "From Up on Poppy Hill",
        "genre": [
            { "_id": 3, "name": "Children & Family" },
            { "_id": 8, "name": "Romance" },
            { "_id": 10, "name": "Slice of Life" }
        ],
        "rating": "All",
        "episode": "1 movie",
        "favorite": true,
        "category": "movie",
        "year": "2011",
        "duration": "1h 35m",
        "thumbnail": require("../assets/thumbnail/from-up-on-poppy-hill.jpg")
    },
    {
        "_id": 43,
        "title": "Spirited Away",
        "genre": [
            { "_id": 3, "name": "Children & Family" },
            { "_id": 9, "name": "Sci-Fi" }
        ],
        "rating": "7+",
        "episode": "1 movie",
        "favorite": true,
        "category": "movie",
        "year": "2001",
        "duration": "2h 4m",
        "thumbnail": require("../assets/thumbnail/spirited-away.jpg")
    },
    {
        "_id": 44,
        "title": "Avatar The Last Airbender",
        "genre": [
            { "_id": 1, "name": "Action" },
            { "_id": 2, "name": "Adventure" },
            { "_id": 3, "name": "Children & Family" }
        ],
        "rating": "7+",
        "episode": "61 episode",
        "favorite": true,
        "category": "series",
        "year": "2005",
        "duration": "23m",
        "thumbnail": require("../assets/thumbnail/avatar-the-last-airbender.jpg")
    },
    {
        "_id": 45,
        "title": "Kono oto Tomare!: Sounds of Life",
        "genre": [
            { "_id": 6, "name": "Music" },
            { "_id": 8, "name": "Romance" }
        ],
        "rating": "13+",
        "episode": "13 episode",
        "favorite": true,
        "category": "series",
        "year": "2019",
        "duration": "23m",
        "thumbnail": require("../assets/thumbnail/kono-oto-tomare.JPG")
    },
    {
        "_id": 46,
        "title": "The Disastrous Life of Saiki K.",
        "genre": [
            { "_id": 4, "name": "Comedies" },
            { "_id": 10, "name": "Slice of Life" }
        ],
        "rating": "13+",
        "episode": "24 episode",
        "favorite": true,
        "category": "series",
        "year": "2016",
        "duration": "23m",
        "thumbnail": require("../assets/thumbnail/the-disastrous-life-of-saiki-k.jpg")
    },
    {
        "_id": 47,
        "title": "Natsume's Book of Friends",
        "genre": [
            { "_id": 5, "name": "Dramas" },
            { "_id": 10, "name": "Slice of Life" }
        ],
        "rating": "13+",
        "episode": "74 episode",
        "favorite": true,
        "category": "series",
        "year": "2008",
        "duration": "24m",
        "thumbnail": require("../assets/thumbnail/natsume-ook-of-friends.JPG")
    },
    {
        "_id": 48,
        "title": "The Way of the Househusband",
        "genre": [
            { "_id": 4, "name": "Comedies" },
            { "_id": 8, "name": "Romance" },
            { "_id": 10, "name": "Slice of Life" }
        ],
        "rating": "13+",
        "episode": "5 episode",
        "favorite": true,
        "category": "series",
        "year": "2021",
        "duration": "17m",
        "thumbnail": require("../assets/thumbnail/the-way-of-the-househusband.JPG")
    },
    {
        "_id": 49,
        "title": "Komi Can't Communicate",
        "genre": [
            { "_id": 4, "name": "Comedies" },
            { "_id": 8, "name": "Romance" },
            { "_id": 10, "name": "Slice of Life" }
        ],
        "rating": "13+",
        "episode": "12 episode",
        "favorite": true,
        "category": "series",
        "year": "2021",
        "duration": "23m",
        "thumbnail": require("../assets/thumbnail/komi-cant-communicate.jpg")
    },
    {
        "_id": 50,
        "title": "Naruto Spin-Offs: Rock Lee & His Ninja Pals",
        "genre": [
            { "_id": 1, "name": "Action" },
            { "_id": 3, "name": "Children & Family" },
            { "_id": 4, "name": "Comedies" }
        ],
        "rating": "13+",
        "episode": "51 episode",
        "favorite": true,
        "category": "series",
        "year": "2012",
        "duration": "24m",
        "thumbnail": require("../assets/thumbnail/rock-lee-go.jpg")
    },
    {
        "_id": 51,
        "title": "Kakushiguto",
        "genre": [
            { "_id": 4, "name": "Comedies" },
            { "_id": 5, "name": "Dramas" },
            { "_id": 10, "name": "Slice of Life" }
        ],
        "rating": "13+",
        "episode": "12 episode",
        "favorite": true,
        "category": "series",
        "year": "2020",
        "duration": "23m",
        "thumbnail": require("../assets/thumbnail/Kakushigoto.jpg")
    },
    {
        "_id": 52,
        "title": "Assassination Classroom",
        "genre": [
            { "_id": 1, "name": "Action" },
            { "_id": 4, "name": "Comedies" },
            { "_id": 9, "name": "Sci-Fi" }
        ],
        "rating": "13+",
        "episode": "22 episode",
        "favorite": true,
        "category": "series",
        "year": "2015",
        "duration": "23m",
        "thumbnail": require("../assets/thumbnail/assassination-classroom.png")
    },
    {
        "_id": 53,
        "title": "Forest of Piano",
        "genre": [
            { "_id": 2, "name": "Adventure" },
            { "_id": 5, "name": "Dramas" },
            { "_id": 6, "name": "Music" }
        ],
        "rating": "13+",
        "episode": "12 episode",
        "favorite": true,
        "category": "series",
        "year": "2018",
        "duration": "23m",
        "thumbnail": require("../assets/thumbnail/forest-of-piano.jpg")
    },
    {
        "_id": 54,
        "title": "Lost Song",
        "genre": [
            { "_id": 5, "name": "Dramas" },
            { "_id": 6, "name": "Music" }
        ],
        "rating": "13+",
        "episode": "12 episode",
        "favorite": true,
        "category": "series",
        "year": "2018",
        "duration": "23m",
        "thumbnail": require("../assets/thumbnail/lost-song.jpg")
    },
    {
        "_id": 55,
        "title": "Your Lie in April",
        "genre": [
            { "_id": 5, "name": "Dramas" },
            { "_id": 6, "name": "Music" },
            { "_id": 8, "name": "Romance" }
        ],
        "rating": "13+",
        "episode": "22 episode",
        "favorite": true,
        "category": "series",
        "year": "2014",
        "duration": "22m",
        "thumbnail": require("../assets/thumbnail/your-lie-in-april.jpg")
    },
    {
        "_id": 56,
        "title": "Dr. Stone",
        "genre": [
            { "_id": 2, "name": "Adventure" },
            { "_id": 4, "name": "Comedies" },
            { "_id": 9, "name": "Sci-Fi" }
        ],
        "rating": "13+",
        "episode": "24 episode",
        "favorite": true,
        "category": "series",
        "year": "2019",
        "duration": "24m",
        "thumbnail": require("../assets/thumbnail/dr-stone.JPG")
    },
    {
        "_id": 57,
        "title": "Sword Art Online",
        "genre": [
            { "_id": 1, "name": "Action" },
            { "_id": 2, "name": "Adventure" },
            { "_id": 9, "name": "Sci-Fi" }
        ],
        "rating": "13+",
        "episode": "25 episode",
        "favorite": true,
        "category": "series",
        "year": "2012",
        "duration": "23m",
        "thumbnail": require("../assets/thumbnail/sword-art-online.jpg")
    },
    {
        "_id": 58,
        "title": "Darling in the Franxx",
        "genre": [
            { "_id": 1, "name": "Action" },
            { "_id": 8, "name": "Romance" },
            { "_id": 9, "name": "Sci-Fi" }
        ],
        "rating": "13+",
        "episode": "24 episode",
        "favorite": true,
        "category": "series",
        "year": "2018",
        "duration": "24m",
        "thumbnail": require("../assets/thumbnail/darling-in-the-franxx.jpg")
    },
    {
        "_id": 59,
        "title": "The Orbital Children",
        "genre": [
            { "_id": 9, "name": "Sci-Fi" }
        ],
        "rating": "13+",
        "episode": "6 episode",
        "favorite": true,
        "category": "series",
        "year": "2022",
        "duration": "32m",
        "thumbnail": require("../assets/thumbnail/the-orbital-children.jpeg")
    },
    {
        "_id": 60,
        "title": "Dororo",
        "genre": [
            { "_id": 1, "name": "Action" },
            { "_id": 2, "name": "Adventure" }
        ],
        "rating": "17+",
        "episode": "24 episode",
        "favorite": true,
        "category": "series",
        "year": "2019",
        "duration": "24m",
        "thumbnail": require("../assets/thumbnail/dororo.jpg")
    },
    {
        "_id": 61,
        "title": "Tokyo Ghoul",
        "genre": [
            { "_id": 1, "name": "Action" }
        ],
        "rating": "17+",
        "episode": "12 episode",
        "favorite": true,
        "category": "series",
        "year": "2014",
        "duration": "24m",
        "thumbnail": require("../assets/thumbnail/tokyo-ghoul.JPG")
    },
    {
        "_id": 62,
        "title": "Bungou Stray Dogs",
        "genre": [
            { "_id": 1, "name": "Action" },
            { "_id": 4, "name": "Comedies" },
            { "_id": 7, "name": "Mystery" }
        ],
        "rating": "17+",
        "episode": "12 episode",
        "favorite": true,
        "category": "series",
        "year": "2016",
        "duration": "24m",
        "thumbnail": require("../assets/thumbnail/bungo-stray-dogs.jpg")
    },
    {
        "_id": 63,
        "title": "A Place Further than the Universe",
        "genre": [
            { "_id": 2, "name": "Adventure" },
            { "_id": 4, "name": "Comedies" },
            { "_id": 5, "name": "Dramas" }
        ],
        "rating": "13+",
        "episode": "13 episode",
        "favorite": true,
        "category": "series",
        "year": "2018",
        "duration": "23m",
        "thumbnail": require("../assets/thumbnail/a-place-further-than-the-universe.jpg")
    },
    {
        "_id": 64,
        "title": "Yuru Camp",
        "genre": [
            { "_id": 2, "name": "Adventure" },
            { "_id": 4, "name": "Comedies" },
            { "_id": 10, "name": "Slice of Life" }
        ],
        "rating": "13+",
        "episode": "12 episode",
        "favorite": true,
        "category": "series",
        "year": "2018",
        "duration": "23m",
        "thumbnail": require("../assets/thumbnail/Yuru-Camp.jpg")
    },
    {
        "_id": 65,
        "title": "Nagi no Asu kara",
        "genre": [
            { "_id": 5, "name": "Dramas" },
            { "_id": 8, "name": "Romance" },
            { "_id": 9, "name": "Sci-Fi" }
        ],
        "rating": "13+",
        "episode": "26 episode",
        "favorite": true,
        "category": "series",
        "year": "2013",
        "duration": "23m",
        "thumbnail": require("../assets/thumbnail/nagi-no-asukara.jpg")
    },
    {
        "_id": 66,
        "title": "Clannad",
        "genre": [
            { "_id": 4, "name": "Comedies" },
            { "_id": 5, "name": "Dramas" },
            { "_id": 8, "name": "Romance" },
            { "_id": 10, "name": "Slice of Life" }
        ],
        "rating": "13+",
        "episode": "23 episode",
        "favorite": true,
        "category": "series",
        "year": "2007",
        "duration": "24m",
        "thumbnail": require("../assets/thumbnail/clannad.jpg")
    },
    {
        "_id": 67,
        "title": "Anohana: The Flower We Saw That Day",
        "genre": [
            { "_id": 5, "name": "Dramas" },
            { "_id": 10, "name": "Slice of Life" }
        ],
        "rating": "13+",
        "episode": "11 episode",
        "favorite": true,
        "category": "series",
        "year": "2011",
        "duration": "22m",
        "thumbnail": require("../assets/thumbnail/anohana.png")
    },
    {
        "_id": 68,
        "title": "Parasyte: The Maxim",
        "genre": [
            { "_id": 1, "name": "Action" },
            { "_id": 9, "name": "Sci-Fi" }
        ],
        "rating": "17+",
        "episode": "24 episode",
        "favorite": true,
        "category": "series",
        "year": "2014",
        "duration": "23m",
        "thumbnail": require("../assets/thumbnail/parasyte.jpg")
    },
    {
        "_id": 69,
        "title": "Sakurasou no Pet na Kanojo",
        "genre": [
            { "_id": 4, "name": "Comedies" },
            { "_id": 5, "name": "Dramas" },
            { "_id": 8, "name": "Romance" },
            { "_id": 10, "name": "Slice of Life" }
        ],
        "rating": "13+",
        "episode": "24 episode",
        "favorite": true,
        "category": "series",
        "year": "2012",
        "duration": "23m",
        "thumbnail": require("../assets/thumbnail/sakura-sou.jpg")
    },
    {
        "_id": 70,
        "title": "Jujutsu Kaisen",
        "genre": [
            { "_id": 1, "name": "Action" },
            { "_id": 2, "name": "Adventure" }
        ],
        "rating": "17+",
        "episode": "24 episode",
        "favorite": true,
        "category": "series",
        "year": "2020",
        "duration": "23m",
        "thumbnail": require("../assets/thumbnail/Jujutsu-Kaisen.png")
    }
]

export default moviesData;