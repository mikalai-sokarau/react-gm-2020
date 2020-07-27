import React from 'react';

class CreateElementComponent extends React.Component {
    render() {
        return React.createElement(
            'span',
            {},
            'React.createElement component'
        );
    }
}

export default CreateElementComponent;
