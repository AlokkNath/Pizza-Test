import React, {Component} from 'react';

 export class Sort extends Component {
 	render() {
        return (
        	<div className="col-sm-3">                       
                        {/* Button on click sorts in ascending and descending order*/}
                        <button
                            type="button"
                            className="btn btn-default"
                            onClick={this.props.sortPizzaItems}>
                            Sort
                        </button>                    
                </div>
        	);
    }
 }