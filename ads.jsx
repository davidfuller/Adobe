//@include "generic.jsx"
//@include "json2.jsx"
//@include "watchfolder.jsx"
//@include "json_Stuff.jsx"
app.exitAfterLaunchAndEval = true;
app.beginSuppressDialogs();

var mySettings = {
  watchFolder: "\\\\alpaca\\dropbox\\NEG\\ADS_PREVIEW_AE\\watchfolder\\",
  dataFolder: "\\\\alpaca\\dropbox\\NEG\\ADS_PREVIEW_AE\\data\\",
  doneFolder: "\\\\alpaca\\dropbox\\NEG\\ADS_PREVIEW_AE\\watchfolder\\done\\",
  mainCompsProjectFolder: "01_COMPS",
  subCompsProjectFolder: "02_SUB_COMPS",
  renderFolderMp4: "\\\\alpaca\\dropbox\\NEG\\ADS_PREVIEW_AE\\package\\",
  renderFolderWebApp: "\\\\alpaca\\dropbox\\NEG\\ADS_PREVIEW_AE\\WebApp\\",
  renderTemplateMp4: "H.264 5 Mbps No Audio",
  renderFolderProRes: "\\\\alpaca\\dropbox\\NEG\\ADS_PREVIEW_AE\\ProRes\\",
  renderTemplateProRes: "PRORES 4444 No Audio",
  textFolder: "\\\\alpaca\\dropbox\\NEG\\ADS_PREVIEW_AE\\package\\",
  renderFolderAvi: "\\\\alpaca\\dropbox\\NEG\\ADS_PREVIEW_AE\\package\\"
  }

var compMedia = [
  {
    name: "multibrand",
    renderMp4: "multibrand_preview",
    renderProRes: "multibrand_tx",
    filename: "multibrand.json",
    media: [
      {
        name: "promo",
        subComp: "multibrand_promo",
        projectFolder: ["03_ASSETS", "Promo", "multibrand"],
        folder: "C:\\Assets\\Content\\Images\\AUTO_DS\\multibrand\\"
      },
      {
        name: "channelLogoV1",
        subComp: "multibrand_channelLogoV1",
        projectFolder: ["03_ASSETS", "Logos", "multibrand"],
        folder: "C:\\Assets\\Content\\Images\\AUTO_DS\\logos\\multibrand\\"
      },
      {
        name: "channelLogoV2",
        subComp: "multibrand_channelLogoV2",
        projectFolder: ["03_ASSETS", "Logos", "multibrand"],
        folder: "C:\\Assets\\Content\\Images\\AUTO_DS\\logos\\multibrand\\"
      }
    ],
    text: [
      "title", "message", "message2"
    ]
  },
  {
    name: "viaplay",
    renderMp4: "viaplay_preview",
    renderProRes: "viaplay_tx",
    filename: "viaplay.json",
    media: [
      {
        name: "promo",
        subComp: "viaplay_promo",
        projectFolder: ["03_ASSETS", "Promo", "viaplay"],
        folder: "C:\\Assets\\Content\\Images\\AUTO_DS\\viaplay\\"
      }
    ],
    text: [ "titleL1", "titleL2", "message"]
  },
  {
    name: "viaplayDouble",
    renderMp4: "viaplayDouble_preview",
    renderProRes: "viaplayDouble_tx",
    filename: "viaplayDouble.json",
    media: [
      {
        name: "promo1",
        subComp: "viaplayDouble_promo1",
        projectFolder: ["03_ASSETS", "Promo", "viaplay"],
        folder: "C:\\Assets\\Content\\Images\\AUTO_DS\\viaplay\\"
      },
      {
        name: "promo2",
        subComp: "viaplayDouble_promo2",
        projectFolder: ["03_ASSETS", "Promo", "viaplay"],
        folder: "C:\\Assets\\Content\\Images\\AUTO_DS\\viaplay\\"
      }
    ],
    text: [ "title1L1", "title1L2","title2L1", "title2L2", "message"]
  },
  {
    name: "viaplayTriple",
    renderMp4: "viaplayTriple_preview",
    renderProRes: "viaplayTriple_tx",
    filename: "viaplayTriple.json",
    media: [
      {
        name: "promo1",
        subComp: "viaplayTriple_promo1",
        projectFolder: ["03_ASSETS", "Promo", "viaplay"],
        folder: "C:\\Assets\\Content\\Images\\AUTO_DS\\viaplay\\"
      },
      {
        name: "promo2",
        subComp: "viaplayTriple_promo2",
        projectFolder: ["03_ASSETS", "Promo", "viaplay"],
        folder: "C:\\Assets\\Content\\Images\\AUTO_DS\\viaplay\\"
      },
      {
        name: "promo3",
        subComp: "viaplayTriple_promo3",
        projectFolder: ["03_ASSETS", "Promo", "viaplay"],
        folder: "C:\\Assets\\Content\\Images\\AUTO_DS\\viaplay\\"
      }
    ],
    text: [ "title1L1", "title1L2", "title2L1", "title2L2", "title3L1", "title3L2", "message"]
  },
  { 
    name: "upsell",
    renderMp4: "upsell_preview",
    renderProRes: "upsell_tx",
    filename: "upsell.json",
    media: [],
    text: [ "titleL1", "titleL2", "streamInfo"]
  },
  {
    name: "multibrandSport",
    renderMp4: "multibrandSport_preview",
    renderProRes: "multibrandSport_tx",
    filename: "multibrandSport.json",
    media: [
      {
        name: "promo",
        subComp: "multibrandSport_promo",
        projectFolder: ["03_ASSETS", "Promo", "multibrand"],
        folder: "C:\\Assets\\Content\\Images\\AUTO_DS\\multibrand\\"
      },
      {
        name: "channelLogo",
        subComp: "multibrandSport_channelLogo",
        projectFolder: ["03_ASSETS", "Logos", "multibrand_sport"],
        folder: "C:\\Assets\\Content\\Images\\AUTO_DS\\logos\\multibrand_sport\\"
      }
    ],
    text: [ "title", "match", "message", "streamingMessage"]
  },
  {
    name: "multibrandSportDouble",
    renderMp4: "multibrandSportDouble_preview",
    renderProRes: "multibrandSportDouble_tx",
    filename: "multibrandSportDouble.json",
    media: [
      {
        name: "promo",
        subComp: "multibrandSportDouble_promo",
        projectFolder: ["03_ASSETS", "Promo", "multibrand"],
        folder: "C:\\Assets\\Content\\Images\\AUTO_DS\\multibrand\\"
      },
      {
        name: "channelLogo1",
        subComp: "multibrandSportDouble_channelLogo1",
        projectFolder: ["03_ASSETS", "Logos", "multibrand_sport"],
        folder: "C:\\Assets\\Content\\Images\\AUTO_DS\\logos\\multibrand_sport\\"
      },
      {
        name: "channelLogo2",
        subComp: "multibrandSportDouble_channelLogo2",
        projectFolder: ["03_ASSETS", "Logos", "multibrand_sport"],
        folder: "C:\\Assets\\Content\\Images\\AUTO_DS\\logos\\multibrand_sport\\"
      }
    ],
    text: [ "title", "match1", "message1", "match2", "message2", "streamingMessage"]
  },
  {
    name: "multibrandSportViaplay",
    renderMp4: "multibrandSportViaplay_preview",
    renderProRes: "multibrandSportViaplay_tx",
    filename: "multibrandSportViaplay.json",
    media: [
      {
        name: "promo",
        subComp: "multibrandSportViaplay_promo",
        projectFolder: ["03_ASSETS", "Promo", "multibrand"],
        folder: "C:\\Assets\\Content\\Images\\AUTO_DS\\multibrand\\"
      }
    ],
    text: [ "title", "match", "message", "streamingMessage"]
  },
  {
    name: "multibrandSportDoubleViaplay",
    renderMp4: "multibrandSportDoubleViaplay_preview",
    renderProRes: "multibrandSportDoubleViaplay_tx",
    filename: "multibrandSportDoubleViaplay.json",
    media: [
      {
        name: "promo",
        subComp: "multibrandSportDoubleViaplay_promo",
        projectFolder: ["03_ASSETS", "Promo", "multibrand"],
        folder: "C:\\Assets\\Content\\Images\\AUTO_DS\\multibrand\\"
      },
      {
        name: "channelLogo",
        subComp: "multibrandSportDoubleViaplay_channelLogo",
        projectFolder: ["03_ASSETS", "Logos", "multibrand_sport"],
        folder: "C:\\Assets\\Content\\Images\\AUTO_DS\\logos\\multibrand_sport\\"
      }
    ],
    text: [ "title", "match1", "message1", "match2", "message2", "streamingMessage"]
  },
  {
    name: "lower3rd",
    renderMp4: "lower3rd_preview",
    renderProRes: "lower3rd_tx",
    filename: "lower3rd.json",
    media: [
      {
        name: "promo",
        subComp: "lower3rd_promo",
        projectFolder: ["03_ASSETS", "Promo", "lower3rd"],
        folder: "C:\\Assets\\Content\\Images\\AUTO_DS\\lower_3rd\\"
      }
    ],
    text: [ "titleL1", "titleL2", "message"]
  },
  {
    name: "ots",
    renderMp4: "ots_preview",
    renderProRes: "ots_tx",
    filename: "ots.json",
    media: [
      {
        name: "promo",
        subComp: "ots_promo",
        projectFolder: ["03_ASSETS", "Promo", "ots"],
        folder: "C:\\Assets\\Content\\Images\\AUTO_DS\\ots\\"
      }
    ],
    text: ["message"]
  },
  {
    name: "viaplayYellow",
    renderMp4: "viaplayYellow_preview",
    renderProRes: "viaplayYellow_tx",
    filename: "viaplayYellow.json",
    media: [
      {
        name: "promo",
        subComp: "viaplayYellow_promo",
        projectFolder: ["03_ASSETS", "Promo", "viaplay"],
        folder: "C:\\Assets\\Content\\Images\\AUTO_DS\\viaplay\\"
      }
    ],
    text: [ "titleL1", "titleL2", "message"]
  }
]
$.writeln ("Hello");
var toProcess;

var myProjectFilename = "C:\\AE Projects\\VIAPLAY_ADS\\VIAPLAY_ADS.aep"

var myProject = app.project
if (myProject.file == null){
  writeLog("No project open. Opening: " + myProjectFilename);
  app.open(File(myProjectFilename));
} else {
  if(myProject.file.fsName == myProjectFilename){
    writeLog("Correct project is open");
  } else {
    writeLog("Incorrect project is open. Closing: " + myProject.file.name + " and opening: " + myProjectFilename);
    myProject.close(CloseOptions.PROMPT_TO_SAVE_CHANGES);
    app.open(File(myProjectFilename));
  } 
}


var myWindow = new Window("palette","Automated Dynamic Specials")
myWindow.orientation = "column";


var theData;
var theMainComps;
var theFilteredComps;

var group0 = myWindow.add("group", undefined);
var group1 = myWindow.add("group", undefined);
var group2 = myWindow.add("group", undefined);
var group3 = myWindow.add("group", undefined);
var group4 = myWindow.add("group", undefined);
var group5 = myWindow.add("group", undefined);

var doButton = group0.add("button", undefined, "Read Data File");
var dataFileName = group0.add("statictext", [0, 0, 200, 12], "The data file name will appear here");

var grp = group1.add("group");
grp.orientation = "row";
grp.alignment = "left"
  
var label = grp.add("statictext", [0, 0, 60, 12], "Comp");
var compText = grp.add("statictext", [0, 0, 250, 12], "The comp will appear here");

var mediaButton = group1.add("button", undefined, "Check media");
var mediaList = group3.add("listbox", [0, 0, 400, 200],[],{numberOfColumns: 3, showHeaders: true, columnTitles: ['Item', 'Filename', "Available"]});

var renderButtonMp4 = group2.add("button", undefined, "Render mp4");
var renderButtonProRes = group2.add("button", undefined, "Render ProRes");
var renderButtonWebApp = group2.add("button", undefined, "Render for Web App");
var renderButtonText = group2.add("button", undefined, "Write Text");
var renderStatus = group4.add("listbox", [0, 0, 600, 200], [], {numberOfColumns: 1, showHeaders: true, columnTitles: ["Render Status"]});
var isMediaGood;
var sportsIPP;
var theLog = []

var closeButton = group5.add("button", undefined, "Close");


doButton.onClick = readTheData;

mediaButton.onClick = function(){
  isMediaGood = checkMedia().valid;
  $.writeln (isMediaGood);
}

renderButtonMp4.onClick = renderForMp4;
renderButtonWebApp.onClick = renderForWebApp;
renderButtonProRes.onClick = renderForProRes;
renderButtonText.onClick = writePackageText;

closeButton.onClick = function(){
  myWindow.close()
}

readTheData();

var autoRender = true;
if (isMediaGood && autoRender){
  if (!sportsIPP){
    writeLog("About to render special preview");
    renderForWebApp();
  } else {
    writeLog("About to render Sports IPP. Web App mov");
    renderForWebApp();
    writeLog("About to render Sports IPP. Mp4");
    renderForMp4();
    theLog = []
    theLog.push({time: new Date, message: "About to render Sports IPP. ProRes"})
    writeJsonLog(theLog);
    renderForProRes();
    theLog = []
    theLog.push({time: new Date, message: "About to write Sports IPP Package text"})
    writeJsonLog(theLog);
    writePackageText();
    theLog = []
    theLog.push({time: new Date, message: "Finished writing Sports IPP Package text"})
    writeJsonLog(theLog);
  }
}
app.endSuppressDialogs(false);
myWindow.show();

function findDataFileAsFootageItem(dataFileName){
  return findFootageItem(dataFileName);
}

function findComp(name){
  if (theFilteredComps.length > 0){
    for (i = 0; i < theFilteredComps.length; i++){
      if (theFilteredComps[i].name == name){
        return theFilteredComps[i];
      }
    }
  }
  return null;
}

function findFootageItem(itemName, testFolder){
  var testItems;
  if (testFolder == null){
    testItems = app.project.items;
  } else {
    testItems = testFolder.items;
  }
  
  $.writeln(itemName);

  for (var i = 1; i <= testItems.length; i++){
    var testItem = testItems[i];
    if (testItem != null && testItem instanceof FootageItem){
      if (testItem.file != null && testItem.file.name == itemName){
        return testItem;
      }
    }
  }
  return null
}

function readData(filename){
  var theFile = new File(filename);
  theFile.open("r");
  var theDataString = theFile.read();
  theFile.close();
  return JSON.parse(theDataString);
}

function findMainCompsProjectFolder(){
  return findProjectFolder(mySettings.mainCompsProjectFolder)
}

function findSubCompsProjectFolder(){
  return findProjectFolder(mySettings.subCompsProjectFolder)
}

function findProjectFolder(folderName){
  var projectItems = app.project.items;

  for (var i = 1; i <= projectItems.length; i++){
    var testItem = projectItems[i];
    if (testItem != null && testItem instanceof FolderItem){
      if (testItem.name != null && testItem.name == folderName){
        return testItem;
      }
    }
  }
  return null
}

function mainComps(){
  var mainCompFolder = findMainCompsProjectFolder();
  var theComps = [];
  for (var i = 1; i <= mainCompFolder.numItems; i++){
    var testItem = mainCompFolder.item(i);
    if (testItem instanceof CompItem){
      theComps.push(testItem);
    }
  }
  return theComps;
}

function compsInData(){
  var filteredComps = [];
  for (var special in theData.specials){
    if(theData.specials.hasOwnProperty(special)){
      $.writeln(special + ' -> ' + theData.specials[special]['titleL1'])
    }
    for (var i = 0; i < theMainComps.length; i++){
      if (theMainComps[i].name == special){
        filteredComps.push(theMainComps[i]);
      }
    }
  }
  return filteredComps;
}

function mediaDetailsForComp(compName){
  for (var i = 0; i < compMedia.length; i++){
    if (compMedia[i].name == compName){
      return compMedia[i];
    }
  }
  return null;
}

function getMediaSubComp(compName){
  var subCompFolder = findSubCompsProjectFolder();
  for (var i = 1; i <= subCompFolder.numItems; i++){
    var testItem = subCompFolder.item(i);
    if (testItem instanceof CompItem){
      if (testItem.name == compName){
        return testItem;
      }
    }
  }
  return null;
}

function isMediaInSubComp(subLayers, mediaName){
  for (var j = 1; j <= subLayers.length; j++){
    var thisLayer = subLayers[j]
    if (thisLayer instanceof AVLayer){
      var sourceItem = thisLayer.source
      if (sourceItem instanceof FootageItem){
        if (sourceItem.file.name == mediaName){
          return true
        }
      }
    }
  }
  return false
}

function findFileInLocalFolder(mediaFolderName, mediaFileName){

  var mediaFolder = new Folder(mediaFolderName);
  var mediaFiles = mediaFolder.getFiles('*.tga');

  for (var i = 0; i < mediaFiles.length; i++){
    if (mediaFiles[i].name == mediaFileName){
      return mediaFiles[i];
    }
  }
  return null;

}

function dealwithMissingMedia(mediaName, subComp, projectFolder, localFolderName){
// we get here if the relevant media is not in the relevant sub comp
  var testFootageItem;
// First does the footage exist in the project folder.
  var testProjectFolder = findNestedProjectFolder(projectFolder);
  if (testProjectFolder != null){
    testFootageItem = findFootageItem(mediaName, testProjectFolder);
    if (testFootageItem == null){
      // Not found so lets see if it's in the local file system
      var localFile = findFileInLocalFolder(localFolderName, mediaName)
      if (localFile == null){
        return {message: "Missing and local file not found", missingMedia: true};
      } else {
        //import as footageItem
        //move footageItem into Project folder
        if (localFile instanceof File){
          var newFootageItem = app.project.importFile(new ImportOptions(localFile));
          newFootageItem.parentFolder = testProjectFolder;
          if (addFootageItemToComp(newFootageItem, subComp)){
            return {message: "Found after adding local file to footage and comp", missingMedia: false};
          } else {
            return {message: "Missing. Local file added to project. Issue with sub comp", missingMedia: true};
          }
        } else {
          return {message: "Missing. Local file found but incorrect format", missingMedia: true};
        }
      }
    } else {
      if (addFootageItemToComp(testFootageItem, subComp)){
        return {message: "Found after finding footage in project and adding to comp", missingMedia: false};
      } else {
        return {message: "Missing. Footage file found in project, but unable to add to comp.", missingMedia: true};
      }
    }
  } else {
    return {message: "Missing. Unable to find folder in project. " + projectFolder.join('/'), missingMedia: true};
  }
}

function addFootageItemToComp(footageItem, comp){
  var newLayer = comp.layers.add(footageItem);
  newLayer.moveToEnd();

  return copyExpressionFromTopLayer(comp, newLayer);
}

function copyExpressionFromTopLayer(comp, newLayer){
  var topLayer = comp.layer(1);
  var layerOpacity = topLayer.transform.opacity;
  if (layerOpacity.expressionEnabled){
    var topLayerExpression = layerOpacity.expression;
    var newLayerOpacity = newLayer.transform.opacity;
    if (newLayerOpacity.canSetExpression){
      newLayerOpacity.expressionEnabled = true;
      newLayerOpacity.expression = topLayerExpression;
      return true
    };
  }
  return false;
}



function findAllProjectFolders(folderName){
  var projectItems = app.project.items;
  var allTheFolders = [];
  for (var i = 1; i <= projectItems.length; i++){
    var testItem = projectItems[i];
    if (testItem != null && testItem instanceof FolderItem){
      if (testItem.name != null && testItem.name == folderName){
        allTheFolders.push(testItem);
      }
    }
  }
  return allTheFolders;
}

function findNestedProjectFolder(projectFolderArray){
  var lastElement = projectFolderArray[projectFolderArray.length -1];
  var testFolders = findAllProjectFolders(lastElement);
  if (testFolders.length > 0){
    // loop through each of the reults
    for (var i = 0; i < testFolders.length; i++){
      var testFolder = testFolders[i];
      var testParent = testFolder.parentFolder;
      // loop through the array of parent folders
      for (var element = projectFolderArray.length - 2; element >= 0 ; element--){
        if (testParent.name == projectFolderArray[element]){
          // if parent matches do the next parent, if not break loop
          testParent = testParent.parentFolder;
          if (testParent.name == 'Root' || element == 0){
            // if next parent is root then full match and return
            return testFolder;
          }
        } else {
          break;
        }
      }
    }
  }
  return null;     
}

function fillCompText(jsonFile){
  var dataItem = findDataFileAsFootageItem(jsonFile.name)
  if (dataItem != null){
    dataFileName.text = dataItem.name;
    theData = readData(dataItem.file.fsName);
    theMainComps = mainComps();
    theFilteredComps = compsInData();
    for (var i = 0; i < theFilteredComps.length; i++){
      compText.text = theFilteredComps[i].name;
    }
  }
}

function checkMedia(){
  var mediaGood = true;
  var details = mediaDetailsForComp(compText.text);
  var resultDetails = [];
  if (details != null){
    mediaList.removeAll();
    for (var i = 0; i < details.media.length; i++){
      var tempItem = mediaList.add("item", details.media[i].name)
      var mediaName = theData.specials[details.name][details.media[i].name];
      tempItem.subItems[0].text = mediaName;
      if (mediaName == ""){
        tempItem.subItems[1].text = "N/A"
        resultDetails.push({item: details.media[i].name, mediaName: mediaName, status: "N/A" })
      } else {
        var theSubComp = getMediaSubComp(details.media[i].subComp);
        if (theSubComp != null){
          var subLayers = theSubComp.layers;
          if (isMediaInSubComp(subLayers, mediaName)){
            tempItem.subItems[1].text = "Found";
            resultDetails.push({item: details.media[i].name, mediaName: mediaName, status: "Found" })
          } else {
            var result = dealwithMissingMedia(mediaName, theSubComp, details.media[i].projectFolder, details.media[i].folder);
            tempItem.subItems[1].text = result.message;
            mediaGood = !result.missingMedia;
            resultDetails.push({item: details.media[i].name, mediaName: mediaName, status: result.message })
          }
        } else {
          tempItem.subItems[1].text = "Ooops";
          mediaGood = false;
          resultDetails.push({item: details.media[i].name, mediaName: mediaName, status: "Ooops" })
        }
      } 
    }
    mediaList.add("item", "");
  } else {
    mediaGood = false;
  }
  return {valid: mediaGood, details: resultDetails};
}

function isSportsIpp(){
  var details = mediaDetailsForComp(compText.text);
  if (details != null){
    return theData.specials[details.name]["sportsIpp"] == "true";
  } else {
    false;
  }
}

function renderSpecial(){
  if (isMediaGood){
    renderStatus.add("item", "Rendering comp: " + compText.text);
    var selectedComp = findComp(compText.text)
    if (selectedComp != null){
      var renderItem = app.project.renderQueue.items.add(selectedComp);
      var outputModule = renderItem.outputModule(1);
      var targetRenderFile = File(mySettings.renderFolder + "/" + theData.specials[selectedComp.name].renderFilename);
      outputModule.file = targetRenderFile;
      outputModule.applyTemplate(mySettings.renderTemplate);
      var renderFile = outputModule.file;
      if (renderFile.exists){
        renderFile.remove();
      }
      app.project.renderQueue.render();
      if (targetRenderFile.exists){
        targetRenderFile.remove();
      }
      renderFile.rename(targetRenderFile.name)
    }
  }
}

function renderFromCompMediaMp4(compMedia){
  genericRender(compMedia.renderMp4, theData.specials[compMedia.name].aePackageFolder, theData.specials[compMedia.name].aeMp4Filename, mySettings.renderTemplateMp4)
}

function renderFromCompMediaWebApp(compMedia){
  genericRender(compMedia.renderMp4, theData.specials[compMedia.name].aeRenderFolder, theData.specials[compMedia.name].renderFilename, mySettings.renderTemplateMp4)
}

function renderFromCompMediaProRes(compMedia){
  genericRender(compMedia.renderProRes, theData.specials[compMedia.name].aeProResFolder, theData.specials[compMedia.name].aeProResFilename, mySettings.renderTemplateProRes)
}


function genericRender(renderCompName, renderFolder, renderFilename, renderTemplate){
  theLog = []
  renderStatus.add("item", "Rendering comp: " + renderCompName);
  theLog.push({time: new Date, message: "Rendering comp: " + renderCompName});
  var selectedComp = findRenderComp(renderCompName)
  if (selectedComp != null){
    var renderItem = app.project.renderQueue.items.add(selectedComp);
    var outputModule = renderItem.outputModule(1);
    var targetRenderFile = File(renderFolder + renderFilename);
    outputModule.file = targetRenderFile;
    outputModule.applyTemplate(renderTemplate);
    var renderFile = outputModule.file;
    theLog.push({time: new Date, message: "Rendering file: " + renderFile.name});
    if (renderFile.exists){
      renderFile.remove();
    }
    writeJsonLog(theLog);
    app.project.renderQueue.render();

    if (targetRenderFile.name != renderFile.name){
      if (targetRenderFile.exists){
        targetRenderFile.remove();
      }
      renderFile.rename(targetRenderFile.name)
    }
    theLog = []
    theLog.push({time: new Date, message: "Comp rendered as: " + targetRenderFile.name});
    renderStatus.add("item", "Comp rendered as: " + targetRenderFile.name);
    writeJsonLog(theLog);
  }
}

function writeTextFile(compMedia){
  var textFile = File(theData.specials[compMedia.name].aePackageFolder + theData.specials[compMedia.name].textFilename);
  var myData = theData.specials[compMedia.name]
  textFile.open('w');
  writeUnderline(textFile, myData.name,"=");
  textFile.writeln("");
  writeUnderline(textFile, 'Details',"=");

  var theText = compMedia.text;

  for (i = 0; i < theText.length; i++){
    if (theText[i] != undefined){
      var myText = myData[theText[i]]
      if (myText != undefined && myText != ""){
        textFile.writeln(myText);  
      }
    }
  }
  textFile.writeln("");
  writeUnderline(textFile, 'Filenames',"=");
  textFile.writeln("Preview:   " + myData.aeMp4Filename);
  textFile.writeln("Xpression: " + myData.aeAviFilename);
  textFile.close();
}

function writeUnderline(textFile, text, underlineChar){
  textFile.writeln(text);
  textFile.writeln(Array(text.length+1).join(underlineChar));
}

/**
 * 
 * @param {string} name 
 * @returns {CompItem}
 */
function findRenderComp(name){
  if (theMainComps.length > 0){
    for (i = 0; i < theMainComps.length; i++){
      if (theMainComps[i].name == name){
        return theMainComps[i];
      }
    }
  }
  return null;
}

function renderForWebApp(){
  if (toProcess.valid){
    var tempComp = findRenderComp(toProcess.selectedCompMedia.renderMp4);
    tempComp.openInViewer();
    renderFromCompMediaWebApp(toProcess.selectedCompMedia);
  }
}

function renderForMp4(){
  if (toProcess.valid){
    var tempComp = findRenderComp(toProcess.selectedCompMedia.renderMp4);
    tempComp.openInViewer();
    renderFromCompMediaMp4(toProcess.selectedCompMedia);
  }
}

function renderForProRes(){
  if (toProcess.valid){
    var tempComp = findRenderComp(toProcess.selectedCompMedia.renderProRes);
    tempComp.openInViewer();
    removeAviFile();
    renderFromCompMediaProRes(toProcess.selectedCompMedia);
  }
}

function removeAviFile(){
  if (toProcess.valid){
    var aeAviFile = File(mySettings.renderFolderAvi + theData.specials[toProcess.selectedCompMedia.name].aeAviFilename);
    writeLog("Checkin avi file: " + aeAviFile.name);
    if (aeAviFile.exists){
      writeLog("File exists attempting to delete: " + aeAviFile.name);
      if (aeAviFile.remove()){
        writeLog("AVI file deleted: " + aeAviFile.name);
      } else {
        writeLog("AVI file NOT deleted: " + aeAviFile.name);
      }
    } else {
      writeLog("File does not exist: " + aeAviFile.name);
    }
  }
}


function writePackageText(){
  if (toProcess.valid){
    var tempComp = findRenderComp(toProcess.selectedCompMedia.renderMp4);
    tempComp.openInViewer();
    writeTextFile(toProcess.selectedCompMedia);
  }
}

/**
 * 
 * @param {string} message 
 */
function writeLog(message){
  theLog = [];
  theLog.push({time: new Date, message: message});
  writeJsonLog(theLog);
}

function readTheData(){
  toProcess = listWatchfolder();
  if (toProcess.valid){
    theLog = [];
    dataFileName.text = "No file to process";
    theLog.push({time: new Date, message: "File found: " + toProcess.jsonFile.fsName});
    fillCompText(toProcess.jsonFile);
    var tempComp = findRenderComp(toProcess.selectedCompMedia.renderMp4);
    tempComp.openInViewer();
    theLog.push({time: new Date, message: "Render comp: " + tempComp.name});
    var myMedia = checkMedia();
    isMediaGood = myMedia.valid;
    theLog.push({time: new Date, message: "Media status: " + myMedia.valid});
    for (var i = 0; i < myMedia.details.length; i++){
      theLog.push({time: new Date, message: "Media: " + myMedia.details[i].item + " | " + myMedia.details[i].mediaName + " | Status: " + myMedia.details[i].status});
    }
    sportsIPP = isSportsIpp();
    writeJsonLog(theLog);
  } else {
    dataFileName.text = "No file to process";
    compText.text = "";
    theLog.push({time: new Date, message: "No file to process"})
    writeJsonLog(theLog);
  }
}