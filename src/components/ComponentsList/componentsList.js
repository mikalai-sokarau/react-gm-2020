import React from 'react';
import ReactDOM from 'react-dom';
import './componentsList.css';
import ReactComponent from '../ReactComponent/reactComponent';
import ReactPureComponent from '../ReactPureComponent/reactPureComponent';
import FunctionalComponent from '../functionalComponent/functionalComponent';
import CreateElementComponent from '../CreateElement/createElement';

class ComponentsList extends React.Component {
    
    render() {
        return (
            <ul>
                <li><ReactComponent /></li>
                <li><ReactPureComponent /></li>
                <li><FunctionalComponent /></li>
                <li></li>
            </ul>
        )
    }

    componentDidMount() {
        const targetElement = document.querySelector('.app li:last-child');
        ReactDOM.render(CreateElementComponent, targetElement);
    }
};

export default ComponentsList;
