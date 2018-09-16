import React, {Component} from 'react';
import '../../App.css';
import Header from "../Header";
import MainInfo from "../MainInfo";

class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <MainInfo/>
            </div>
        );
    }
}

export default App;
