let incrementalId = 0;

export const addNote = text => {
  return {
    type: 'ADD_NOTE',
    id: incrementalId++,
    text
  };
};

export const deleteNote = index => {
  return {
    type: 'DELETE_NOTE',
    index
  };
};