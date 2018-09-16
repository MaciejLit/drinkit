import React, {Component} from 'react';
import OneOfListElement from "./OneOfListElement";
// import {Button} from 'reactstrap';

// let counter1 = 0;
// let counter2 = 1;
// let counter3 = 2;

export default class NameImgIngs extends Component {

    constructor(props) {
        super(props);
        this.state = {
            off: false,
            off2: true
        }
    }

    render() {
        return (
            <div>
                <OneOfListElement drinksArr={this.props.drinksArr}/>
            </div>
        )
    }
}
