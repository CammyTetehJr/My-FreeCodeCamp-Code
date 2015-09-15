function findLongestWord(str) {
  str = str.split(' ');
  var longest = 0;
  var words =null;
  
  for(var i = 0; i < str.length; i++){
    if (longest < str[i].length){
        longest = str[i].length;
        words = str[i];
    }
  }
  return words.length;
}

findLongestWord('The quick brown fox jumped over the lazy dog');
