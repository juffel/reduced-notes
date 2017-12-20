const notes = (state = [], action) => {
  switch (action.type) {
    case 'ADD_NOTE':
      return [
        ...state,
        {
          id: action.id,
          text: action.text
        }
      ];
    case 'DELETE_NOTE':
      return delete state[action.index];
    default:
      return state;
  }
};

export default notes;
