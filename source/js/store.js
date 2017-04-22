import { createStore, applyMiddleware} from 'redux';
import reduxthunk from 'redux-thunk';
import reducers from './reducers/reducers';


// Creates the Redux reducer with the redux-thunk middleware, which allows us
// to do asynchronous things in the actions
const createStoreWithMiddleware = applyMiddleware(reduxthunk)(createStore);
const store = createStoreWithMiddleware(reducers);

export default store;
