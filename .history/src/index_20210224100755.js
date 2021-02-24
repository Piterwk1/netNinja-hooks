/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { applyMiddleware, compose, createStore } from 'redux';

import { Provider, useSelector } from 'react-redux';
import thunk from 'redux-thunk';
import { createFirestoreInstance, reduxFirestore } from 'redux-firestore';
import {
  getFirebase,
  isLoaded,
  ReactReduxFirebaseProvider,
} from 'react-redux-firebase';
import firebase from 'firebase/app';
import App from './App';
import rootReducer from './store/reducers/rootReducer';
// import firebase from './config/fbConfig';
import fbConfig from './config/fbConfig';

// import reportWebVitals from './reportWebVitals';

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase })),
    reduxFirestore(firebase)
  )
);

const rffProps = {
  firebase,
  config: {},
  dispatch: store.dispatch,
  createFirestoreInstance,
};

function AuthIsLoaded({ children }) {
  const auth = useSelector((state) => state.firebase.auth);
  if (!isLoaded(auth))
    return <div className="center loading">PAGE IS LOADING </div>;
  return children;
}

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rffProps}>
      <AuthIsLoaded>
        <App />
      </AuthIsLoaded>
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
