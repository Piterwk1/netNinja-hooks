// import { firestoreReducer } from 'react-redux-firebase';
// import { combineReducers } from 'redux';
// import authReducer from './authReducer';
// import projectReducer from './projectReducer';

// const rootReducer = combineReducers({
//   auth: authReducer,
//   project: projectReducer,
//   firestore: firestoreReducer,
// });

// export default rootReducer;

import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';
import projectReducers from './projectReducer';
import authReducers from './authReducer';

const rootReducers = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  auth: authReducers,
  project: projectReducers,
});

export default rootReducers;
