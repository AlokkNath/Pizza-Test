import React from 'react';
import {expect} from 'code';
import {shallow} from 'enzyme';
import {Home} from '../../src/views/Home';
import {MainContainer} from '../../src/views/MainContainer';
import {Header} from '../../src/views/Header';
import {Footer} from '../../src/views/Footer';

describe('<Home/> Component', () => {
    let homeElement;

    beforeEach(() => {
        homeElement = shallow(<Home/>);
     });
	it('Pizza home page should have panel', () => {
	            homeElement.setState({loading: false});
	            expect(homeElement.props().className).to.equal('container panel panel-default');
	  });

	 describe('Pizza home page ELements', function () {
            it('Pizza home page should have child elements', function () {
                homeElement.setState({loading: false});
                expect(homeElement.props().children[0].type).to.equal(Header);
                expect(homeElement.props().children[1].type).to.equal('div');
                expect(homeElement.props().children[2].type).to.equal(Footer);
            }); 

        describe('when pizza app is loaded', function () {
            it('Pizza home page should show pizza container', function () {
                homeElement.setState({loading: false});
                expect(homeElement.props().children[1].props.children.type).to.equal(MainContainer);
            });

            it('Pizza home page should set pizza list', function () {
                homeElement.setState({loading: false});
                const pizzaItems = ['veg-extravaganza', 'chicken-fiesta', 'paneer-n-onion']
                homeElement.setState({pizzaItems: pizzaItems});
                expect(homeElement.props().children[1].props.children.props.pizza).to.equal(pizzaItems);
            });
        });
    }); 
	
});