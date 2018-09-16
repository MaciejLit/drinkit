import React, {Component} from 'react';
import {Container} from 'reactstrap';
import NameImgIngs from "./NameImgIngs";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";


class IngsCallback extends Component {

    render() {
        return (
            <Container>
                <ReactCSSTransitionGroup
                    transitionName="example"
                    transitionAppear={true}
                    transitionAppearTimeout={500}
                    transitionEnter={false}
                    transitionLeave={false}>
                <NameImgIngs drinksArr={this.props.drinksArr}/>
                </ReactCSSTransitionGroup>
            </Container>
        );
    }
}
export default IngsCallback;