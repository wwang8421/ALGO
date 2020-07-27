const generate_generalized_abbreviation = function(word) {
  let result = [];

  const helper = (curr = "", index = 0, count = 0) => {
    if(index === word.length){
      if(count > 0){
        curr += count;
      }
      result.push(curr);
    } else {
      helper(curr, index + 1, count + 1);
      helper(curr + (count > 0 ? count : "") + word[index], index + 1, 0);
    }    
  }
  helper();

  console.log('result')

  return result;
};


console.log(`Generalized abbreviation are: ${generate_generalized_abbreviation("BAT")}`)
console.log(`Generalized abbreviation are: ${generate_generalized_abbreviation("code")}`)
