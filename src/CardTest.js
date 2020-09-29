import React from "react"; 
import ReactDOM from "react-dom";
import Card from './Card';


it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Card />, div);

    //clean up code
    ReactDOM.unmountComponentAtNode(div);
})