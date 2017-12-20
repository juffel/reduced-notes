import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { addNote } from './actions';
import NotesList from './NotesList';

export default class NotesApp extends React.Component {
  constructor(props) {
    super(props);

    this.addNote = this.addNote.bind(this);
    this.onStateUpdate = this.onStateUpdate.bind(this);
  }

  addNote() {
    const body = this.input.value;
    this.props.onNoteAdd(body);
  }

  onStateUpdate() {
    const newState = this.props.store.getState();
    this.setState(newState);
  }

  render() {
    return (
      <div>
        <input ref={element => { this.input = element; }} type="text" />
        <button onClick={this.addNote}>Add Note</button>
        <NotesList notes={this.props.notes} onNoteDelete={this.props.onNoteDelete} />
      </div>
    );
  }
}

NotesApp.propTypes = {
  notes: PropTypes.array.isRequired,
  onNoteAdd: PropTypes.func.isRequired,
  onNoteDelete: PropTypes.func.isRequired
};
