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

// const rrfConfig = {
//   userProfile: 'users',
//   useFirestoreForProfile: true, // include if using firestore
//   attachAuthIsReady: true, // include if using firebase auth
// };

// // reduxFirestore worked for me and i guess is still there in the current version3
// // NOTE: This is a necessary step, because when you're using firebaseReducer and firestoreReducer in
// // the root reducer then those reducers know which firebase database to connect to as you pass these information
// // as fbConfig, so you're store now knows about youre firebase configuration file

// const store = createStore(
//   rootReducer,
//   compose(applyMiddleware(thunk), reduxFirestore(fbConfig))
// );

// // we pass these props from the <ReactReduxFirebaseProvider> down to all the elements and catch
// // the firebase property using the withFirebase() function (HOC)
// const rrfProps = {
//   firebase,
//   config: rrfConfig,
//   dispatch: store.dispatch,
//   createFirestoreInstance,
// };

// // this function is used as an alternative to the function in v2.*.* so that my DOM renders only when
// // my firebase has made a connection (ignore this if not using firebase.auth())
// // eslint-disable-next-line react/prop-types
// function AuthIsReady({ children }) {
//   const auth = useSelector((state) => state.firebase.auth);
//   if (isLoaded(auth)) {
//     return children;
//   }
//   return <div className="center loading"> </div>;
// }

// // remove <AuthIsReady> tag is not using firebase.auth()

// ReactDOM.render(
//   <Provider store={store}>
//     <ReactReduxFirebaseProvider {...rrfProps}>
//       <React.StrictMode>
//         <AuthIsReady>
//           <App />
//         </AuthIsReady>
//       </React.StrictMode>
//     </ReactReduxFirebaseProvider>
//   </Provider>,
//   document.getElementById('root')
// );

// import reportWebVitals from './reportWebVitals';

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore }))
    reactReduxFirebase(fbConfig) // redux binding for firebase
    reduxFirestore(fbConfig) // redux bindings for firestore
  )
);

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

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rffProps}>
      <App />
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root')
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
