//@include "globals.jsx"
function saveSettingsJson(settingsObject, profileName){
  if (createFolderIfNeeded(Folder(settingsFolder))){
    var myJsonFile = new File(settingsFolder + profileName);
    if (myJsonFile.open("w")){
      var theJson = JSON.stringify(settingsObject, null, 2)
      if (myJsonFile.write(theJson)){
          if(myJsonFile.close()){
            return true
          } else {
            return false
          }
        } else {
          return false
        }
      } else {
        return false
      }
    }
  }
  /**
   * @typedef {object} profile 
   * @property {string} composition
   * @property {string} endBoardComp
   * @property {Array} textLayers
   * @property {Array} hexColours
   * @property {Array} renderTemplates
   * @property {string} clipLayer
   * @property {string} backgroundLayer
   * @property {string} logoLayer
   * @property {string} posterFrame
   * @property {string} audioFile
   * /
  
   /**
   * @param {string} profileName 
   * @returns {profile}
   */
  function loadProfileJson(profileName){
    var myJsonFile = new File(settingsFolder + profileName);
    if (myJsonFile.open("r")){
      var settingsStringJson = myJsonFile.read(); 
      /**
       * @type {profile}
       */
      var myJSON;
      myJSON = JSON.parse(settingsStringJson)
      return myJSON
    }
  }
  /**
   * @param {string} profileName 
   */
  function loadSettingsJson(profileName){
    var myJsonFile = new File(settingsFolder + profileName);
    if (myJsonFile.open("r")){
      var settingsStringJson = myJsonFile.read(); 
      var myJSON = {}
      myJSON = JSON.parse(settingsStringJson)
      return myJSON
    } else {
      return defaultSettings;
    }
  }
  function writeJsonLog(logObject){
    if (createFolderIfNeeded(Folder(logFolder))){
      var now = new Date
      var logFilenameWithDate = formatDate(now,logFilename);
      var myJsonFile = new File(logFolder + logFilenameWithDate);
      var logJson = []
      if (myJsonFile.exists){
        var existingJson = readLog();
        if (existingJson){
          logJson = existingJson.concat(logObject);
        } else {
          logJson = logObject;  
        }
      } else {
        logJson = logObject;
      }
      if (myJsonFile.open("w")){
        var theJson = JSON.stringify(logJson, null, 2)
        if (myJsonFile.write(theJson)){
          if(myJsonFile.close()){
            return true
          } else {
            return false
          }
        } else {
          return false
        }
      } else {
        return false
      }
    }
  }

  /**
   * 
   * @param {Date} theDate 
   * @param {string} theString 
   * @returns {string}
   */
  function formatDate(theDate, theString){
    var yearString = theDate.getFullYear().toString();
    theString = theString.replace("YYYY", yearString);
    var month = theDate.getMonth() + 1 ;
    var monthString;
    if (month < 10){
      monthString = "0" + month.toString();
    } else {
      monthString = month.toString();
    }
    theString = theString.replace("MM",monthString);
    var day = theDate.getDate();
    var dayString;
    if (day < 10){
      dayString = "0" + day.toString();
    } else {
      dayString = day.toString();
    }
    return theString.replace("DD", dayString);
  }

  /**
   * 
   * @returns {object}
   */
  function readLog(){
    if (createFolderIfNeeded(Folder(logFolder))){
      var now = new Date
      var logFilenameWithDate = formatDate(now,logFilename);
      var myJsonFile = new File(logFolder + logFilenameWithDate);
      if (myJsonFile.open("r")){
        var logStringJson = myJsonFile.read(); 
        var myJSON = {}
        myJSON = JSON.parse(logStringJson)
        myJsonFile.close()
        return myJSON
      } else {
        return null;
      }
    }  
  }
  