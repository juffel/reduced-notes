import React from 'react';
import PropTypes from 'prop-types';

import Note from './Note';

export default class NotesList extends React.Component {
  render () {
    const notes = this.props.notes.map(note => <li key={note.id}><Note body={note.text} /></li>);

    return (
      <ul>
        {notes}
      </ul>
    )
  }
}

Note.propTypes = {
  notes: PropTypes.array
};
