import React, {Component} from 'react'
import { Router, Route, hashHistory, Redirect } from 'react-router';
import WidgetsContainer from 'containers/WidgetsContainer'
import SettingsContainer from 'containers/SettingsContainer'

class Root extends Component {
	render() {
		return(
			<Router history={hashHistory}>
				<Redirect from="/" to="Home" />
				<Route name="Home" path="/home" component={WidgetsContainer} />
				<Route name="Settings" path="/settings" component={SettingsContainer} />
    	</Router>
		);
	}
}

export default Root;
