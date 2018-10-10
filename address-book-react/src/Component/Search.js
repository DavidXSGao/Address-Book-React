import React, { Component } from 'react';
import { connect } from 'react-redux';
import { filterContacts } from '../actions.js';

class SearchBar extends Component {
	render(){
	const { dispatch, contacts} = this.props;
	return(
		<input placeholder="Search"
          onChange={(text) => dispatch(filterContacts(text, contacts))}/>
	);
	}
}

function mapStateToProps(state) {
  return {
    contacts: state.contacts
  }
}

export default connect(mapStateToProps)(SearchBar);

