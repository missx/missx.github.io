import React from 'react';

import './TitleComponent.css';

function TitleComponent(props) {
    return (
        <div className="TitleComponent">
            <h1 className="TitleComponent-title">{props.title}</h1>
        </div>
    );
}

export default TitleComponent;