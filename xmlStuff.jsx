function columnNames(theXML){
  var columnArray = []
  var columnLevel = theXML.elements()[0].elements()[0].elements()

  for (var i=0; i < columnLevel.length(); i++){
    columnArray.push(columnLevel[i].name())
  }
  return columnArray
}

function promoData(theXML, itemNo){
  var theData = myXML.elements()[0].elements()[itemNo]
  var tempItem = { title: theData.elements()[0],
                    message: theData.elements()[1],
                    navigation: theData.elements()[2] }
  return tempItem

}

function saveSettings(settingsObject){
  XML.ignoreProcessingInstructions = false
  var heading = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>"
  var testXML = new XML("<settings></settings>");

  for (var key in settingsObject){
    var temp = new XML("<temp>temp</temp>")
    testXML.insertChildBefore(null, temp);
    testXML.children()[testXML.children().length() - 1].setLocalName(key);
    testXML.children()[testXML.children().length() - 1] = settingsObject[key];
  }

  
}


function promoCount(theXML){
  return theXML.elements()[0].elements().length()
}

function promoCompName(pData){
  return replacesSpacesWithUnderscores(pData.title.toUpperCase() + "_" + pData.message.toUpperCase() + "_" +  pData.navigation.toUpperCase());
}
function replacesSpacesWithUnderscores(theText){
  return theText.replace(/\s/g, "_");
}