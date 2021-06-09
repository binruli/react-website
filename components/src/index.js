import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail'; // './' look in the same folder


const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail author="Sam" timeAgo="Today at 6:00pm" content="Thank you for your sharing." avatar={faker.image.avatar()}/>
            <CommentDetail author="Mary" timeAgo="Today at 7:00pm" content="Good job!" avatar={faker.image.avatar()}/>
            <CommentDetail author="Alex" timeAgo="Yesterday at 8:00pm" content="Nice blog post!" avatar={faker.image.avatar()}/>
        </div>


    );

};

ReactDOM.render(<App />, document.querySelector('#root'))