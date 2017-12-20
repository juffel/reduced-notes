import { connect } from 'react-redux';

import NotesApp from './NotesApp';
import { addNote, deleteNote } from './actions';

const mapStateToProps = state => {
  console.log(state);
  return { notes: state.notes };
};

const mapDispatchToProps = dispatch => {
  return {
    onNoteAdd: text => {
      console.log('addNote: ' + text);
      dispatch(addNote(text));
    },
    onNoteDelete: id => {
      console.log('deleteNote: ' + id);
      dispatch(deleteNote(id));
    }
  };
};

const VisibleNotesApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(NotesApp);

export default VisibleNotesApp;
