import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

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
        <FloatingActionButton
          label="Add Note"
          onClick={() => this.props.onNoteAdd()}
          style={styles.button}
        >
          <ContentAdd />
        </FloatingActionButton>
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
