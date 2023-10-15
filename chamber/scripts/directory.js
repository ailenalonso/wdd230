async function getBusinessesData() {
    const response = await fetch("data/members.json");
    const data = await response.json();
    //console.table(data.businesses);
    displayBusinesses(data.businesses);
}

async function displayBusinesses(businesses) {
    const cards = document.querySelector(".businessCards");

    businesses.forEach((business) => {
        let card = document.createElement("section");
        let logo = document.createElement("img");
        let location = document.createElement("p");
        let number = document.createElement("p");
        let siteLink = document.createElement("a");
        let company = document.createElement("p");

        location.textContent = business.address;
        number.textContent = business.phone;

        company.textContent = business.name;
        company.setAttribute("class", "businessName");
        
        siteLink.textContent = business.website;
        siteLink.setAttribute("href", business.sitewebsite)

        logo.setAttribute("src", business.img);
        logo.setAttribute("alt", `siteLink of ${business.name}`);
        logo.setAttribute("loading", "lazy");
        logo.setAttribute("width", "456");
        logo.setAttribute("height", "250");
        logo.setAttribute("class", "businessLogo");

        card.appendChild(logo);
        card.appendChild(company);
        card.appendChild(location);
        card.appendChild(number);
        card.appendChild(siteLink);

        cards.appendChild(card);
    })
}

getBusinessesData();

function toggleLayout(){
    if (document.querySelector(".listBtn")){
        document.getElementById("directory-main").setAttribute("class", "directory-list");
        document.getElementById("layoutBtn").setAttribute("class", "gridBtn");
        document.getElementById("layoutBtn").innerHTML = "Grid";
    }
    else {
        document.getElementById("directory-main").setAttribute("class", "directory-grid");
        document.getElementById("layoutBtn").setAttribute("class", "listBtn");
        document.getElementById("layoutBtn").innerHTML = "List";
    }
}

document.getElementById("layoutBtn").addEventListener("click", toggleLayout);