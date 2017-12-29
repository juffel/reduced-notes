
export function clientUpdate(action) {
  switch(action.type) {
    case 'FETCH_NOTES':
      get().then((response) => {
        // TODO: save list of notes
      });
      break;
    case 'ADD_NOTE':
      const addParams = { foo: 'bar' };
      post(addParams).then((response) => {
        // TODO: save persistedNote.id in
      });
      break;
    case 'UPDATE_NOTE':
      const updateParams = { foo: 'bar' };
      post(updateParams).then((response) => {
        // TODO: do nothing (rely on optimistic update)
      });
      break;
    case 'DELETE_NOTE':
      const deleteParams = { foo: 'bar' };
      delete(deleteParams).then((response) => {
        // TODO: do nothing (rely on optimistic update)
      });
      break;
  }
};
