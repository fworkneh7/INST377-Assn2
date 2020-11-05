const endpoint = 'https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json';
const restaurants = []
fetch(endpoint)
    .then(resj => resj.json())
    .then(data => restaurants.push(...data))

function findMatches(wordToMatch, restaurants){
    return restaurants.filter(place=> {
        const regex = new RegExp(wordToMatch, 'gi');
        return place.restaurants.match(regex);
    });
}

function displayMatches(){
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
    suggestions.innerHTML = html;
}

const searchInput = document.querySelector('.text-input');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);