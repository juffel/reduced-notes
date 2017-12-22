import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import notesAppReducer from './reducers'
import ConnectedNotesApp from './ConnectedNotesApp';

class NotesAppContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const store = createStore(notesAppReducer);
    return (
      <Provider store={store} >
        <MuiThemeProvider>
          <ConnectedNotesApp />
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default NotesAppContainer;
