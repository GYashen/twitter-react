import React from 'react';
import Header from './Header'
import Tweet from './Tweet'
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Notifier, { openSnackbar } from '../Partials/Notifier';

class TweetBox extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tweets : [],
            currentPage : 0
        }
    }

    componentWillReceiveProps(nextProps){
        // console.log(nextProps.tweets);
        if(nextProps.tweets.length == 0){
            openSnackbar({message : 'No Tweets Found for this search!!!'});
        }else{
            this.setState({
                tweets : nextProps.tweets
            })
        }
    }

    loadNext = () => {
        var currentPage = this.state.currentPage;
        currentPage++;
        this.setState({
            currentPage
        })
    }

    render() {
        var tweets = this.state.tweets;
        var visibleTweets = tweets.slice(0, this.state.currentPage*8 + 8);
        return (
            <div>
                <div style={{display : 'flex', justifyContent : 'space-between', flexWrap : 'wrap'}}>
                    {visibleTweets.map((t, index) => 
                        <Tweet 
                            key={index}
                            content={t.text}
                            name={t.user.name}
                            screenName={t.user.screen_name}
                            profileImage={t.user.profile_image_url}
                        />
                    )}
                    
                </div>
                {visibleTweets.length > 0 && visibleTweets.length < this.state.tweets.length ? 
                    <Button style={{float : 'right', margin : '10px'}} onClick={this.loadNext} variant="contained">Load More...</Button> 
                    : null
                }
                <Notifier/>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    tweets : state.tweets.tweets
});


export default connect(mapStateToProps, null)(TweetBox);