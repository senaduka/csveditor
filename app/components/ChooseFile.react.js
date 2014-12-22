/** @jsx React.DOM */

var React = require('react');

var ChooseFile = React.createClass({

    getInitialState: function () {
        return {fileName: ""};
    },

    render: function () {
        if (this.state.fileName === "") {
            return (<input type="file" accept=".csv" onChange={this._onChange}/>);
        } else
            return (<div>Editing file.</div>);
    },

    _onChange: function(e) {
        this.setState({fileName: e.target.value})
    }
});

module.exports = ChooseFile;