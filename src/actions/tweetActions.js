import { FETCH_TWEETS } from './types';

const baseURL = process.env.NODE_ENV == 'production' ? 'http://35.200.145.96:1337/' : 'http://localhost:1337/';

export const fetchTweets = (searchText) => dispatch => {
    fetch(baseURL + 'getTweets?searchText=' + searchText, {mode: "cors"})
    .then(response => response.json())
    .then(posts => {
        dispatch({
            type : FETCH_TWEETS,
            payload: posts
        })
    });
}
