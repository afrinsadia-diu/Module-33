function loadCountries(){
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}
loadCountries();

const displayCountries = countries=> {
    const getCountries = document.getElementById('countries-container');
    // console.log(getCountries);
    countries.forEach(country => {
        const h3 = document.createElement(h3);
        h3.innerText= country.name;
        getCountries.appendChild(h3);
    });
}