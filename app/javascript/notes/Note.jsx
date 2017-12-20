import React from 'react';
import PropTypes from 'prop-types';

export default class Note extends React.Component {
  render () {
    return (<span>{this.props.body}</span>);
  }
}

Note.propTypes = {
  body: PropTypes.string
};
