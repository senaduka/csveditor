/** @jsx React.DOM */

var React = require('react');
var LocalStore = require('../stores/LocalStore');


var getStateFromStore = function () {
    return {
        columns: LocalStore.getColumns(),
        data: LocalStore.getDataForColumns()
    }
};


var SpreadSheet = React.createClass({

    getInitialState: function() {
        return getStateFromStore();
    },

    render: function () {

        var columns = this.state.columns.map(function (column) {
           return(<th>{column}</th>);
        });


        return (
            <table className="spreadsheet">
                <tr>
		            {columns}
                </tr>
            </table>
        );
    }

});

module.exports = SpreadSheet;
