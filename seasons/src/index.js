import React from 'react';
import ReactDom from 'react-dom';

class App extends React.Component{
    render(){
        window.navigator.geolocation.getCurrentPosition(
            positon => console.log(positon),
            err => console.lot(err)
        );

        return <div>Latitude:</div>;
    };
};

ReactDom.render(<App/>, document.querySelector('#root'));