
function listWatchfolder(){

  var watchFolder = new Folder(mySettings.watchFolder);
  var dataFolder = new Folder(mySettings.dataFolder)
  var myFiles = watchFolder.getFiles()
  for (var i = 0; i < myFiles.length; i++){
    for (var j = 0; j < compMedia.length; j++){
      if (compMedia[j].filename == myFiles[i].name){
        var result = createFolderIfNeeded(dataFolder);
        if (result){
          if (myFiles[i] instanceof File){
            var myFile = new File(myFiles[i].fullName)
            if(myFile.copy(mySettings.dataFolder + myFiles[i].name)){
              var currentTime = new Date();
              var timeStamp = String(currentTime.getFullYear()) + padStart(String(currentTime.getMonth() +1 ),2,"0") + padStart(String(currentTime.getDate()),2,"0") + "_"
                                + padStart(currentTime.getHours().toString(), 2 ,"0") + padStart(currentTime.getMinutes().toString(), 2 ,"0") + padStart(currentTime.getSeconds().toString(), 2 ,"0");
              $.writeln(timeStamp);
              var fileParts = splitFilename(myFiles[i].name);
              $.writeln(fileParts.baseName);
              $.writeln(fileParts.extension);
              var backupName = fileParts.baseName + "_" + timeStamp + fileParts.extension;
              if (myFile.copy(mySettings.doneFolder + backupName)){
                myFiles[i].remove();
              }
              return {valid: true, jsonFile: myFile, selectedCompMedia: compMedia[j]}
            }
          }
        }
      }
    }
  }
  return {valid: false};
}

/**
 * @param {Folder} theFolder 
 */
function createFolderIfNeeded(theFolder){
  if (theFolder instanceof Folder){
    if (!theFolder.exists){
      return theFolder.create()
    } else {
      return true
    }
  }
}

function padStart(text, numberChars, theChar){
  var myString = text;

  while (myString.length < numberChars){
    myString = theChar + myString;
  }

  return myString;
}

function splitFilename(filename){
  var finalDot = filename.lastIndexOf(".");
  var baseName;
  var extension;
  if (finalDot > -1){
    baseName = filename.substr(0, finalDot);
    extension = filename.substr(finalDot)
  }  else {
    baseName = filename;
    extension = "";
  }

  return {baseName: baseName, extension: extension}
}