import 'babel-polyfill';
import 'raf/polyfill';
import ReactOnRails from 'react-on-rails';

import NotesAppContainer from '../notes/NotesAppContainer';
import NotesApp from '../notes/NotesApp';

ReactOnRails.register({
  NotesAppContainer,
  NotesApp
});
