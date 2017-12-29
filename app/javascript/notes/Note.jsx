import React from 'react';
import PropTypes from 'prop-types';

import Toggle from 'material-ui/Toggle';

export default class Note extends React.Component {
  constructor(props) {
    super(props);
    this.state = { editing: false };

    this.onEdit = this.onEdit.bind(this);
    this.onSave = this.onSave.bind(this);
  }

  onEdit() {
    this.setState({ editing: true });
  }

  onSave() {
    this.setState({ editing: false });
    this.props.onUpdate(this.input.value);
  }

  render () {
    if (this.state.editing) {
      return (
        <div>
          <input ref={(e) => this.input = e} defaultValue={this.props.body} />
          <button onClick={this.onSave}>Save</button>
        </div>
      );
    } else {
      return (
        <div>
          <span>{this.props.body}</span>
          <button onClick={this.onEdit}>Edit</button>
          <button onClick={this.props.onDelete}>Delete</button>
        </div>
      );
    }
  }
}

Note.propTypes = {
  body: PropTypes.string,
  onUpdate: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
};

Note.defaultProps = {
  body: ''
};
