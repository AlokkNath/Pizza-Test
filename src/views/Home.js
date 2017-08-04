import React, {Component} from 'react';
import {Header} from '../views/Header';
import {MainContainer} from '../views/MainContainer';
import {Footer} from '../views/Footer';

 export class Home extends Component {
 	constructor(props) {
        super(props);
        this.state = {            
            pizzaItems: props.pizza
        }
    }
    render() {
        return (
           <div className="container panel panel-default" style={{height: '570px'}}>
                  <Header/>
                  <div className="panel-body" style={{height: '500px'}}>  
                        <MainContainer pizza={this.state.pizzaItems}/>
                  </div>
                  <Footer/>
            </div>  
        );
    }
}