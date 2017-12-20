import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import notesAppReducer from './reducers'
import VisibleNotesApp from './VisibleNotesApp';

class NotesAppContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const store = createStore(notesAppReducer);
    return (
      <Provider store={store} >
        <VisibleNotesApp />
      </Provider>
    );
  }
}

export default NotesAppContainer;
