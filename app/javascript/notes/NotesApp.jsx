import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { addNote } from './actions';
import NotesList from './NotesList';

export default class NotesApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = { notes: [] };

    this.addNote = this.addNote.bind(this);
    this.onStateUpdate = this.onStateUpdate.bind(this);

    this.props.store.subscribe(this.onStateUpdate);
  }

  addNote() {
    const body = this.input.value;
    const action = addNote(body);
    this.props.store.dispatch(action);
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
        <NotesList notes={this.state.notes} />
      </div>
    );
  }
}
