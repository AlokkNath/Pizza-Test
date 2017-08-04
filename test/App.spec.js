import React from 'react';
import {expect} from 'code';
import {shallow} from 'enzyme';
import {App} from '../src/App';
import {Home} from '../src/views/Home';

describe('<App/> Component', () => {
    let appElement;

    beforeEach(() => {
        appElement = shallow(<App/>);
     });
     
        describe('Loading page ELements', function () {

                it('Loading page should have h3 element', function () {
                    expect(appElement.props().children.type).to.equal('h3');           
                });

                it('Loading page should have center element', function () {
                    expect(appElement.props().children.props.children.type).to.equal('center');           
                });

                it('Loading page should have i element', function () {
                    expect(appElement.props().children.props.children.props.children.type).to.equal('i');
                 });   
                it('Loading page should show "Loading...', function () {
                    expect(appElement.props().children.props.children.props.children.props.children).to.equal('Loading...')
                });       
            });

        

        describe('Pizza home page ELements', function () {           

        describe('when pizza app is loaded', function () {
            it('Pizza home page should show pizza Home', function () {
                appElement.setState({loading: false});                
                expect(appElement.props().children.type).to.equal(Home);                
            });           
        });
    });
});


