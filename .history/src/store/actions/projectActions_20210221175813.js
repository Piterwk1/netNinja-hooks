export const createProject = (project) => (
  dispatch,
  getState,
  { getFirebase, getFirestore }
) => {
  const firestore = getFirestore();
  firestore.collection('projects').add({
    ...project,
    authorFirstName: 'Net',
    authorLastName: 'Ninja',
    authorId: 12345,
    createdAt: new Date(),
  });
  dispatch({ type: 'CREATE_PROJECT', project });
};
