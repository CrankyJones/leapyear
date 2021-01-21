$(document).ready(function () {
  $("#translator").submit(function (event) {
    event.preventDefault();
    let sentence = $("input#sentence").val();



    // let vowels=["a","e","i","o","u"]
    let words = sentence.split(" ");
    let wordsOutput = [];
    words.forEach(function (word) {
      if ((word.charAt(0) == ("a")) ||
        (word.charAt(0) == ("e")) ||
        (word.charAt(0) == ("i")) ||
        (word.charAt(0) == ("o")) ||
        (word.charAt(0) == ("u")) ||
        (word.charAt(0) == ("y")) ||
        (word.charAt(0) == ("A")) ||
        (word.charAt(0) == ("E")) ||
        (word.charAt(0) == ("I")) ||
        (word.charAt(0) == ("O")) ||
        (word.charAt(0) == ("U")) ||
        (word.charAt(0) == ("Y"))) {
        wordsOutput.push(word + "way");


        // just takes the first letter and puts it at the end and adds ay. No searching for multiple consonants       
      } else {
        let piece = word.slice(0, 1);  //Replace 1 with variable that counts through a loop looking at char
        console.log(piece);
        let whole = word.slice(1);
        console.log(whole);
        let changed = whole + piece;
        console.log(changed);
        wordsOutput.push(changed + "ay");
      }

    });


    let output = wordsOutput.join(" ");
    alert(output);

  });
});

//("a" || "i" || "e" || "o" || "u" || "y"))


//const vowels = ('a','e','i','o','u','y','A','E','I','O','U','Y')
//myWord.startswith(vowels)


//else {
    //if 2nd char is not vowel and first char is not q
    
    //else if 3rd char is not vowel

