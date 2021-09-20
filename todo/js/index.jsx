// assets/js/index.jsx
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            scroll: false
        }
    }

    componentDidMount(){
        window.addEventListener('scroll', function(event) {
            var scroll_position = window.scrollY;
			this.setState({scroll: scroll_position != 0})
        }.bind(this));
    }

    render() {
        return (
            <div className="home">
                <div className="home-main">
                    <div className="home-intro">
                        <div className="home-intro-text">hello, I am Julianne</div>
                        <div className="home-intro-line" />
                    </div>
                    <div className="home-title">full stack developer</div>
                    <div className="home-subtitle-1">photography enthusiast</div>
                    <div className="home-subtitle-2">movies and series lover</div>
                    <div className="home-subtitle-3">bridge player</div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(
	<App />,
	document.getElementById("react-app")
);