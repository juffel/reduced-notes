import { connect } from 'react-redux';

import NotesApp from './NotesApp';
import { addNote, deleteNote } from './actions';

const mapStateToProps = state => {
  return { notes: state.notes };
};

const mapDispatchToProps = dispatch => {
  return {
    onNoteAdd: text => {
      dispatch(addNote(text));
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
