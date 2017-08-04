import React, {Component} from 'react';
import {fetch} from './services/PizzaService';
import {HOME_TITLE} from './config/message';
import {Home} from './views/Home';

function getPizzaList() {
   //Fetching the JSON data from fetch service. 
    return fetch() 
        .then((response)=> 
            self.setState({
                            pizzaItems: response.pizzas, 
                            loading: !(response.pizzas.length)
                        })
        )
}


export class App extends Component {
    constructor() {
        super();
        this.state = {
            pizzaItems: [],
            loading: true
        };
    }

    //Setting the Loading..timeout for 2 seconds.
    componentDidMount() {
      document.title = HOME_TITLE;
          self = this;
          global.setTimeout(() => {
              getPizzaList();
      },2000);
    }

    //Displaying the Pizza List.
    renderPizzaPage() {
        return (   
              <div>                                    
                  <Home pizza={this.state.pizzaItems}/>                  
              </div>
        );
    }

    //Displaying the text Loading...
    renderLoading() {    
        return (
          <div>
               <h3><center><i>Loading...</i></center></h3>
          </div>
        );
    }

    render() {       
        const loading = this.state.loading;
        if(loading){
          return this.renderLoading();
        }
        else{
          return this.renderPizzaPage();
        }
    }
}
