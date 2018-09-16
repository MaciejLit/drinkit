import React, {Component} from 'react';
import {Button, Form, Input} from 'reactstrap';
import {Container, Row, Col} from 'reactstrap';
import NameCallback from "./NameCallback";

class SearchingByName extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showAll: false,
            value: '',
            drinksArr: [],
            arrOfIng: [],
            wrong: '',
            dis: 'none'
        }
    }



    handleSearching = event => {
        event.preventDefault();
        this.setState({
           showAll: true
        });
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${this.state.value}`).then(resp => resp.json()).then(data => {
            const mappedDrinks = data.drinks.map((e) => {
            return {
                url: e.strDrinkThumb,
                name: e.strDrink,
                category: e.strCategory,
                glass: e.strGlass,
                alco: e.strAlcoholic,
                instructions: e.strInstructions,
                ings: [e.strIngredient1, e.strIngredient2, e.strIngredient3, e.strIngredient4, e.strIngredient5, e.strIngredient6, e.strIngredient7, e.strIngredient8, e.strIngredient9, e.strIngredient10, e.strIngredient11, e.strIngredient12, e.strIngredient13, e.strIngredient14, e.strIngredient15]
            }
            });
            this.setState({drinksArr: mappedDrinks})
        }).catch(err => {this.setState({wrong: 'http://gifimage.net/wp-content/uploads/2017/08/vincent-vega-gif-9.gif',
            dis: 'block'})});
        this.setState({
            value: '',
            dis: 'none'
        })
    };

    handleChange = event => {
        this.setState({
            value: event.target.value
        })
    };

    hideError = event => {
        event.preventDefault();
        this.setState({
            dis: 'none'
        })
    };

    render() {
        return (
            <Container>
                <Form>
                    <Row>
                        <Col xs={'8'} className={'blabla'}>
                            <Input type={'text'} name={'name'} placeholder={'Give me your drink name'} onChange={this.handleChange} className={'main__input'} value={this.state.value}/>
                        </Col>
                        <Col xs={'4'}>
                            <Button onClick={this.handleSearching} className={'searching__button'}>Search</Button>
                        </Col>
                    </Row>
                </Form>
                {this.state.showAll ? <Row>
                    <NameCallback drinksArr={this.state.drinksArr}/>
                </Row> : false}
                <div className={'wrong__smth'} style={{
                    display: this.state.dis
                }}>
                </div>
                <strong style={{
                    display: this.state.dis,
                    textAlign: 'center'
                }}>We don`t have this alcohol in base, Sorry :(</strong>
                <Button className={'wrong__smth-button'} onClick={this.hideError} style={{
                    display: this.state.dis,
                }}>Ok :(</Button>
            </Container>
        );
    }
}

export default SearchingByName;