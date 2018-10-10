import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { changeTitle } from './actions.js';

import Header from './Container/Header/index.js';
import Sidebar from './Container/Sidebar/index.js';
import Contacts from './Container/Contacts/index.js';
import Help from './Container/Help/index.js'
import AddEditContact from './Container/AddEditContact/index.js'


import Grid from 'material-ui/Grid';
import './App.css';



class App extends Component {
  onRouteChange = (siteTitle) => {
      this.props.onRouteChange(siteTitle)
  }
  render() {
    const { title, dispatch, location } = this.props;
    return (
      <div className="App">
        <Grid container spacing={0}>
          <Grid item md={12}>
            <Header title={title} dispatch={dispatch} location={location}>
            </Header>
          </Grid>
        </Grid>
        <Grid container spacing={0}>
          <Grid item md={3}>
            <Sidebar className="App-sidebar">
            </Sidebar>
          </Grid>
          <Grid item md={9}>
            {(location.pathname === "/" && <Redirect from="/" to="/list" />)}
            <Route path="/list" render={ () => <Contacts/>} />
            <Route path="/help" component={Help} />
            <Route path="/addeditcontact" component={AddEditContact} />
            {/*<Route path="/help" component={Help} onRouteChange={dispatch(changeTitle("Help"))} />
            <Route path="/addeditcontact" component={AddEditContact} onRouteChange={dispatch(changeTitle("Add Contacts"))} />*/}
          </Grid>
        </Grid>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    filteredContacts: state.filteredContacts,
    title: state.title
  }
}

export default withRouter(connect(mapStateToProps)(App));
