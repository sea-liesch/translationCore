var fs = require('fs');
var testFolder = 'C:/Users/Ian/Documents/Work/translationCore/static/hebrew/';
var numbersOnly = /\D/g;
fs.readFile(testFolder + 'xml/Ruth.xml', function(err, data){
  var parseString = require('xml2js').parseString;
  var xml = data.toString();
  parseString(xml, function (err, result) {
    var chapters = result.osis.osisText[0].div[0].chapter;
    var finalObj = {};
    for (var i in chapters) {
      var verseObj = {};
      for (var j in chapters[i].verse) {
        var getChapterVerse = chapters[i].verse[j].$.osisID.replace(/\D+\d\D/, '');
        var words = chapters[i].verse[j].w;
        var finalSentence = "";
        for (var k = words.length-1; k >= 0; k--) {
          finalSentence += " ";
          finalSentence += words[k].$.morph + " ";
          finalSentence += " ";
          finalSentence += words[k].$.lemma;
          finalSentence += " ";
          finalSentence += words[k]._;
        }
        verseObj[getChapterVerse] = finalSentence;
      }
      var getChapterNumber = chapters[i].$.osisID.replace(numbersOnly, '');
      finalObj[getChapterNumber] = verseObj;
    }
      console.dir(finalObj);
      fs.writeFile(testFolder + 'json/Ruth.json', JSON.stringify(finalObj, null, 4), function() {
        fixFile();
      })
  });
});

// Removes the tags added earlier
function fixFile(){
  fs.readFile(testFolder + 'json/Ruth.json', function(err, data){
    var newData = data;
    console.log(data);
  });
}
