const movieData = [
    {
        "_id": 1,
        "title": "Demon Slayer",
        "genre": [
            { "_id": 1, "name": "Action" },
            { "_id": 2, "name": "Adventure" }
        ],
        "rating": "16+",
        "episode": "44 episode",
        "favorite": true,
        "year": "2019",
        "duration": "25m",
        "thumbnail": require("../assets/thumbnail/Spy-X-Family.jpg")
    },
    {
        "_id": 2,
        "title": "Attack on Titan",
        "genre": [
            { "_id": 1, "name": "Action" },
            { "_id": 2, "name": "Adventure" }
        ],
        "rating": "16+",
        "episode": "44 episode",
        "favorite": true,
        "year": "2019",
        "duration": "25m",
        "thumbnail": "../assets/thumbnail/Spy-X-Family.jpg"
    },
]

export default movieData;