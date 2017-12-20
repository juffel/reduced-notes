import 'babel-polyfill';
import 'raf/polyfill';
import ReactOnRails from 'react-on-rails';

import NotesAppContainer from '../NotesAppContainer';
import NotesApp from '../NotesApp';

ReactOnRails.register({
  NotesAppContainer,
  NotesApp
});
