//hash table approach

var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  let hash = {};

  for (char in s) {
    if (hash[s[char]] === undefined) {
      hash[s[char]] = 1;
    } else {
      hash[s[char]]++;
    }
  }

  for (char in t) {
    if (hash[t[char]] === undefined) {
      return false;
    } else if (hash[t[char]] > 0) {
      hash[t[char]]--;
    } else if (hash[t[char]] === 0) {
      return false;
    }
  }
  return true;
};

// second approach Sorting
var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  let sArr = s.split("");
  let tArr = t.split("");
  sArr.sort();
  tArr.sort();
  return sArr.join() === tArr.join() ? true : false;
};

// question
// what is uniqcode character?
// are the length of s and t always the same?

// thought (pseducode)
// if the s.length !== t.length{ return false}
// store s into a hash table
// check each char in t,
