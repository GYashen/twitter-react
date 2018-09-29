import { FETCH_TWEETS } from './types';

export const fetchTweets = (searchText) => dispatch => {
    console.log('I am here------------')
    fetch('http://35.200.145.96:1337/test?searchText='+searchText,{mode: "cors"})
    .then(response => response.json())
    .then(posts => {
        dispatch({
            type : FETCH_TWEETS,
            payload: posts
        })
    });
}
