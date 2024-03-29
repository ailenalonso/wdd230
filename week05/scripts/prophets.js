
const requestURL = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

function displayProphets(prophet) {  // Create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');    // Change the textContent property of the h2 element to contain the prophet's full name
    h2.textContent = `${prophet.name} ${prophet.lastname}`;
    // Add/append the section(card) with the h2 element
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    p1.textContent = `Date of birth: ${prophet.birthdate}`;
    p2.textContent = `Place of birth: ${prophet.birthplace}`;
    let img = document.createElement('img');
    img.setAttribute('src', prophet.imageurl);
    card.appendChild(h2);
    card.appendChild(p1);
    card.appendChild(p2);
    card.appendChild(img);
    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.cards').appendChild(card);
}

fetch(requestURL)
    // promise object
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);  // temporary checking for valid response and data parsing
        const prophets = jsonObject['prophets'];
        prophets.forEach(displayProphets);
    });


// cardhtml = '<section><h2>`${prophet.name}`</h2><p>`${prophet.birthdate}`</p><p>`${prophet.birthplace}`</p><img src="prophet.imageurl"></section>'