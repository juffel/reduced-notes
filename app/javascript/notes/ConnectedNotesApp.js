import { connect } from 'react-redux';

import NotesApp from './NotesApp';
import { addNote, updateNote, deleteNote } from './actions';

const mapStateToProps = state => {
  return { notes: state.notes };
};

const mapDispatchToProps = dispatch => {
  return {
    onNoteAdd: (body = '') => {
      dispatch(addNote(body));
    },
    onNoteUpdate: (id, body) => {
      dispatch(updateNote(id, body));
    },
    onNoteDelete: id => {
      dispatch(deleteNote(id));
    }
  };
};

const ConnectedNotesApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(NotesApp);

export default ConnectedNotesApp;
