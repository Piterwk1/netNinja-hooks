import { firestoreReducer } from 'react-redux-firebase';
import { combineReducers } from 'redux';
import authReducer from './authReducer';
import projectReducer from './projectReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer,
  firestore: firestoreReducer,
});

export default rootReducer;
