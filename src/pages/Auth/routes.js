import React from 'react';
import {BrowserRouter as Router , Route,  withRouter} from 'react-router-dom';
import Register from './register/index'
import Login from './login'


class Routes extends React.Component {

	render(){
		console.log("checking props: ", this.props);
		return (
			<Router>
				<Route  
					exact 
					path={"/register"} 
					component={Register}
				/>
				<Route  
					exact 
					path={"/login"} 
					component={Login}
				/>
			</Router>
		);
	}
}

export default withRouter(Routes);