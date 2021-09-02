let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
let punctuations = [".", ",", "?", "!", "#", ";"]
let extraChar = [1, 2, 3, 4, 5, 6, 7, 8, 9, " "]
let punctuationValue

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
    return word.substring(consonant.length) + consonant + "ay"
}
beginConsonant("thing")
console.assert(beginConsonant("bite") === "itebay", "Function doesn't work")
console.assert(beginConsonant("thing") === "ingthay", "Function doesn't work")

function checkWords(word) {
    if (vowels.indexOf(word[0]) !== -1) {
        return beginVowel(word)
    } else {
        return beginConsonant(word)
    }  
}
checkWords("one")
console.assert(checkWords("trash") === "ashtray", "Function doesn't turn word to Pig Latin")
console.assert(checkWords("every") === "every-yay", "Function doesn't turn word to Pig Latin")

function checkSentence(words) {
    let multipleWords = words.split(" ")
    multipleWords.map(word => {
        checkWords(word)
    })
    .join(" ")
    return checkWords(words)
}
checkSentence("Hello how are you")
console.assert(checkSentence("hey") === "eyhay", "Function cannot handle one word sentence")
console.assert(checkSentence("how are you") === "owhay are-yay ouyay", "Function cannot handle multiple words")


let textarea = document.getElementById("text")
let pigWord = document.getElementById("pig-word")

textarea.addEventListener("keyup", (e) => {
    let text = e.target.value
    let words = text
        .split(" ")
        .map((word) => {
        if (vowels.indexOf(word[0]) !== -1) {
            return word + "-yay"
        }
            let consonant = ""
            for (let i = 0; i < word.length; i++) {
                let character = word[i]
                if (vowels.includes(character)) {
                    break
                } 
                consonant += character
            }

            return word.substring(consonant.length) + consonant + "ay"
        
    })
    .join(" ")
    pigWord.innerText = words
})

