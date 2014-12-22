/**
 * Created by senadu on 12/22/14.
 */

var CsvEditorDispatcher = require('../dispatcher/CsvEditorDispatcher');
var CsvEditorConstants = require('../constants/CsvEditorConstants');

var ActionTypes = CsvEditorConstants.ActionTypes;

module.exports = {
    chooseFile: function(fileInput) {
        CsvEditorDispatcher.handleViewAction({
            type: ActionTypes.CHOOSE_FILE,
            target: fileInput
        })
    }
};