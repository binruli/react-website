import React from 'react';

const CommentDetail = props => {
    return (
        <div className="ui container comments">
            <div className="comments">
                <a href="/" className="avatar">
                    <img alt="avatar" src={props.avatar} />
                </a>
                <div className="content">
                    <a href="/" className="author">
                        {props.author}
                </a>
                    <div className="metadate">
                        <span className="date">{props.timeAgo}</span>
                    </div>
                    <div classNmae="text">{props.content}</div>
                </div>
            </div >
        </div>
    );

};

export default CommentDetail;
