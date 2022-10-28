const fs = require("fs");
// leo txt y genero un array de strings con cada una de las lineas

const countriesInfoArray = fs
  .readFileSync("./countries.txt", {
    encoding: "utf8",
    flag: "r",
  })
  .split(/\r?\n/);

//me quedo con la primera linea del array que tiene el titulo
const title = countriesInfoArray.shift();

// para cada linea del array separo las palabras por espacios
let countriesArray = countriesInfoArray.map((country)=>{
    return country.split(' ')
})

//reconstruyo el array y añado densidad de poblacion
countriesArray = countriesArray.map((countryInfo)=>{
 let countryName = countryInfo.splice(0,countryInfo.length-2).join(' ');
 const population = parseInt(countryInfo[countryInfo.length-2].replace(/,/g,''))
 const area = parseInt(countryInfo[countryInfo.length-1].replace(/,/g,''))
 const density = parseFloat((population/area).toFixed(2))
 return [countryName,population,area,density]
})

//ordeno el array segun mayor densidad de poblacion
countriesArray = countriesArray.sort((a,b)=>{
   return b[3]-a[3]
})

const finalData = title + '\n' + '\n' + countriesArray.map((country) => (country).join(" - ") + "," + "\n")
    .join("\n");

fs.writeFileSync("countries.csv", finalData);