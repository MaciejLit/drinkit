import React, {Component} from 'react';
import SearchingByIngs from "../SearchingByIngs";
import SearchingByName from "../SearchingByName";
import {Container, Row, Col, FormGroup, Form, Label, Input} from 'reactstrap';
import Footer from "../../Footer";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class MainContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            option: ''
        }
    }

    changingOption = event => {
        this.setState({
            option: event.target.value
        });
    };

    render() {
        return (
            <Container>
                <Row>
                    <Col sm="12" md={{ size: 4, offset: 4 }} >
                        <Form>
                            <FormGroup>
                                <Label for="exampleSelect">What you want to drink?</Label>
                                <Input type="select" name="select" id="exampleSelect" onChange={this.changingOption} value={this.state.option}>
                                    <option value={'none'}>Choose your option</option>
                                    <option value={'name'}>Search drink by name</option>
                                    <option value={'ing'}>Search drink by Ingredient</option>
                                </Input>
                            </FormGroup>
                        </Form>
                    </Col>
                </Row>
                {this.state.option === 'ing' ?
                    <ReactCSSTransitionGroup
                        transitionName="example"
                        transitionAppear={true}
                        transitionAppearTimeout={500}
                        transitionEnter={false}
                        transitionLeave={false}>
                        <Row>
                            <Col sm="12" md={{ size: 6, offset: 3 }}>
                                <h2 className={'header__title'}>Search by Ingredients</h2>
                            </Col>
                            <Col sm="12" md={{ size: 6, offset: 3 }}>
                                <SearchingByIngs/>
                            </Col>
                        </Row>
                    </ReactCSSTransitionGroup> : false }
                {this.state.option === 'name' ?
                    <ReactCSSTransitionGroup
                        transitionName="example"
                        transitionAppear={true}
                        transitionAppearTimeout={500}
                        transitionEnter={false}
                        transitionLeave={false}>
                        <Row>
                            <Col sm="12" md={{ size: 6, offset: 3 }}>
                                <h2 className={'header__title'}>Search by name</h2>
                            </Col>
                            <Col sm="12" md={{ size: 6, offset: 3 }}>
                                <SearchingByName/>
                            </Col>
                        </Row>
                    </ReactCSSTransitionGroup> : false}
                    <Footer/>
            </Container>
        );
    }
}

export default MainContainer;