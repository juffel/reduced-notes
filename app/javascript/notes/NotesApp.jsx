import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import {
  addNoteAction,
  updateNoteAction,
  deleteNoteAction
} from './actions';

import NotesList from './NotesList';

const buttonStyle = {
  margin: 0,
  top: 'auto',
  right: 20,
  bottom: 20,
  left: 'auto',
  position: 'fixed'
};

function NotesApp(props) {
  return (
    <Paper>
      <AppBar title="Reduced Notes" />
      <FloatingActionButton
        label="Add Note"
        onClick={() => props.onNoteAdd()}
        style={buttonStyle}
      >
        <ContentAdd />
      </FloatingActionButton>
      <NotesList
        notes={props.notes}
        onNoteUpdate={props.onNoteUpdate}
        onNoteDelete={props.onNoteDelete}
      />
    </Paper>
  );
}

NotesApp.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.shape).isRequired,
  onNoteAdd: PropTypes.func.isRequired,
  onNoteUpdate: PropTypes.func.isRequired,
  onNoteDelete: PropTypes.func.isRequired
};

NotesApp.contextTypes = {
  store: PropTypes.object
};

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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotesApp);
