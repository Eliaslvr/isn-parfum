function fetchElement() {
    fetch("lol.json")
    .then(response => response.json())
    .then(data => {
        const bestSeller = data.filter(affiche => affiche.bestSeller === true)

        for(let affiche of bestSeller) {
            const blocParfum = document.querySelector('.grid');
            blocParfum.innerHTML += `
            <div class="card" '${affiche._id}'>
                <img src=${affiche.image} alt=${affiche.alt} />
                <p>${affiche.detail}</p>
                <span>${affiche.price}</span>
            </div>`
        }
        console.log(data);
        
    })
}

fetchElement();