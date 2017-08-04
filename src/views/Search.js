import React, {Component} from 'react';

 export class Search extends Component {
 	render() {
        return (
        	<div className="col-sm-6">
                        <div className="form-group">                                                               
                            <div className="input-group">
                                  <input
                                         type="text"
                                         className="form-controlx"
                                         placeholder="Search for Pizzas"
                                         onKeyUp={this.props.filterPizzaItems}
                                       />
                                    <div className="input-group-addon">
                                        <span className="glyphicon glyphicon-search"/>
                                    </div>
                            </div>
                        </div>                                             
             </div>
        	);
    }
 }