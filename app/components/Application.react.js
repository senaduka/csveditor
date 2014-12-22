/** @jsx React.DOM */

var React = require('react');
var ChooseFile = require('./ChooseFile.react');
var SpreadSheet = require('./SpreadSheet.react');

var Application = React.createClass({

    render: function () {
        return (
            <div>
                <div className="menu">
                    <ChooseFile />
                </div>
                <div className="spreadsheet">
                    <SpreadSheet />
                </div>
            </div>
        );
    }

});

module.exports = Application;
