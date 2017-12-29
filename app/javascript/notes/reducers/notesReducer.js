function reduceNote(
  state = {
    adding: false,
    updating: false,
    deleting: false,
    id: null,
    body: ''
  },
  action
) {
  switch (action.type) {
    case 'ADD_NOTE':
      return Object.assign({}, state, { adding: true } );
    case 'RECEIVE_ADDED_NOTE':
      return Object.assign({}, state, { id: action.backendId,
                                        adding: false });
    case 'UPDATE_NOTE':
      return Object.assign({}, state, { updating: true } );
    case 'RECEIVE_UPDATED_NOTE':
      return Object.assign({}, state, { updating: false } );
    case 'DELETE_NOTE':
      return Object.assign({}, state, { deleting: true } );
    case 'RECEIVE_DELETED_NOTE':
      return Object.assign({}, state, { deleting: false } );
    default:
      return state;
  }
};

const notesReducer = (state = { notes: [] }, action) => {
  switch (action.type) {
    case 'RECEIVE_NOTES':
      return Object.assign({}, state, { notes: action.notes });
    case 'ADD_NOTE':
      const notesAdd = [
        ...state.notes,
        reduceNote(undefined, action)
      ];
      return Object.assign({}, state, { notes: notesAdd });
    case 'UPDATE_NOTE':
      const notesUpdate = state.notes.map((note) => {
        if (note.id === action.id) {
          return reduceNote(note, action);
        }
        return note;
      });
      return Object.assign({}, state, { notes: notesUpdate });
    case 'DELETE_NOTE':
      const notesDelete = state.filter((note) => note.id !== action.id);
      return Object.assign({}, state, { notes: notesDelete });
    default:
      return state;
  }
};

export default notesReducer;
