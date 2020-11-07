function findMatches(wordToMatch, restaurants){
    console.log(restaurants)
    return restaurants.filter(place => {
        const regex = new RegExp(wordToMatch, 'gi');
        return place.restaurants.match(regex);
    });
}

function displayMatches(restaurants){
    const matchArray = findMatches(this.value, restaurants);
    const html = matchArray.map(place => {
        return `
          <li>
            <span class="name">${place.name}</span>
            <span class="category">${place.category}</span><br />
            <address class="address">
                ${place.address_line_1}
                ${place.city}
            </address>
          </li>
        `;
    }).join('');
    const suggestions = document.querySelector('.suggestions');
    suggestions.innerHTML = html;
}

const searchInput = document.querySelector('.userinput');

async function loaddata() {
    const endpoint = 'https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json';
    const restaurants = []
    const data = await fetch(endpoint);
    const resj = await data.json();
    displayMatches(resj)
    searchInput.addEventListener('keydown', displayMatches);
}

window.onload = loaddata;

