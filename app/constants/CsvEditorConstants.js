var keyMirror = require('keymirror');

module.exports = {

  ActionTypes: keyMirror({    
    CHOOSE_FILE: null
  }),

  PayloadSources: keyMirror({
    BACKEND_ACTION: null,
    VIEW_ACTION: null
  }),

  EventTypes: keyMirror({
    FILE_CHOSEN: null
  })

};
