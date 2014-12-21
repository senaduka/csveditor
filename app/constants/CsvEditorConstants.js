var keyMirror = require('keymirror');

module.exports = {

  ActionTypes: keyMirror({    
    CREATE_MESSAGE: null
  }),

  PayloadSources: keyMirror({
    BACKEND_ACTION: null,
    VIEW_ACTION: null
  })

};
