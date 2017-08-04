import React from 'react';
import {expect} from 'code';
import {shallow} from 'enzyme';
import {MainContainer} from '../../src/views/MainContainer'
import {Search} from '../../src/views/Search'

describe('<MainContainer /> Component', () => {
    let pizzaElement, testProps;
    beforeEach(() => {
        testProps = {
            pizza: ['veg-extravaganza', 'chicken-fiesta', 'paneer-n-onion']
        };

        pizzaElement = shallow(<MainContainer {...testProps}/>);        
    });

    it('should have pizza list', function () {
        expect(pizzaElement.state('pizzaItems')).to.equal(testProps.pizza);
    });

    it('should have a div element', () => {
        expect(pizzaElement.props().children[0].type).to.equal('div');
    });   

    describe('Searching pizza items', function () {
            let searchElement, searchMain;
            searchMain = shallow(<Search/>);
            beforeEach(function () {
                searchElement = searchMain.props().children.props.children.props.children[0];
            });            

            it('should have a input textbox', function () {
                expect(searchElement.type).to.equal('input');
            })
           
    });

});
