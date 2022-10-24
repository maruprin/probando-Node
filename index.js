const greeting = (name) =>{

    console.log("hola "+ name)
}
greeting('maru')
const fs = require('fs');
const readCountriesFile = fs.readFileSync("./countries.txt", {
    encoding: "utf8",
    flag: "r",
  }).split(/\r?\n/)

console.log(readCountriesFile[1])

const title = readCountriesFile.shift();
console.log(title)
