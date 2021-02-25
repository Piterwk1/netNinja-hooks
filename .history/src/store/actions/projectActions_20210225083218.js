export const createProject = (project) => (
  dispatch,
  getState,
  { getFirebase }
) => {
  const firestore = getFirebase().firestore();
  const { profile } = getState().firebase;
  const authorId = getState().firebase.auth.uid;
  firestore
    .collection('projects')
    .add({
      ...project,
      authorFirstName: profile.firstName,
      authorLastName: profile.lastName,
      authorId,
      createdAt: new Date(),
    })
    .then(() => {
      dispatch({ type: 'CREATE_PROJECT', project });
    })
    .catch((error) => dispatch({ type: 'CREATE_PROJECT_ERROR', error }));
};

// export const createProject = (project) => (
//   dispatch,
//   getState,
//   { getFirebase, getFirestore }
// ) => {
//   const firestore = getFirestore();
//   firestore
//     .collection('projects')
//     .add({
//       ...project,
//       authorFirstName: 'Net',
//       authorLastName: 'Ninja',
//       authorId: 12345,
//       createdAt: new Date(),
//     })
//     .then(() => {
//       dispatch({ type: 'CREATE_PROJECT', project });
//     })
//     .catch((err) => {
//       dispatch({ type: 'CREATE_PROJECT_ERROR', err });
//     });
// };
