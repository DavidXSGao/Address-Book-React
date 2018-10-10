import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { addContact,  addContactFiltered} from './actions';
import appState from './reducers';

import { BrowserRouter as Router} from 'react-router-dom';

import registerServiceWorker from './registerServiceWorker';

import App from './App';

import './i18n.js';

import './index.css';

import { fetchContacts } from './Component/Api.js';

let store = createStore(appState);

fetchContacts()
  .then(function (mock_contacts){
     mock_contacts.forEach ( (contact) => {
      store.dispatch(addContact(contact));
      store.dispatch(addContactFiltered(contact));
     })
  }
)

ReactDOM.render((
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
), document.getElementById('root'));

registerServiceWorker();

export default store;
