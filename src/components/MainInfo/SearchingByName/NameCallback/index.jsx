import React, {Component} from 'react';
import {Container} from 'reactstrap';
import NameImgName from "./NameImgName";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class NameCallback extends Component {
    render() {
        return (
            <Container>
                <ReactCSSTransitionGroup
                    transitionName="example"
                    transitionAppear={true}
                    transitionAppearTimeout={500}
                    transitionEnter={false}
                    transitionLeave={false}>
                <NameImgName drinksArr={this.props.drinksArr}/>
                </ReactCSSTransitionGroup>
            </Container>
        );
    }
}
export default NameCallback;