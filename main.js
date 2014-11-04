var total = 0, lookup = [], colorTotal = 0;

var chance = {
  head: 2,
  joint: 8,
  arm: 6,
  leg: 6,
  hand: 4,
  foot: 4,
  penis: 1,
  vagina: 1,
  torso: 2
};

var colors = [
  "#FAE7D0",
  "#FFCC99",
  "#FEB186",
  "#DFC183",
  "#CEAB69",
  "#B98865",
  "#AA724B",
  "#935D37",
  "#7B4B2A",
  "#c8aca3",
  "#e8cda8",
  "#7b4b2a",
  "#coa183",
  "#caa661",
  "#573719",
  "#c18e74",
  "#b58a3f",
  "#483728"
];



for (var elem in chance) {
  for (var i = 0; i < chance[elem]; i++) {
    lookup.push(elem);
  }
}


var scheme = new ColorScheme();
scheme.from_hue(351)         // Start the scheme
      .scheme('triade')     // Use the 'triade' scheme, that is, colors
                            // selected from 3 points equidistant around
                            // the color wheel.
      .variation('soft');   // Use the 'soft' color variation

colors = scheme.colors();


total = lookup.length;
colorTotal = colors.length;

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


$('body').click(function () {
  var i = getRandomInt(0, total - 1);
  var text = lookup[i];

  i = getRandomInt(0, colorTotal - 1);
  var color = colors[i];
  var instruction = 'Please draw a';
  //voicePlayer.text = text;
  speechSynthesis.cancel();


  if (text == 'arm') {
    instruction += 'n';
  }

  $('#instruction').text(instruction);
  $('#what').text(text);

  instruction = 'Please draw e';
  if (text == 'arm') {
    instruction += 'n';
  }

  var spokenText = instruction + ' ';
  if (text == 'head') text = 'haet';
  var utterance = new SpeechSynthesisUtterance(instruction + ' ' + text);
  utterance.lang = 'de-DE';

  window.speechSynthesis.speak(utterance);


  //$('#display').fitText(1);
  $(this).css('background-color', color);
  // $(this).css('background-color', randomColor({
  //   hue: 'orange',
  //   luminosity: 'dark'
  // }));
  //voicePlayer.speak();
});


dist = [];

for (var i = 0; i < 100000; i++) {
  var n = getRandomInt(0, total - 1);
  if (!dist[n]) dist[n] = 0;
  dist[n]++;
}
