import React from 'react';
import faker from 'faker';

const CommentDetail = () => {
    return (
        <div className="ui container comments">
            <div className="comments">
                <a href="/" className="avatar">
                    <img alt="avatar" src={faker.image.avatar()} />
                </a>
                <div className="content">
                    <a href="/" className="author">
                        Sam
                </a>
                    <div className="metadate">
                        <span className="date">Today at 6:00PM</span>
                    </div>
                    <div classNmae="text">Nice blog post!</div>
                </div>
            </div >
        </div>
    );

};

export default CommentDetail;
