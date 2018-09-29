import React from 'react';
import Header from './Header'
import Tweet from './Tweet'
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';

class TweetBox extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tweets : [],
            currentPage : 0
        }
    }

    componentWillReceiveProps(nextProps){
        console.log(nextProps.tweets);
        this.setState({
            tweets : nextProps.tweets
        },()=>{
            console.log(this.state);
        })
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
        var visibleTweets = tweets.slice(this.state.currentPage*10, this.state.currentPage*10 + 8);
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
                {visibleTweets.length > 0 ? 
                    <Button style={{float : 'right', margin : '10px'}} onClick={this.loadNext} variant="contained">Load More...</Button> 
                    : null
                }
            </div>
        );
    }
}

const mapStateToProps = state => ({
    tweets : state.tweets.tweets
});


export default connect(mapStateToProps, null)(TweetBox);