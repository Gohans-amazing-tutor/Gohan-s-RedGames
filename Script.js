document.addEventListener("DOMContentLoaded", () => {
    displayGames(gamesDatabase);
});

function displayGames(games) {
    const grid = document.getElementById("gameGrid");
    grid.innerHTML = ""; 

    games.forEach(game => {
        const card = document.createElement("div");
        card.className = "game-card";
        card.onclick = () => openGame(game.link);

        card.innerHTML = `
            <img src="${game.image}" alt="${game.name}">
            <h4>${game.name}</h4>
        `;
        grid.appendChild(card);
    });
}

function filterGames() {
    const query = document.getElementById("searchBar").value.toLowerCase();
    const filtered = gamesDatabase.filter(game => game.name.toLowerCase().includes(query));
    displayGames(filtered);
}

function filterCategory(category) {
    if (category === 'all') {
        displayGames(gamesDatabase);
    } else {
        const filtered = gamesDatabase.filter(game => game.category === category);
        displayGames(filtered);
    }
}

function openGame(url) {
    const modal = document.getElementById("gameModal");
    const frame = document.getElementById("gameFrame");
    
    frame.src = url;
    modal.style.display = "block";
    
    setTimeout(() => {
        modal.classList.add("show");
    }, 10);
}

function closeGame() {
    const modal = document.getElementById("gameModal");
    const frame = document.getElementById("gameFrame");
    
    modal.classList.remove("show");
    
    setTimeout(() => {
        modal.style.display = "none";
        frame.src = ""; 
    }, 400);
}

