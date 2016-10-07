//For readability and clarity it is good practice to declare variables at the beginning of the JS document if possible
var churchillSpeech = {
      'author': 'Churchill',
      'year': 1940,
      'yearIsBCE': false,
      'authorAge': '66'
    },
    ghandiSpeech = {
      'author': 'Ghandi',
      'year': 1942,
      'yearIsBCE': false,
      'authorAge': '73'
    },
    demosthenesSpeech = {
      'author': 'Demosthenes',
      'year': 342,
      'yearIsBCE': true,
      'authorAge': '42'
    },
    speechesArray = [churchillSpeech, ghandiSpeech, demosthenesSpeech],
    userNamePrompt,
    favoriteSpeechPrompt;

var i = 0;
while (i < speechesArray.length) {
        console.log("This speech is written by "+speechesArray[i].author+".");
        i ++;
}

var oldestYear = 1940;
var newestYear = 1940;

for ( var i = 0; i < speechesArray.length; i += 1 ) {

  if (speechesArray[i].year < oldestYear) {
    oldestYear = speechesArray[i].year;
  } else if (speechesArray[i].year > newestYear) {
    newestYear = speechesArray[i].year;
  } 
}

document.getElementById('BtnDonate').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Donate" button.
  favoriteSpeechPrompt = window.prompt('Which speech author is your favorite?');

  for ( var i = 0; i < speechesArray.length; i += 1 ) {

    if (favoriteSpeechPrompt === speechesArray[i].author) {
      console.log(speechesArray[i].author+" was "+speechesArray[i].authorAge+" during this speech.")
    }
  }

});

document.getElementById('BtnChurchill').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Churchill" button.

  if (churchillSpeech.year === oldestYear) {
    console.log ("This is the oldest speech on the page.");
  } else if (churchillSpeech === newestYear){
    console.log ("This is the most recent speech on the page.");
  }

});

document.getElementById('BtnGhandi').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Ghandi" button.

    if (ghandiSpeech.year === oldestYear) {
    console.log ("This is the oldest speech on the page.");
  } else if (ghandiSpeech.year === newestYear){
    console.log ("This is the most recent speech on the page.");
  }

});

document.getElementById('BtnDemosthenes').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Demosthenes" button.

    if (demosthenesSpeech.year === oldestYear) {
    console.log ("This is the oldest speech on the page.");
  } else if (demosthenesSpeech === newestYear){
    console.log ("This is the most recent speech on the page.");
  }

});

