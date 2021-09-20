// assets/js/index.jsx
import React from 'react';
import ReactDOM from 'react-dom';

import UnderConstruction from './underconstruction.jsx';

class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            scroll: false
        }
    }

    render() {
        return (
            <UnderConstruction />
        );
    }
}

ReactDOM.render(
	<Projects />,
	document.getElementById("react-app")
);