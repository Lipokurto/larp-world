import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { DarkApp } from './app';
import { store } from './redux/store';
import AppDataProvider from './app-data-provider';

ReactDOM.render(
  <Provider store={store}>
    <AppDataProvider>
      <DarkApp />
    </AppDataProvider>
  </ Provider>,
document.getElementById('root'));