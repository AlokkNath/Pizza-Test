import React from 'react';
import {expect} from 'code';
import {shallow} from 'enzyme';
import {Search} from '../../src/views/Search';


describe('<Search/> Component', () => {
    let searchElement, testProps;

    beforeEach(() => {
        searchElement = shallow(<Search/>);
    });

 describe('Pizza page elements', function () {       
            it('should have div element', () => {
                 expect(searchElement.props().children.type).to.equal('div');
            });                
           
            it('should have div element', () => {
                 expect(searchElement.props().children.props.children.type).to.equal('div');
            });            

            it('should have a input textbox', function () {
                expect(searchElement.props().children.props.children.props.children[0].type).to.equal('input');
            });
    });
 });