/** @jsx React.DOM */
var React = require('react');
var ChooseFile = require('./ChooseFile.react');

var SpreadSheet = React.createClass({

	render: function() {
		return (
		<div className="spreadsheet">
		<ChooseFile />
		</div>
		);
	}

});

module.exports = SpreadSheet;
