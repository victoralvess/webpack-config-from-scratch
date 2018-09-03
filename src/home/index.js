import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { css } from 'emotion';
const title = css`{
    font-family: Helvetica, Arial, sans-serif;
    color: #222;
    font-size: 2em;
}`;

class H1 extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <h1 onClick={(e)=>console.log(this.props.title)} className={title}>{this.props.title}</h1>
        );
    }
}

document.querySelectorAll('.react').forEach((container, i) => {
    ReactDOM.render(
        <H1 title={`This is a React Component ${i}`}/>,
        container
    );
});