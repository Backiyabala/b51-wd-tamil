// install the xhr2 library in the terminal
// for that in your terminal type the following:
// npm install xhr2

// require the library xhr2
let XMLHttpRequest = require('xhr2');

// create an object to the XMLHttpRequest class
let xhr = new XMLHttpRequest();

// open the connection
xhr.open('GET', 'https://restcountries.com/v3.1/all');

// handle the response data
xhr.onload = function () {
    let data = JSON.parse(xhr.responseText);
   
    let names=[];
    let regions=[];
    let subregions=[];
    let populations=[];

    for(let i in data){
    
     names.push(data[i].name.common);
     regions.push(data[i].region);
     subregions.push(data[i].subregion);
     populations.push(data[i].population);
}
      
     console.log(names);
     console.log(regions);
     console.log(subregions);
     console.log(populations);
     
   
    
};

// send the http request
xhr.send();