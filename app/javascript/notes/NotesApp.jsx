import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { addNote } from './actions';
import NotesList from './NotesList';

export default class NotesApp extends React.Component {
  constructor(props) {
    super(props);

    this.onStateUpdate = this.onStateUpdate.bind(this);
  }

  onStateUpdate() {
    const newState = this.props.store.getState();
    this.setState(newState);
  }

  render() {
    return (
      <div>
        <button onClick={() => this.props.onNoteAdd()}>Add Note</button>
        <NotesList
          notes={this.props.notes}
          onNoteUpdate={this.props.onNoteUpdate}
          onNoteDelete={this.props.onNoteDelete}
        />
      </div>
    );
  }
}

NotesApp.propTypes = {
  notes: PropTypes.array.isRequired,
  onNoteAdd: PropTypes.func.isRequired,
  onNoteUpdate: PropTypes.func.isRequired,
  onNoteDelete: PropTypes.func.isRequired
};

NotesApp.contextTypes = {
  store: PropTypes.object
};
