const fs = require("fs");
// leo txt y genero un array de strings con cada una de las lineas

const countriesInfoArray = fs
  .readFileSync("./countries.txt", {
    encoding: "utf8",
    flag: "r",
  })
  .split(/\r?\n/);
console.log(countriesInfoArray)
//me quedo con la primera linea del array que tiene el titulo
const title = countriesInfoArray.shift();

// para cada linea del array separo las palabras por espacios
let countriesArray = countriesInfoArray.map((country)=>{
    return country.split(' ')
})

//reconstruyo nombre del pais
countriesArray = countriesArray.map((countryInfo)=>{
 let countryName = countryInfo.splice(0,countryInfo.length-2).join(' ');
 const population = parseInt(countryInfo[countryInfo.length-2].replace(/,/g,''))
 const area = parseInt(countryInfo[countryInfo.length-1].replace(/,/g,''))
 const density = parseFloat((population/area).toFixed(2))
 return [countryName,population,area,density]
 
})



console.log(countriesArray)


// let population;
// let populationArray;
// countries.map((country,i)=>{
//     populationArray = country.split(' ')
//     population = populationArray[populationArray.length-2]
//     console.log(population)
//     return population
// })

// let area;
// let areaArray;
// countries.map((country,i)=>{
//     areaArray = country.split(' ')
//     area = areaArray[areaArray.length-1]
//     console.log(area)
//     return area
// })

