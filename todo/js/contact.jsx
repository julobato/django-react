// assets/js/index.jsx
import React from 'react';
import ReactDOM from 'react-dom';

import UnderConstruction from './underconstruction.jsx';

class Contact extends React.Component {
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
	<Contact />,
	document.getElementById("react-app")
);