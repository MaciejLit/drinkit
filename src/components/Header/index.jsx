import React, {Component} from 'react';
import { Container} from 'reactstrap';

class Header extends Component {
    render() {
        return (
            <Container className={'main__container-main'}>
                <img src="https://scontent.fpoz2-1.fna.fbcdn.net/v/t1.15752-9/40371516_401246437072334_1527029829151490048_n.png?_nc_cat=0&oh=7a22e4936ce32f3407662a7612e792cd&oe=5BFF9829" alt="logo" className={'main__logo'}/>
            </Container>
        );
    }
}

export default Header;