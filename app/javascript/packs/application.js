import 'babel-polyfill';
import 'raf/polyfill';
import ReactOnRails from 'react-on-rails';

import NotesApp from '../NotesApp';

ReactOnRails.register({
  NotesApp
});
