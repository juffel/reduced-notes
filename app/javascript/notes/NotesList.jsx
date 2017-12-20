import React from 'react';
import PropTypes from 'prop-types';

import Note from './Note';

export default class NotesList extends React.Component {
  render () {
    const notes = this.props.notes.map((note, index) => {
      return (
        <li key={note.id}>
          <Note body={note.text} onDelete={() => this.props.onNoteDelete(note.id)}/>
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

Note.propTypes = {
  notes: PropTypes.array,
  onNoteDelete: PropTypes.func
};
