let incrementalId = 0;

export const addNote = body => {
  return {
    type: 'ADD_NOTE',
    id: incrementalId++,
    body
  };
};

export const updateNote = (id, body) => {
  return { type: 'UPDATE_NOTE', id, body };
};

export const deleteNote = id => {
  return {
    type: 'DELETE_NOTE',
    id
  };
};
