const secondSection = document.querySelector('.second-section')

const selectBtn = document.querySelector('.select-region')

const regionDiv = document.querySelector('.region-div')

const africaBtn = document.querySelector('#africa')
const event = document.querySelector('.event')

const americasBtn = document.querySelector('#americas')
const asiaBtn = document.querySelector('#asia')
const europeBtn = document.querySelector('#europe')
const oceaniaBtn = document.querySelector('#oceania')
const allBtn = document.querySelector('#all')

const countryName = document.querySelector('.country-name');

const searchInput = document.getElementById('search-input');


//WINDOWSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS

export let data;
let currentCountry;


export async function getData(){
    try{
     const response = await fetch('./data.json')
      data=await response.json()
            let displayCountry = data.map(function(country){ 
                return `
                 <a href="country.html">
                 <article class="country-div">
                 <img src=" ${country.flags.png}" alt="flag">
                 <div class='info-div'>
                 <p class="country-name">${country.name}</p>
                 <div class='country-info'>
                     <p><span>Population:</span> ${country.population}</p>
                     <p><span>Region:</span> ${country.region}</p>
                     <p><span>Capital:</span> ${country.capital}</p>
                 </div>
                 </div>
                 </article>
        </a>
                `
            })
            displayCountry=displayCountry.join("")
            secondSection.innerHTML =displayCountry;
            
            selectBtn.addEventListener('click', function(){
                regionDiv.classList.toggle('drop-down')
                })
            africaBtn.addEventListener('click',fetchAfrica)
            americasBtn.addEventListener('click',fetchAmericas)
            asiaBtn.addEventListener('click',fetchAsia)
            europeBtn.addEventListener('click',fetchEurope)
            oceaniaBtn.addEventListener('click',fetchOceania)
            allBtn.addEventListener('click',getData)
            searchInput.addEventListener('input',searchCountry)
                
                //CHANGE OF PAGE
                const contDivs = document.querySelectorAll('.country-div')
                
                // const infoDiv = document.querySelector('.info-div')
                    contDivs.forEach(function name(contDiv) {

                    contDiv.addEventListener('click', function (e) {
                    const textData = e.currentTarget.children[1].children[0].textContent;
                    currentCountry =data.find(function (currentData) {
                    if(currentData.name ===textData){
                        sessionStorage.setItem('country',JSON.stringify(currentData))
                        console.log(currentData.name);
                    }
                })
                currentCountry
            })
        })
    }catch(error){
        console.log(error);
    }
}
//SEARCH
export async function searchCountry(){
    try{
        const response = await fetch('./data.json')
         data=await response.json()
         
        const inputValue =searchInput.value.toLowerCase();
        const matchedCountries = data.filter(datum => datum.name.toLowerCase().includes(inputValue));
        
           let geting =matchedCountries.map(function(omo){
            return `
                <a href="country.html">
                 <article class="country-div">
                 <img src=" ${omo.flags.png}" alt="flag">
                 <div class='info-div'>
                 <p class="country-name">${omo.name}</p>
                 <div class='country-info'>
                     <p><span>Population:</span> ${omo.population}</p>
                     <p><span>Region:</span> ${omo.region}</p>
                     <p><span>Capital:</span> ${omo.capital}</p>
                 </div>
                 </div>
                 </article>
        </a>
                `
           }).join("")
        //    console.log(geting);
           secondSection.innerHTML= geting;

           const  contDivs = document.querySelectorAll('.country-div')
                
                // const infoDiv = document.querySelector('.info-div')
                    contDivs.forEach(function name(contDiv) {

                    contDiv.addEventListener('click', function (e) {
                    const textData = e.currentTarget.children[1].children[0].textContent;
                    currentCountry =data.find(function (currentData) {
                    if(currentData.name ===textData){
                        sessionStorage.setItem('country',JSON.stringify(currentData))
                        console.log(currentData.name);
                    }
                })
                currentCountry
            })
        })
       
    }catch(error){
        console.log('failure africa');
    }
}


// AFRICAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA

export async function fetchAfrica(){
    try{
        const response = await fetch('./data.json')
         data=await response.json()
        let getRegion = data.filter(function(conty) {
            if(conty.region ==='Africa'){
                return conty
            }
           })
           let geting =getRegion.map(function(omo){
            return `
                <a href="country.html">
                 <article class="country-div">
                 <img src=" ${omo.flags.png}" alt="flag">
                 <div class='info-div'>
                 <p class="country-name">${omo.name}</p>
                 <div class='country-info'>
                     <p><span>Population:</span> ${omo.population}</p>
                     <p><span>Region:</span> ${omo.region}</p>
                     <p><span>Capital:</span> ${omo.capital}</p>
                 </div>
                 </div>
                 </article>
        </a>
                `
           }).join("")
        //    console.log(geting);
           secondSection.innerHTML= geting;

           const  contDivs = document.querySelectorAll('.country-div')
                
                // const infoDiv = document.querySelector('.info-div')
                    contDivs.forEach(function name(contDiv) {

                    contDiv.addEventListener('click', function (e) {
                    const textData = e.currentTarget.children[1].children[0].textContent;
                    currentCountry =data.find(function (currentData) {
                    if(currentData.name ===textData){
                        sessionStorage.setItem('country',JSON.stringify(currentData))
                        console.log(currentData.name);
                    }
                })
                currentCountry
            })
        })
       
    }catch(error){
        console.log('failure africa');
    }
}
async function fetchAmericas(){
    try{
        const response = await fetch('./data.json')
        data=await response.json()
        let getRegion = data.filter(function(conty) {
            if(conty.region ==='Americas'){
                return conty
            }
           })
           let geting =getRegion.map(function(omo){
            return `
                <a href="country.html">
                 <article class="country-div">
                 <img src=" ${omo.flags.png}" alt="flag">
                 <div class='info-div'>
                 <p class="country-name">${omo.name}</p>
                 <div class='country-info'>
                     <p><span>Population:</span> ${omo.population}</p>
                     <p><span>Region:</span> ${omo.region}</p>
                     <p><span>Capital:</span> ${omo.capital}</p>
                 </div>
                 </div>
                 </article>
        </a>
                `
           }).join("")
        //    console.log(geting);
           secondSection.innerHTML= geting;

           const contDivs = document.querySelectorAll('.country-div')
                
                // const infoDiv = document.querySelector('.info-div')
                    contDivs.forEach(function name(contDiv) {

                    contDiv.addEventListener('click', function (e) {
                    const textData = e.currentTarget.children[1].children[0].textContent;
                    currentCountry =data.find(function (currentData) {
                    if(currentData.name ===textData){
                        sessionStorage.setItem('country',JSON.stringify(currentData))
                        console.log(currentData.name);
                    }
                })
                currentCountry
            })
        })
       
    }catch(error){
        console.log('failure americas');
    }
}
async function fetchAsia(){
    try{
        const response = await fetch('./data.json')
        data=await response.json()
        let getRegion = data.filter(function(conty) {
            if(conty.region ==='Asia'){
                return conty
            }
           })
           let geting =getRegion.map(function(omo){
            return `
                <a href="country.html">
                 <article class="country-div">
                 <img src=" ${omo.flags.png}" alt="flag">
                 <div class='info-div'>
                 <p class="country-name">${omo.name}</p>
                 <div class='country-info'>
                     <p><span>Population:</span> ${omo.population}</p>
                     <p><span>Region:</span> ${omo.region}</p>
                     <p><span>Capital:</span> ${omo.capital}</p>
                 </div>
                 </div>
                 </article>
        </a>
                `
           }).join("")
        //    console.log(geting);
           secondSection.innerHTML= geting;

           const contDivs = document.querySelectorAll('.country-div')
                
                // const infoDiv = document.querySelector('.info-div')
                    contDivs.forEach(function name(contDiv) {

                    contDiv.addEventListener('click', function (e) {
                    const textData = e.currentTarget.children[1].children[0].textContent;
                    currentCountry =data.find(function (currentData) {
                    if(currentData.name ===textData){
                        sessionStorage.setItem('country',JSON.stringify(currentData))
                        console.log(currentData.name);
                    }
                })
                currentCountry
            })
        })
       
    }catch(error){
        console.log('failure asia');
    }
}
async function fetchEurope(){
    try{
        const response = await fetch('./data.json')
        data=await response.json()
        let getRegion = data.filter(function(conty) {
            if(conty.region ==='Europe'){
                return conty
            }
           })
           let geting =getRegion.map(function(omo){
            return `
                <a href="country.html">
                 <article class="country-div">
                 <img src=" ${omo.flags.png}" alt="flag">
                 <div class='info-div'>
                 <p class="country-name">${omo.name}</p>
                 <div class='country-info'>
                     <p><span>Population:</span> ${omo.population}</p>
                     <p><span>Region:</span> ${omo.region}</p>
                     <p><span>Capital:</span> ${omo.capital}</p>
                 </div>
                 </div>
                 </article>
        </a>
                `
           }).join("")
        //    console.log(geting);
           secondSection.innerHTML= geting;

           const contDivs = document.querySelectorAll('.country-div')
                
                // const infoDiv = document.querySelector('.info-div')
                    contDivs.forEach(function name(contDiv) {

                    contDiv.addEventListener('click', function (e) {
                    const textData = e.currentTarget.children[1].children[0].textContent;
                    currentCountry =data.find(function (currentData) {
                    if(currentData.name ===textData){
                        sessionStorage.setItem('country',JSON.stringify(currentData))
                        console.log(currentData.name);
                    }
                })
                currentCountry
            })
        })
       
    }catch(error){
        console.log('failure europe');
    }
}
async function fetchOceania(){
    try{
        const response = await fetch('./data.json')
        data=await response.json()
        let getRegion = data.filter(function(conty) {
            if(conty.region ==='Oceania'){
                return conty
            }
           })
           let geting =getRegion.map(function(omo){
            return `
                <a href="country.html">
                 <article class="country-div">
                 <img src=" ${omo.flags.png}" alt="flag">
                 <div class='info-div'>
                 <p class="country-name">${omo.name}</p>
                 <div class='country-info'>
                     <p><span>Population:</span> ${omo.population}</p>
                     <p><span>Region:</span> ${omo.region}</p>
                     <p><span>Capital:</span> ${omo.capital}</p>
                 </div>
                 </div>
                 </article>
        </a>
                `
           }).join("")
        //    console.log(geting);
           secondSection.innerHTML= geting;

           const contDivs = document.querySelectorAll('.country-div')
                
                // const infoDiv = document.querySelector('.info-div')
                    contDivs.forEach(function name(contDiv) {

                    contDiv.addEventListener('click', function (e) {
                    const textData = e.currentTarget.children[1].children[0].textContent;
                    currentCountry =data.find(function (currentData) {
                    if(currentData.name ===textData){
                        sessionStorage.setItem('country',JSON.stringify(currentData))
                        console.log(currentData.name);
                    }
                })
                currentCountry
            })
        })
       
    }catch(error){
        console.log('failure europe');
    }
}

//EVENTLISTENERSSSSSSSSSSSSSSSSSSSSSSSSSSSS
if (document.location.pathname === "/" || document.location.pathname === "/index.html") {
    document.addEventListener('DOMContentLoaded', getData);
}
// event.addEventListener('DOMContentLoaded',getData)




const contDivs = document.querySelectorAll('.country-div')
console.log(contDivs);

contDivs.forEach(function name(contDiv) {
    contDiv.addEventListener('click', function () {
        console.log('hello');
    })
})

// export{};

















// getData()

// filterBtn.forEach(function (btn) {
//     btn.addEventListener('click', function (e){
//         console.log(e.target.dataset);
//     })
// })
