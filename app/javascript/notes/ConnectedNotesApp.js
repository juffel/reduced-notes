import { connect } from 'react-redux';

import NotesApp from './NotesApp';
import {
  addNoteThunk,
  updateNoteThunk,
  deleteNoteThunk
} from './actions';

const mapStateToProps = state => ({ notes: state.notesReducer.notes });

const mapDispatchToProps = dispatch => ({
  onNoteAdd: (body = 'New Note') => {
    dispatch(addNoteThunk(body));
  },
  onNoteUpdate: (note) => {
    dispatch(updateNoteThunk(note));
  },
  onNoteDelete: (note) => {
    dispatch(deleteNoteThunk(note));
  }
});

const ConnectedNotesApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(NotesApp);

export default ConnectedNotesApp;
