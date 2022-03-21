const axios = require("axios").default;

import {API,IMDB_BASE_URL, IMDB_IMAGE_URL,END_POINTS, YOUTUBE_BASE_URL} from '../constants/URLS'

const IMDB_HTTP_REQUEST = axios.create({
    baseURL:IMDB_BASE_URL,
    params:{
        api_key:API,
    },
});
//console.log("fetch")
//get noow playing movie
const getNowPlaying = () =>
    IMDB_HTTP_REQUEST.get(END_POINTS.NOW_PLAYING);
//get posters
const getPosters = (path) =>
    `${IMDB_IMAGE_URL}/original${path}`;

//console.log("in funtion" ,getNowPlayingMovies())
//comin movies 
const getComingMovie= () =>
    IMDB_HTTP_REQUEST.get(END_POINTS.UPCOMING);
//get Geners
const getGenres = () =>
    IMDB_HTTP_REQUEST.get(END_POINTS.GENRES);

//getMoviesposterByid and make it as append responds and condition accoriding to needs
const getMovieById = (movie_Id, append_to_response = "") =>
    IMDB_HTTP_REQUEST.get(`${END_POINTS.MOVIES}/${movie_Id}` ,  append_to_response ? { params: { append_to_response } } : null)

//view videos
const getVideos = (key) =>`${YOUTUBE_BASE_URL}?v=${key}`;

//const getVideo = (key) => `${YOUTUBE_BASE_URL}?v=${key}`;


export {getNowPlaying,getPosters,getComingMovie,getGenres,getMovieById,getVideos}