import React from 'react';
import {expect} from 'code';
import {shallow} from 'enzyme';
import {Sort} from '../../src/views/Sort';

describe('<Sort/> Component', () => {    
    let sortElement, testProps;

    beforeEach(() => {        
        sortElement = shallow(<Sort/>);
    });

     describe('Check for sorting pizza items', function () {             
            it('should have a sort button', () => {
                 expect(sortElement.props().children.type).to.equal('button');
            });
           
    }); 
 });