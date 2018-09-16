import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

export default class IngsNeededName extends React.Component {
    render() {
        const oneIng = this.props.ings.map((e, i) => {
            if (e !== '' && e !== null) {
                return <ListGroupItem key={i + 10000}>{e}</ListGroupItem>
            }
        });
        return (
            <div>
                <h5><strong>#Ingredients</strong> </h5>
                <ListGroup className={'main__list'}>
                    {oneIng}
                </ListGroup>
            </div>
        );
    }
}