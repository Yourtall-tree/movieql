import fetch from "node-fetch"
const API_URL = "https://yts.am/api/v2/list_movies.json?"

export const getMovie = (limit, rating) => {
    let REQUEST_URL = API_URL;
    let flag=0;
    if(limit>0){
        REQUEST_URL+=`limit=${limit}`;
        flag=1;
    }
    if(rating >0){
        flag==1 
        ? REQUEST_URL+=`&minimum_rating=${rating}`
        : REQUEST_URL+=`minimum_rating=${rating}`;
    }
    return fetch(REQUEST_URL)
    .then(res => res.json())
    .then(json => json.data.movies);
};