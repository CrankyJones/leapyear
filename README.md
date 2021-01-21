




Describe: pigLatin()
Test: "find each first letter of a word"
Expect: word.charAt(0)

Test: "identify if the first letter is a vowel"
expect: charAt(0)=[aeiouy]; true;

Test: "Find words in the array that start with a vowel (incl. y) and add "way" to the end"
Expect: pigLatin("about")).toEqual("aboutway")

Test:"if the first letter is a consonant, continue checking them until we find a vowel"
Expect: if charAt(0)!=[aeiouy] {consonants =1}, if charAt(1)!=[aeiouy] {consonants+=1}, etc.

Test: "Words that start with consonants, move first consecutive consonantes to the end and add "ay"
Expect: pigLatin("cherish").toEqual("erishchay");











!=aeiouyq
if charAt(0)
  else ifcharAt(1) = u
  if charAt(1)
    ifcharAt(2)
    