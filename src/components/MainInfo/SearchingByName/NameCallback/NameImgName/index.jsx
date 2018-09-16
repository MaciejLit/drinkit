import React, {Component} from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import IngsNeededName from "./IngsNeededName";


class NameImgName extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ing: this.props.ing,
            showInfo: false,
            toggleArr: Array(100)
        }
    }

    showingMore = (event, i) => {
        event.preventDefault();
        const newArr = Array(100);
        if (this.state.toggleArr[i] === true) {
            newArr[i] = false;
            this.setState({toggleArr: newArr})
        } else {
            newArr[i] = true;
            this.setState({toggleArr: newArr})
        }
    };
    render() {
        const oneDrink = this.props.drinksArr.map((e, i) => {
            return (
                <Card key={i + 1000} className={'main__card'}>
                    <CardBody className={'main__card-body'}>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'row',
                            textAlign: 'center'
                        }}>
                            <CardTitle className={'search__title'}>{e.name}</CardTitle>
                                <CardImg className={'main__image'} top width="100%" src={e.url} alt="Card image cap"/>
                        </div>
                        <Button className={'main__button'} onClick={(e) => this.showingMore(e, i)}>Show more...</Button>
                        {this.state.toggleArr[i] ?
                            <div className={'inner__div'}>
                                <CardSubtitle className={'main__subtitle'}><strong>#Category</strong> {e.category} - {e.alco}</CardSubtitle>
                                <CardText className={'main__text'}><strong>#Instructions:</strong> {e.instructions}</CardText>
                                <CardText className={'main__text'}><strong>Glass for this drink:</strong> {e.glass}</CardText>
                                {console.log(this)}
                                <IngsNeededName ings={e.ings}/>
                            </div> : false}
                    </CardBody>
                </Card>
            )
        });
        return (
            <div className={'main__div-holder'}>
                {oneDrink}
            </div>
        );
    }
}

export default NameImgName;