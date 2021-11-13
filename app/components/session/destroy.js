var React = require('react');
var firebase = require('firebase');
var hashHistory = require('react-router').hashHistory;

var Logout = React.createClass({

	//sign out from firebase, reroute to login page
	

	render: function(){
		return <p>Logged out</p>;
	}
});

module.exports = Logout;