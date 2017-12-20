import React from 'react';
import PropTypes from 'prop-types';

export default class Note extends React.Component {
  render () {
    return (
      <div>
        <span>{this.props.body}</span>
        <button onClick={this.props.onDelete}>Delete</button>
      </div>
    );
  }
}

Note.propTypes = {
  body: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired
};
