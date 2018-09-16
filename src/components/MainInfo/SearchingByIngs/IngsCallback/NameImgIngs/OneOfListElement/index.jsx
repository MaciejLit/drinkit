import React, {Component} from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, ListGroup, ListGroupItem
} from 'reactstrap';


class OneOfListElement extends Component {

    constructor(props) {
        super(props);
        const newArr =[];
        for (let i = 0; i < 101; i++) {
            newArr.push(false)
        }

        this.state = {
            showMore: false,
            ingsArr: [],
            toggleArr: newArr,
            arrOfIng: ''
        }
    }

    showingMore = (event, i) => {
        event.preventDefault();
        const newArr = this.state.toggleArr.map(() => {
            return false;
        });

        if (this.state.toggleArr[i] === true) {
            newArr[i] = false;
            this.setState({toggleArr: newArr})
        } else if (this.state.toggleArr[i] === false) {
            newArr[i] = true;
            this.setState({toggleArr: newArr}, () => this.drisnkFetcher(i))
        }
    };

    drisnkFetcher = (i) => {
        this.props.drinksArr.map((e, index) => {
            if (index === i) {
                fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${e.id}`).then(resp => resp.json()).then(data => {
                    const anMappedDrinks = data.drinks.map((e) => {
                        return {
                            url: e.strDrinkThumb,
                            name: e.strDrink,
                            category: e.strCategory,
                            glass: e.strGlass,
                            alco: e.strAlcoholic,
                            instructions: e.strInstructions,
                            ings: [e.strIngredient1, e.strIngredient2, e.strIngredient3, e.strIngredient4, e.strIngredient5, e.strIngredient6, e.strIngredient7, e.strIngredient8, e.strIngredient9, e.strIngredient10, e.strIngredient11, e.strIngredient12, e.strIngredient13, e.strIngredient14, e.strIngredient15]
                        };
                    });
                    this.setState({ingsArr: anMappedDrinks})
                });
            }
        });
        const somead = this.state.ingsArr.map((e, i) => {
            return (
                <div className={'inner__div'} key={i + 3276}>
                    <CardSubtitle className={'main__subtitle'}><strong>#Category</strong> {e.category} - {e.alco}</CardSubtitle>
                    <CardText className={'main__text'}><strong>#Instructions:</strong> {e.instructions}</CardText>
                    <CardText className={'main__text'}><strong>Glass for this drink:</strong> {e.glass}</CardText>
                    <h5><strong>#Ingredients</strong> </h5>
                    <ListGroup className={'main__list'}>
                        {e.ings.map((el, indo) => {
                            if (el !== '' && el !== null) {
                                return <ListGroupItem key={indo + 275}>{el}</ListGroupItem>
                            } else {
                                return false
                            }
                        })}
                    </ListGroup>
                </div>
            )
        });
        this.setState({
            arrOfIng: somead
        })
    }
    render() {
        const oneDrink = this.props.drinksArr.map((e, i) => {
            return (
                <Card key={i + 92341} className={'main__card'}>
                    <CardBody className={'main__card-body'}>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'row',
                            textAlign: 'center'
                        }}>
                            <CardTitle className={'search__title'}>{e.name} </CardTitle>
                            <div className={'main__card-body-div'}><CardImg className={'main__image'} top width="100%" height="100%" src={e.url}
                                        alt="Card image cap"/></div>
                        </div>
                        <Button className={'main__button'} onClick={(e) => this.showingMore(e, i)}>Show More...</Button>
                        {this.state.toggleArr[i] ? this.state.arrOfIng : false}
                        {}
                    </CardBody>
                </Card>
            )
        });
        return (
            <div>
                {oneDrink}
            </div>
        );
    }
}

export default OneOfListElement;