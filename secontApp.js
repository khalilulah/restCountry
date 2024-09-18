import { getData } from "./app.js";

const country = JSON.parse(sessionStorage.getItem('country'));
console.log(country);
const container = document.querySelector('.container');

let countryCurrencies;
let countryLanguages;

function createCountryInfo(country1) {
    countryCurrencies = country1.currencies.map(currency => currency.name);
    countryLanguages = country1.languages.map(language => language.name);
    container.innerHTML = `
    <div class="flag">
        <img src="${country1.flags.png}" id='image' alt="Country flag">
    </div>
    <div class="country-info">
        <div id="country-name">
            <h1>${country1.name}</h1>
        </div>
        <div class="country-char">
            <div class="left-char">
                <p class="left-char-info">Native Name: <span>${country1.nativeName}</span></p>
                <p class="left-char-info">Population: <span>${country1.population}</span></p>
                <p class="left-char-info">Region: <span>${country1.region}</span></p>
                <p class="left-char-info">Sub Region: <span>${country1.subregion}</span></p>
                <p class="left-char-info">Capital: <span>${country1.capital}</span></p>
            </div>
            <div class="right-char">
                <p class="right-char-info">Top Level Domain: <span>${country1.topLevelDomain}</span></p>
                <p class="right-char-info">Currencies: <span>${countryCurrencies.join(', ')}</span></p>
                <p class="right-char-info">Languages: <span>${countryLanguages.join(', ')}</span></p>
            </div>
        </div>
        <div id="border-countries">
            <p>Border Countries</p>
            ${fetchBorderCountryNames(country1.borders || [])};
        </div>
    </div>
    `;
}

async function fetchBorderCountryNames(countryBorders) {
    try {
        const response = await fetch('./data.json');
        const data = await response.json();
        const borderCountries = document.getElementById('border-countries');

        // Clear previous border countries
        borderCountries.innerHTML = '<p>Border Countries</p>';

        if (countryBorders.length === 0) {
            const noBorderMessage = document.createElement('p');
            noBorderMessage.textContent = 'No Border';
            borderCountries.appendChild(noBorderMessage);
        } else {
            console.log(countryBorders);
            countryBorders.forEach(borderCode => {
                const borderCountry = data.find(datum => datum.alpha3Code === borderCode);
                if (borderCountry) {
                    const btn = document.createElement('button');
                    btn.textContent = borderCountry.name;
                    btn.addEventListener('click', () => {
                        // Update the country info when button is clicked
                        createCountryInfo(borderCountry);
                        console.log(`Button for ${borderCountry.name} clicked`);
                        // Handle the border highlighting
                        // document.querySelectorAll('#border-countries button').forEach(button => {
                        //     button.classList.remove('active-border-button');
                        // });
                        // btn.classList.add('active-border-button');
                    });
                    borderCountries.appendChild(btn);
                }
            });
        }
    } catch (error) {
        console.error('Error fetching border country names:', error);
    }
}

window.addEventListener('DOMContentLoaded', () => {
    createCountryInfo(country);
});