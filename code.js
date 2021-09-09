let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
let punctuations = [".", ",", "?", "!", "#", ";"]

function beginVowel(word) {
   if (vowels.indexOf(word[0]) !== -1) {
       return word + "-yay"
   } 
}
beginVowel("umbrella")
console.assert(beginVowel("eat") === "eat-yay", "Function doesn't work")
console.assert(beginVowel("always") === "always-yay", "FUnction doesn't work")



function beginConsonant(word) {
    let consonant = ""
    for (let i = 0; i < word.length; i++) {
        let character = word[i]
        if (vowels.includes(character)) {
            break
        } 
        consonant += character
    }
    return word.substring(consonant.length) + "-" + consonant + "ay"
}
beginConsonant("thing")
console.assert(beginConsonant("bite") === "ite-bay", "Function doesn't work")
console.assert(beginConsonant("thing") === "ing-thay", "Function doesn't work")

function checkWords(word) {
    if (vowels.indexOf(word[0]) !== -1) {
        return beginVowel(word)
    } else {
        return beginConsonant(word)
    }  
}
checkWords("one")
console.assert(checkWords("trash") === "ash-tray", "Function doesn't turn word to Pig Latin")
console.assert(checkWords("every") === "every-yay", "Function doesn't turn word to Pig Latin")

function checkSentence(words) {
    return words
    .split(" ")
    .map((word) => checkWords(word))
    .join(" ")
    .replaceAll(".", "")
    .replaceAll(",", "")
    .replaceAll("?", "")
    .replaceAll("!", "")
}
checkSentence("Hello how are you")
console.assert(checkSentence("hey") === "ey-hay", "Function cannot handle one word sentence")
console.assert(checkSentence("how are you") === "ow-hay are-yay ou-yay", "Function cannot handle multiple words")


let textarea = document.getElementById("text")
let pigWord = document.getElementById("pig-word")

textarea.addEventListener("keyup", (e) => {
    let text = e.target.value
    let words = text
    pigWord.innerHTML = checkSentence(words)
})

