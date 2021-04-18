// assets/js/index.jsx
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props);
        console.log('----')
    }
    render() {
        return (
            <div className="teste">
                This is my React app!! Welcome
            </div>
        );
    }
}

ReactDOM.render(
	<App />,
	document.getElementById("react-app")
);