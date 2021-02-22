export const createProject = (project) => (
  dispatch,
  getState,
  { getFirebase, getFirestore }
) => {
  const firestore = getFirestore();
  dispatch({ type: 'CREATE_PROJECT', project });
};
