import App from '.././App.js';
import { connect } from 'react-redux';
import { changeTitle, toggleSidebar } from '../actions.js';


function mapDispatchToProps (dispatch) {
  return {
    onRouteChange: siteTitle => {
      if (siteTitle != title){
        dispatch(changeTitle(siteTitle))
      }
    },
    onSidebarToggle: () => {
      dispatch(toggleSidebar())
    }
  }
}

function mapStateToProps(state) {
  return {
    sidebarStatus: state.sidebarStatus,
    title: state.title
  }
}

export const Router = connect(
  mapDispatchToProps,
	mapStateToProps)(App)