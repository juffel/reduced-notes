import React from 'react';
import PropTypes from 'prop-types';

import Note from './Note';

export default class NotesList extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    const notes = this.props.notes.map((note) => {
      return (
        <li key={note.id}>
          <Note
            body={note.body}
            onUpdate={(newBody) => this.props.onNoteUpdate(Object.assign({}, note, { body: newBody }))}
            onDelete={() => this.props.onNoteDelete(note)}
          />
        </li>
      );
    });

    return (
      <ul>
        {notes}
      </ul>
    )
  }
}

NotesList.propTypes = {
  notes: PropTypes.array,
  onNoteUpdate: PropTypes.func.isRequired,
  onNoteDelete: PropTypes.func.isRequired
};
