import React from 'react';
import PropTypes from 'prop-types';

import { List, ListItem } from 'material-ui/List';

import NoteDialog from './NoteDialog'

export default class NotesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dialogOpen: false,
      showingNote: {}
    };

    this.showNoteDialog = this.showNoteDialog.bind(this);
  }

  showNoteDialog(note) {
    this.setState({
      dialogOpen: true,
      showingNote: note
    });
  }

  render () {
    const notes = this.props.notes.map((note) => {
      return (
        <ListItem key={note.id} onClick={() => this.showNoteDialog(note) }>
          <span>{note.body || '-'}</span>
        </ListItem>
      );
    });

    return (
      <div>
        <List>
          {notes}
        </List>
        <NoteDialog
          body={this.state.showingNote.body}
          open={this.state.dialogOpen}
          onDismiss={() => this.setState({ dialogOpen: false })}
          onSave={(newBody) => this.props.onNoteUpdate(Object.assign({}, this.state.showingNote, { body: newBody }))}
          onDelete={() => this.props.onNoteDelete(this.state.showingNote)}
        />
      </div>
    )
  }
}

NotesList.propTypes = {
  notes: PropTypes.array,
  onNoteUpdate: PropTypes.func.isRequired,
  onNoteDelete: PropTypes.func.isRequired
};
