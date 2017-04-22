import React from 'react';
import {shallow, render, mount } from 'enzyme';
import toJson  from 'enzyme-to-json';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { INITIAL_STATE } from '../../constants/AppConstants';
import SideBarContainer from './SideBarContainer';

const mockStore = configureMockStore([ thunk ]);

describe('SideBarContainer', function() {
    var store;
    var container;

    beforeEach(function() {
        store = mockStore(INITIAL_STATE);
    });

    describe('#render', () => {
        it('initial state', function() {
            container = render(<Provider store={store}><SideBarContainer /></Provider>);
            expect(toJson(container)).toMatchSnapshot();
        });
    });

});