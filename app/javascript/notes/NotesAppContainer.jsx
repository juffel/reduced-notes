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
    const store = createStore(notesAppReducer);
    return (
      <Provider store={store} >
        <NotesApp store={store} />
      </Provider>
    );
  }
}

export default NotesAppContainer;
