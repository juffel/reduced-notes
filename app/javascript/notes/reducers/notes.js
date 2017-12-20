const updateNote = (state, action) => {
  return Object.assign({}, state, { body: action.body });
};

const notes = (state = [], action) => {
  switch (action.type) {
    case 'ADD_NOTE':
      return [
        ...state,
        {
          id: action.id,
          body: action.body
        }
      ];
    case 'UPDATE_NOTE':
      return state.map((note) => {
        if (note.id === action.id) {
          return updateNote(note, action);
        }
        return note
      });
    case 'DELETE_NOTE':
      return state.filter((note) => note.id !== action.id);
    default:
      return state;
  }
};

export default notes;
