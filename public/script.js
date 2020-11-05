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
    const matchArray = findmatches(this.value, restaurants);
    const html = matchArray.map(place => {
        <ul>
        <li>
        <span class="name">${place.name}</span>
        <span class="category">${place.category}</span><br />
        <address class="address">
            ${place.address_line_1}
            ${place.city}
        </address>
        </li>
        </ul>
    }).join('');
    suggestions.innerHTML = html;
}

document.body.addEventListener('submit', async (e) => {
    e.preventDefault(); // this stops whatever the browser wanted to do itself.
    const form = $(e.target).serializeArray(); // here we're using jQuery to serialize the form
    fetch('/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form)
    })

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);