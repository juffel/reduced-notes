import React from 'react';
import PropTypes from 'prop-types';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

export default class NoteDialog extends React.Component {
  constructor(props) {
    super(props);

    this.onSave = this.onSave.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }

  onSave() {
    this.props.onDismiss();
    this.props.onSave(this.state.body);
  }

  onDelete() {
    this.props.onDismiss();
    this.props.onDelete();
  }

  render() {
    const actions = [
      <FlatButton
        label="Dismiss"
        primary
        onClick={this.props.onDismiss}
      />,
      <FlatButton
        label="Save"
        primary
        onClick={this.onSave}
      />,
      <FlatButton
        label="Delete"
        primary
        onClick={this.onDelete}
      />
    ];
    return (
      <Dialog open={this.props.open} actions={actions}>
        <TextField
          hintText="Add some content"
          floatingLabelText="MultiLine and FloatingLabel"
          defaultValue={this.props.body}
          multiLine
          rows={7}
          onChange={(e, value) => { this.setState({ body: value }); }}
        />
      </Dialog>
    );
  }
}

NoteDialog.propTypes = {
  open: PropTypes.bool,
  body: PropTypes.string,
  onDismiss: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
};

NoteDialog.defaultProps = {
  body: '',
  open: false
};
