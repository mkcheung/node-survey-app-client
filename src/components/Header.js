import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';

class Header extends Component {

	renderContent(){
		switch(this.props.auth){
			case null:
				return null; // null so we only display something when we know there is a result
				// return 'Still deciding';
			case false:
				return (
					<li><a href="/auth/google">Login With Google</a></li>
				);
			default:
				return [
					<li key="1"><Payments /></li>,
					<li key="2" style={{ margin:'0 10px' }}>
						Credits: {this.props.auth.credits}
					</li>,
					<li key="3"><a href="/api/logout">Logout</a></li>
				]
		}
	}

	render() {
		return (
			<nav>
				<div className="nav-wrapper">
					<Link
					 to={ this.props.auth ? '/surveys' : '/' }
					 className="left brand-logo"
					>
						Emaily
					</Link>
					<ul className="right">
						{this.renderContent()}
					</ul>
				</div>
			</nav>
		);
	}
}

function mapStateToProps({ auth }){ // look at index.js for reducers to determine what state component terms to access
	return { auth }
}

export default connect(mapStateToProps)(Header);