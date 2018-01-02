import React from 'react';
import PropTypes from 'prop-types';

import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import NotesList from './NotesList';

const buttonStyle = {
  margin: 0,
  top: 'auto',
  right: 20,
  bottom: 20,
  left: 'auto',
  position: 'fixed'
};

export default function NotesApp(props) {
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
