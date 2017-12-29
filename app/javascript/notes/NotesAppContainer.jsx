import React from 'react';
import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import notesAppReducer from './reducers'
import ConnectedNotesApp from './ConnectedNotesApp';
import { fetchNotesThunk } from './actions';

class NotesAppContainer extends React.Component {
  constructor(props) {
    super(props);

    const store = createStore(
      notesAppReducer,
      applyMiddleware(thunkMiddleware)
    );
    this.store = store;
    store.dispatch(fetchNotesThunk());
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
