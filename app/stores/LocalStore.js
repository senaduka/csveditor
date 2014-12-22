/**
 * Created by senadu on 12/22/14.
 */

var CsvEditorDispatcher = require('../dispatcher/CsvEditorDispatcher');
var EventEmitter = require('events').EventEmitter;
var CsvEditorConstants = require('../constants/CsvEditorConstants');
var assign = require('object-assign');


var ActionTypes = CsvEditorConstants.ActionTypes;
var EventTypes =  CsvEditorConstants.EventTypes;


var LocalStore = assign({}, EventEmitter.prototype, {

    emitFileLoadedEvent: function() {
        this.emit(EventTypes.FILE_CHOSEN);
    },

    /**
     * @param {function} callback
     */
    addFileLoadedListener: function(callback) {
        this.on(EventTypes.FILE_CHOSEN, callback);
    },

    removeFileLoadedListener: function(callback) {
        this.removeListener(EventTypes.FILE_CHOSEN, callback);
    },


    getColumns: function() {
        return ["First", "Second", "Third"];
    },

    getDataForColumns: function() {
        return {
            "First": [1,2,3,4,5],
            "Second": [1.1,2.2,3.3,4.4,5.5],
            "Third": ["Hamo", "Suljo","Aha", "Maha", "Vaha"]
        }
    }

});


LocalStore.dispatchToken = CsvEditorDispatcher.register(function(payload) {
    var action = payload.action;

    switch(action.type) {
        case ActionTypes.FILE_CHOSEN:
            LocalStore.emitFileLoadedEvent();
            break;
        default:
            // do nothing
    }
});


module.exports = LocalStore;

