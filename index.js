function theBeatlesPlay(musicians, instruments) {
  var theBeatlesPlay = [];
  
  for (var i = 0; i < 4; i++) {
  theBeatlesPlay.push(musicians[i] + " plays " + instruments[i]);
  }
  return theBeatlesPlay;
}

function johnLennonFacts(facts) {
  var i = 0;
  while(i < facts.length) {
    i++;
    facts[i] += "!!!";
  }
    return facts;
}

