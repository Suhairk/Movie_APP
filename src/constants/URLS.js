

const API = "927a9fecedacc69fd484c32f4d86e62f"
const IMDB_BASE_URL = "https://api.themoviedb.org/3"
const IMDB_IMAGE_URL = "https://image.tmdb.org/t/p"
const YOUTUBE_BASE_URL = "https://www.youtube.com/watch"

const END_POINTS = {
    NOW_PLAYING : "/movie/now_playing/",
    UPCOMING :"/movie/upcoming/",
    GENRES:"/genre/movie/list/",
    MOVIES:'/movie'
}

const APPEND_RESPONSE = {
    VIDEOS: "videos",
    CREDITS:"credits",
    RECOMMENDATIONS: "recommendations",
}

SERVER_BASE_URL = "http://192.168.1.90:3001"

const BACKEND_API = {
    BACKEND_BASE_AUTH_URL : `${SERVER_BASE_URL}/api`,
    REGISTER : '/register',
    LOGIN :'/login'
}


export {API,IMDB_BASE_URL, IMDB_IMAGE_URL,END_POINTS,APPEND_RESPONSE,YOUTUBE_BASE_URL,BACKEND_API}  