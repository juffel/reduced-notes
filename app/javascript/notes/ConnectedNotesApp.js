import { connect } from 'react-redux';

import NotesApp from './NotesApp';
import {
  addNoteAction,
  updateNoteAction,
  deleteNoteAction
} from './actions';

const mapStateToProps = state => ({ notes: state.notesReducer.notes });

const mapDispatchToProps = dispatch => ({
  onNoteAdd: (body = 'New Note') => {
    dispatch(addNoteAction(body));
  },
  onNoteUpdate: (note) => {
    dispatch(updateNoteAction(note));
  },
  onNoteDelete: (note) => {
    dispatch(deleteNoteAction(note));
  }
});

const ConnectedNotesApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(NotesApp);

export default ConnectedNotesApp;
