import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';

import LoginContainer from './containers/LoginContainer/LoginContainer';
import routes from 'routes';
import store from './store';

var componentRoutes = {
    path:routes.login.path,
    indexRoute: { component:LoginContainer},
    childRoutes:[{
        path:routes.home.name,
        getComponent(location, cb) {
            System.import('./containers/HomeContainer/HomeContainer')
                .then(module => cb(null, module.default));
        },
        childRoutes:[
            {
                path:routes.home.childRoutes.main.name,
                getComponent(location, cb) {
                    System.import('./containers/MainContentContainer/MainContentContainer')
                        .then(module => cb(null, module.default));
                }
            },
            {
                path:routes.home.childRoutes.createPost.name,
                getComponent(location, cb) {
                    System.import('./containers/CreatePostContainer/CreatePostContainer')
                        .then(module => cb(null, module.default));
                }
            },
            {
                path:routes.home.childRoutes.profile.name,
                getComponent(location, cb) {
                    System.import('./containers/ProfileContainer/ProfileContainer')
                        .then(module => cb(null, module.default));
                }
            },
            {
                path:routes.home.childRoutes.accountSettings.name,
                getComponent(location, cb) {
                    System.import('./containers/AccountSettingsContainer/AccountSettingsContainer')
                        .then(module => cb(null, module.default));
                }
            }
        ]
    }
    ]
};

ReactDOM.render(
    <Provider store={store}>
      <Router history={browserHistory} routes={componentRoutes}/>
    </Provider>
    , document.getElementById('root'));


//Will be implemented later
//if('serviceWorker' in navigator) {
//    console.log('Service Worker Found');
//
//    navigator.serviceWorker
//        .register('./serviceWorker.js', { scope: './'})
//        .then(function(registration){
//            console.log('Service Worker Registered ');
//        })
//        .catch(function(err){
//            console.log('Service Worker Fail to Register ',err);
//        });
//}





















