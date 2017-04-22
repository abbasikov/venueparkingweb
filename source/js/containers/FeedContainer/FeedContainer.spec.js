import React from 'react';
import {shallow, render, mount} from 'enzyme';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import FeedContainer from './FeedContainer';
import toJson  from 'enzyme-to-json';
import { INITIAL_STATE } from '../../constants/AppConstants';
import sinon from 'sinon';
import renderer from 'react-test-renderer';

const mockStore = configureMockStore([ thunk ]);

describe('FeedContainer', function() {
    var store;
    var container;

    beforeEach(function() {
        store = mockStore(INITIAL_STATE);
    });

    describe('#renders', () => {

        it('when feeds are empty', function() {
            container = render(<Provider store={store}><FeedContainer /></Provider>);
            expect(toJson(container)).toMatchSnapshot();
        });

        it('when feeds are not empty', function() {
            var mockedFeeds = [{
                userName:'test',
                content:'test',
                boardName:'test'
            }];
            store.getState().feeds = mockedFeeds;
            container = render(<Provider store={store}><FeedContainer /></Provider>);
            expect(toJson(container)).toMatchSnapshot();
        });
    });
});