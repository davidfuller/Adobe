function createCompSettingsWindow(theComps){
  var numTextDropDowns = 3;
  var numRenderTemplates = 2;
  var myWindow = new Window("dialog","Comp and Field Settings")
  myWindow.orientation = "column";
  var renderLabels = ["Still", "Movie"];
  var selectCompIndex = null;
   
  var rowOne = myWindow.add("group")
  rowOne.add("statictext", undefined, "Composition")
  rowOne.alignment = "left"
  
  var rowTwo = myWindow.add("group")
  rowTwo.alignment = "left"
  var compDropdown = rowTwo.add("dropdownlist", undefined,[])
  for (var i = 0; i < theComps.length; i++){
    compDropdown.add("item", theComps[i].name)
  }
  var setActive = rowTwo.add("button", undefined, "Select Active Comp")
  
  var rowThree = myWindow.add("group")
  rowThree.alignment = "left"
  rowThree.orientation = "column"
  var textLabel = rowThree.add("statictext", undefined, "Text Layers")
  textLabel.alignment = "left"
  
  var myTextDropDown = []
  var myTextColour = []
  var validColour = []
  var textFromLayer = []
  var grp = []
  var myLabel = []
  var myRenderDropDown = [];
  var myRenderLabel = [];

  var loopValue = numTextDropDowns;
  if (numRenderTemplates > numTextDropDowns){
    loopValue = numRenderTemplates;
  }

  for (var i = 0; i < loopValue; i++){
    grp[i] = rowThree.add("group")
    grp[i].orientation = "row"
    grp[i].alignment = "left"

    if (i < numTextDropDowns){
      myLabel[i] = grp[i].add("statictext", undefined, myFields[i]);
      myLabel[i].size = [60,10];
  
      myTextDropDown[i] = grp[i].add("dropdownlist",undefined,[])
      myTextDropDown[i].add("item", "Text Layers will appear here")
      myTextDropDown[i].selection = 0
      myTextDropDown[i].size = [280,-1]

      myTextColour[i] = grp[i].add("edittext", undefined, "Hex Colour");
      myTextColour[i].size = [100, 16]
            
      validColour[i] = grp[i].add("statictext", undefined, "N");
      validColour[i].size = [10, 16]

      textFromLayer[i] = grp[i].add("statictext",undefined,"")
      textFromLayer[i].size = [280, 10]
    }
    if (i < numRenderTemplates){
      myRenderLabel[i] = grp[i].add("statictext", undefined, renderLabels[i]);
      myRenderLabel[i].size = [60,10];

      myRenderDropDown[i] = grp[i].add("dropdownlist", undefined, []);
      myRenderDropDown[i].add("item", "Render templates will appear here");
      myRenderDropDown[i].selection = 0
      myRenderDropDown[i].size = [280, -1]
    }

    
  }
  
  setActive.onClick = function(){
    if (app.project.activeItem != null){
      compDropdown.selection = compDropdown.find(app.project.activeItem.name)
    }
  }
  
  compDropdown.onChange = function(){
    selectCompIndex = selectedComp(compDropdown)
    var myTextLayers = textLayers(theComps[selectCompIndex])
    $.writeln("Change: " + compDropdown.selection.toString())
    
    for (var i = 0; i < numTextDropDowns; i++){
      myTextDropDown[i].removeAll();
      for (var j = 0; j < myTextLayers.length; j++){
        myTextDropDown[i].add("item", myTextLayers[j].name)
      }
    }
    var renderTemplates = availableRenderTemplates(theComps[selectedComp(compDropdown)]);
    for (var i = 0; i < numRenderTemplates; i++){
      myRenderDropDown[i].removeAll();
      for (var j = 0; j < renderTemplates.length; j++){
        myRenderDropDown[i].add("item", renderTemplates[j]);
      }
    }
  }
  
  myTextDropDown[0].onChange = function(){
    textDropDownChange(0)
  }
  
  myTextDropDown[1].onChange = function(){
    textDropDownChange(1)
  }
  myTextDropDown[2].onChange = function(){
    textDropDownChange(2)
  }

  myTextColour[0].onChange = function(){
    changeColourStatus(0)
  }
  myTextColour[1].onChange = function(){
    changeColourStatus(1)
  }
  myTextColour[2].onChange = function(){
    changeColourStatus(2)
  }

  function changeColourStatus(index){
    var isValid = hexToRGBArray(myTextColour[index].text).valid;
    if (isValid){
      validColour[index].text = "Y";
    } else {
      validColour[index].text = "N";
    }
  }
  
  function textDropDownChange(index){
    var myTextLayers = textLayers(theComps[selectedComp(compDropdown)])
    $.writeln("Text Change No:" + index)
    if (myTextDropDown[index].selection != null){
      var selectedLayer = Number(myTextDropDown[index].selection.valueOf())
      var theTextLayer = myTextLayers[selectedLayer]
      if (theTextLayer instanceof TextLayer){
        textFromLayer[index].text = theTextLayer.sourceText.value.text
      } else {
        textFromLayer[index].text = ""
      }
    }
  }
  var rowFive = myWindow.add("group")

  var saveProfileButton = rowFive.add("button", undefined, "Save Profile")
  var loadProfileButton = rowFive.add("button", undefined, "Load Profile")
  rowFive.add("button", undefined, "OK")
  rowFive.add("button", undefined, "Cancel")
  rowFive.alignment = "right"

  saveProfileButton.onClick = function(){
    var mySelection = Number(compDropdown.selection.valueOf())
    var compName = projectItems[mySelection].name
    var profile = {
      composition: compName
    }
    profile.textLayers = [];
    profile.hexColours = [];
    profile.renderTemplates = [];
    for(var i = 0; i < numTextDropDowns; i++){
      var textLayer = allTextLayers[Number(myTextDropDown[i].selection.valueOf())].name;
      var textObj = {};
      textObj[textLayerNames[i]] = textLayer;
      profile.textLayers.push(textObj);
      var hexColour = myTextColour[i].text
      var hexObj = {};
      hexObj[textLayerNames[i]] = hexColour;
      profile.hexColours.push(hexObj);
    }
    
    for (var i = 0; i < numRenderTemplates; i++){
      var render = myRenderDropDown[i].selection.toString()
      var renderObj = {}
      renderObj[renderNames[i]] = render
      profile.renderTemplates.push(renderObj)
    }

    var profileFileName = getProfileSaveFilename()
    if (profileFileName != null){
      saveSettingsJson(profile, profileFileName.name)
    } else {
      saveSettingsJson(profile, compProfileFileName)
    }
    
  }

  loadProfileButton.onClick = function(){
    var profileFileName = getProfileLoadName()
    var profile
    if (profileFileName != null){
      profile = loadSettingsJson(profileFileName.name);
    } else {
      profile = loadSettingsJson(compProfileFileName);
    }
    
    compDropdown.selection = compDropdown.find(profile.composition);
    for (var i = 0; i < numTextDropDowns; i++){
      myTextDropDown[i].selection = myTextDropDown[i].find(profile.textLayers[i][textLayerNames[i]])
      myTextColour[i].text = profile.hexColours[i][textLayerNames[i]]
      changeColourStatus(i)
    }
    for (var i = 0; i < numRenderTemplates; i++){
      myRenderDropDown[i].selection = myRenderDropDown[i].find(profile.renderTemplates[i][renderNames[i]]);
    }
  }

  return {window: myWindow, compDropdown: compDropdown, textLayers: myTextDropDown, renderDropdowns: myRenderDropDown, hexColours: myTextColour}
}

function selectedComp(theDropdown){
  if (theDropdown instanceof DropDownList && theDropdown.selection != null){
    return Number(theDropdown.selection.valueOf())
  } else {
    return 0
  }
}

function getXMLFile(){
  var win = new Window("dialog","Open XML File", undefined);
  win.orientation = "column";

  var grp1 = win.add("group");
  grp1.orientation = "row";
  var fileNameTextBox = grp1.add("edittext", undefined, "Selected File");
  fileNameTextBox.size = [500, 20];
  var fileButton = grp1.add("button", undefined, "File...");

  var grp2 = win.add("group");
  grp2.orientation = "row";
  grp2.alignment = "right"
  var okButton = grp2.add("button", undefined, "OK");
  var cancelButton = grp2.add("button", undefined, "Cancel");

  fileButton.onClick = fileButtonClick ;
 
  return win

  function fileButtonClick(){
    file = defaultXMLFolder.openDlg("Open XML file","XML file: *.xml", false);
    if (file != null){
      fileNameTextBox.text = file.fsName
    }
  }
}

function displayPromos(){
  var win = new Window("dialog", "Promo Versions", undefined);
  win.orientation = "column";
  
  var myProject = myXML.attribute("Project").toString()
  var projectText = win.add("statictext",undefined, myProject);
  projectText.alignment = "left"

  var outerGrp = win.add("group");
  outerGrp.orientation = "row";

  var grp1 = outerGrp.add("group")
  var promoList = grp1.add("listbox", undefined, [], 
                              {numberOfColumns: 4, showHeaders: true, 
                               columnTitles: ["Title", "Message", "Navigation", "Comp Name"],
                               multiselect: true});
  var pData = null;
  for (var i = 0; i < promoCount(myXML); i++){
    pData = promoData(myXML, i)
    var tempItem = promoList.add("item", pData.title)
    tempItem.subItems[0].text = pData.message
    tempItem.subItems[1].text = pData.navigation
    tempItem.subItems[2].text = promoCompName(pData)
    tempItem.selected = true;
  }
  
  var grp2 = win.add("group");
  grp2.orientation = "row";
  grp2.alignment = "right"
  var okButton = grp2.add("button", undefined, "OK");
  var cancelButton = grp2.add("button", undefined, "Cancel");
  
  return {window: win, list: promoList}
}

function getProfileSaveFilename(){
  var mySettingsFolder = new File(settingsFolder + compProfileFileName)
  return mySettingsFolder.saveDlg("Choose profile filename","Json file: *.json");
}

function getProfileLoadName(){
  var mySettingsFolder = new Folder(settingsFolder)
  return mySettingsFolder.openDlg("Choose profile","Json file: *.json", false)
}

