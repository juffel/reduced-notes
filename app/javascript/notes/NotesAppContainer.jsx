import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import notesAppReducer from './reducers';
import ConnectedNotesApp from './ConnectedNotesApp';
import { requestNotesAction } from './actions';
import rootSaga from './saga';

class NotesAppContainer extends React.Component {
  constructor(props) {
    super(props);

    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
      notesAppReducer,
      applyMiddleware(sagaMiddleware)
    );
    this.store = store;
    sagaMiddleware.run(rootSaga);
    store.dispatch(requestNotesAction());
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
