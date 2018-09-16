import React, {Component} from 'react';
import {Button, Form, Input} from 'reactstrap';
import {Container, Row, Col} from 'reactstrap';
import IngsCallback from "./IngsCallback";


class SearchingByIngs extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ingVal: '',
            showAll: false,
            drinksArr: [],
            wrong: '',
            dis: 'none'
        }
    }


    handleSearching = (event) => {
        event.preventDefault();
        this.setState({
            showAll: true,
        });

        fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${this.state.ingVal}`).then(resp => resp.json()).then(data => {
            const mappedDrinks = data.drinks.map((e) => {
                return {
                    id: e.idDrink,
                    url: e.strDrinkThumb,
                    name: e.strDrink
                }
            });
            this.setState({drinksArr: mappedDrinks})
        }).catch(err => {
            this.setState({
                wrong: 'http://gifimage.net/wp-content/uploads/2017/08/vincent-vega-gif-9.gif',
                dis: 'block'
            })
        });
        this.setState({
            ingVal: '',
            dis: 'none'
        })

    };

    hideError = event => {
        event.preventDefault();
        this.setState({
            dis: 'none'
        })
    };

    handleChange = event => {
        this.setState({
            ingVal: event.target.value
        })
    };

    render() {
        return (
                <Container>
                    <Form>
                        <Row>
                            <Col xs={'8'}>
                                <Input type={'text'} onChange={this.handleChange}
                                       placeholder={'Give me your ingredients'}
                                       value={this.state.ingVal} className={'main__input'}/>
                            </Col>
                            <Col xs={'4'}>
                                <Button onClick={this.handleSearching} className={'searching__button'}>Search</Button>
                            </Col>
                        </Row>
                    </Form>
                    {this.state.showAll ? <Row>
                        <IngsCallback ing={this.state.ingVal} drinksArr={this.state.drinksArr}/>
                    </Row> : false}
                    <div className={'wrong__smth'} style={{
                        display: this.state.dis
                    }}>
                    </div>
                    <strong style={{
                        display: this.state.dis,
                        textAlign: 'center'
                    }}>We don`t have this ingredient in base, Sorry :(</strong>
                    <Button className={'wrong__smth-button'} onClick={this.hideError} style={{
                        display: this.state.dis,
                    }}>Ok :(</Button>
                </Container>
        );
    }
}

export default SearchingByIngs;