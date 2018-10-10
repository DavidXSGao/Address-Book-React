import { combineReducers } from 'redux';
import {
  ADD_CONTACT, ADD_CONTACT_FILTERED, TOGGLE_SIDEBAR, CHANGE_TITLE, FILTER_CONTACTS, UPDATE_CONTACT
} from './actions';

function contacts (state = [], action) {
  switch (action.type) {
    case ADD_CONTACT:
      return [
        ...state,
        action.contact
      ]
    case UPDATE_CONTACT:
      return state.map(contact => {
        if (contact.id === action.contact.id) return action.contact;
        return contact;
      });
    default:
      return state
  }
}

function sidebarStatus (state = true, action) {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return !state
    default:
      return state
  }
}

function title (state = "Contacts", action) {
  switch (action.type) {
    case CHANGE_TITLE:
      return action.title
    default:
      return state
  }
}

function filteredContacts (state = [], action) {
  switch (action.type) {
    case FILTER_CONTACTS:
        var updated_list = [];
        if (!action.filter) {
          updated_list = state;
        } else {
          updated_list = action.list.filter(function(contact){
            for (var key in contact) {
              if (typeof contact[key] === 'number'){
                continue;
              }
              if(contact[key].toLowerCase().search(action.filter.target.value.toLowerCase()) !== -1){
                return true;
              }
            }
          });
        }
        return updated_list;
    case ADD_CONTACT_FILTERED:
      return [
        ...state,
        action.contact
      ]
    default:
      return state
  }
}

const appState = combineReducers({
  contacts,
  sidebarStatus,
  title,
  filteredContacts
});

export default appState;