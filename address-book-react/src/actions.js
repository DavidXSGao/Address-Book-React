/*
 * Action Types
 */
export const ADD_CONTACT = 'ADD_CONTACT';
export const ADD_CONTACT_FILTERED = 'ADD_CONTACT_FILTERED';
export const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR';
export const CHANGE_TITLE = 'CHANGE_TITLE';
export const FILTER_CONTACTS = 'FILTER_CONTACTS';
export const UPDATE_CONTACT = 'UPDATE_CONTACT';

/*
 * Action Creators
 */
export function addContact(contact) {
    return { type: ADD_CONTACT, contact: contact };
}

export function addContactFiltered(contact) {
    return { type: ADD_CONTACT_FILTERED, contact: contact };
}

export function toggleSidebar() {
    return { type: TOGGLE_SIDEBAR };
}

export function changeTitle(title) {
	return { type: CHANGE_TITLE, title:title }
}

export function filterContacts(filter, list) {
	return { type: FILTER_CONTACTS, filter:filter, list:list }
}

export function updateContact(contact) {
    return { type: UPDATE_CONTACT, contact: contact };
}