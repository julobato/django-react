import React from 'react';

export default class UnderConstruction extends React.Component {
    render() {
        return (
            <div className="under-construction">
                <div className="under-construction-content">
                    <img src="../../static/underconstruction.png" />
                    <div className="under-construction-title">Coming Soon</div>
                    <div className="under-construction-subtitle">PAGE UNDER CONSTRUCTION</div>
                </div>
            </div>
        );
    }
}