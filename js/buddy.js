function loadBuddy(){
    fetch('https://randomuser.me/api/?results=5')
    .then(res => res.json())
    .then(data => displayBuddy(data))
}

function displayBuddy(buddy){
    const buddies = buddy.results;
    const divBuddy = document.getElementById('buddies-container')
    for (const buddy of buddies){
    console.log(buddy.email);
    const p = document.createElement('p');
    p.innerText =`Name: ${buddy.name.first} ${buddy.name.last}. Email:${buddy.email}
    `;
    divBuddy.appendChild(p);
    }
}