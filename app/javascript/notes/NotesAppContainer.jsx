import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import notesAppReducer from './reducers'
import ConnectedNotesApp from './ConnectedNotesApp';

class NotesAppContainer extends React.Component {
  constructor(props) {
    super(props);

    this.store = createStore(notesAppReducer);
  }

  render() {
    return (
      <Provider store={this.store} >
        <MuiThemeProvider>
          <ConnectedNotesApp />
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default NotesAppContainer;
