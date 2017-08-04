import React, {Component} from 'react';
import {Search} from '../views/Search';
import {Sort} from '../views/Sort';

//Sorting in Ascending and Descending order.
function sortAscAndDesc() {
    const PizzaArray = this;
    this.isPizzaAsc = !this.isPizzaAsc;       
    
    if(this.isPizzaAsc)
         return PizzaArray.sort((nameA, nameB)=>nameA.toLowerCase().localeCompare(nameB.toLowerCase()))
    else
         return PizzaArray.reverse((nameA, nameB)=>nameA.toLowerCase().localeCompare(nameB.toLowerCase()))
}

//Filtering the Pizza Array list
function getFilteredData(pizzaArray, searchPizza) {
  return pizzaArray.filter((pizzaName) => pizzaName.toLowerCase().indexOf((searchPizza.target.value).toLowerCase()) > -1)
}


export class MainContainer extends Component {
    constructor(props) {
        super(props);
        this.filterPizzaItems = this.filterPizzaItems.bind(this);
        this.sortPizzaItems = this.sortPizzaItems.bind(this);
        this.state = {
            changedPizzaItems: props.pizza,
            pizzaItems: props.pizza
        }
    }

    //Filtering the Pizza List.
    filterPizzaItems(searchPizza) {       
        this.state.pizzaItems = this.state.changedPizzaItems;
        this.setState({
            pizzaItems: getFilteredData(this.state.pizzaItems, searchPizza)
        });
    }

   //Sorting the pizza list.
    sortPizzaItems() {
        this.state.pizzaItems.sortAscAndDesc = sortAscAndDesc;
        this.setState({
            pizzaItems: this.state.pizzaItems.sortAscAndDesc()
        });
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-sm-3">
                    </div>                
                    <Search filterPizzaItems = {this.filterPizzaItems}/>
                    <Sort sortPizzaItems = {this.sortPizzaItems}/>                   
                </div>

                <div className="panel-body">
                    <ul className="list-group-item">
                        {
                            this.state.pizzaItems.map(function(item, index) {
                                return (<li className="list-group-item list-group-item-info" key={index}>{item}</li>)
                            })
                        }
                    </ul>
                </div>
            </div>
        );
    }
}
