import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import notesAppReducer from './reducers'
import NotesApp from './NotesApp';

class NotesAppContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={createStore(notesAppReducer)} >
        <NotesApp />
      </Provider>
    );
  }
}

export default NotesAppContainer;
