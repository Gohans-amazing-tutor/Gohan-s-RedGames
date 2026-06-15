const gamesGrid = document.getElementById("games-grid");
const search = document.getElementById("search");

const overlay = document.getElementById("game-overlay");
const frame = document.getElementById("game-frame");
const closeBtn = document.getElementById("close-btn");

let games = [];

fetch("data/games.json")
.then(res => res.json())
.then(data => {
    games = data;
    renderGames(games);
});

function renderGames(gameList){

    gamesGrid.innerHTML = "";

    gameList.forEach(game => {

        const card = document.createElement("div");
        card.className = "game-card";

        card.innerHTML = `
            <img src="${game.image}">
            <h3>${game.name}</h3>
        `;

        card.onclick = () => {

            frame.src = game.file;

            overlay.classList.add("active");

            document.body.style.overflow = "hidden";
        };

        gamesGrid.appendChild(card);
    });
}

search.addEventListener("input", () => {

    const value = search.value.toLowerCase();

    const filtered = games.filter(game =>
        game.name.toLowerCase().includes(value)
    );

    renderGames(filtered);

});

document.querySelectorAll(".category").forEach(btn => {

    btn.addEventListener("click", () => {

        const category = btn.dataset.category;

        if(category === "All"){
            renderGames(games);
            return;
        }

        const filtered = games.filter(game =>
            game.category === category
        );

        renderGames(filtered);

    });

});

closeBtn.onclick = () => {

    overlay.classList.remove("active");

    frame.src = "";

    document.body.style.overflow = "auto";

};
