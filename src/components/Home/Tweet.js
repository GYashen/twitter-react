import React from 'react';

const Tweet = (props) => {
    
    return(
        <div className="twitter-card">
            <div className="row-top">
            <div className="user-wrapper">
                <span style={{backgroundImage : 'url(' + props.profileImage + ')'}} className="user-image"></span>
                <div className="profile-user">
                    <span className="user">{props.name}</span>
                    <span className="username">@{props.screenName}</span>
                </div>
            </div>
            </div>
            <p className="profile-bio">{props.content}</p>
        </div>
    )
}


export default Tweet;