const dogs = [
    {
        rank: 1,
        name: "French Bulldog",
        image: "images/bulldog_french.jpg"
    },
    {
        rank: 2,
        name: "Labrador Retriever",
        image: "images/lab.jpg"
    },
    {
        rank: 3,
        name: "Golden Retriever",
        image: "images/golden.jpg"
    },
    {
        rank: 4,
        name: "German Shepherd",
        image: "images/germanshepard.jpg"
    },
    {
        rank: 5,
        name: "Poodle",
        image: "images/poodle.jpg"
    },
    {
        rank: 6,
        name: "Dachshund",
        image: "images/dashshund.jpg"
    },
    {
        rank: 7,
        name: "Beagle",
        image: "images/Beagle.jpg"
    },
    {
        rank: 8,
        name: "Rottweiler",
        image: "images/Rottweiler.jpg"
    },
    {
        rank: 9,
        name: "Bulldog",
        image: "images/bulldog.jpg"
    },
    {
        rank: 10,
        name: "German Shorthaired Pointer",
        image: "images/GermanShorthairPointer.jpg"
    }
];

const dogGrid = document.getElementById("dogGrid");
const foundCount = document.getElementById("foundCount");
const victoryScreen = document.getElementById("victoryScreen");

let revealedDogs = new Set();

// CREATE DOG CARDS

function createCards() {

    dogGrid.innerHTML = "";

    dogs.forEach(dog => {

        const card = document.createElement("div");
        card.classList.add("dog-card");

        card.innerHTML = `
            <div class="card-inner">

                <div class="card-front">
                    <h2>#${dog.rank}</h2>
                    <p>🐾</p>
                </div>

                <div class="card-back">
                    <img src="${dog.image}" alt="${dog.name}">
                    <h3>${dog.name}</h3>
                </div>

            </div>
        `;

        card.addEventListener("click", () => {
            revealDog(card, dog.rank);
        });

        dogGrid.appendChild(card);

    });

}

// REVEAL DOG

function revealDog(card, rank) {

    if (revealedDogs.has(rank)) {

        // Hide card again
        card.classList.remove("flipped");
        revealedDogs.delete(rank);

    } else {

        // Reveal card
        card.classList.add("flipped");
        revealedDogs.add(rank);

    }

    updateProgress();

}

// UPDATE PROGRESS

function updateProgress() {

    foundCount.textContent = revealedDogs.size;

    if (revealedDogs.size === 10) {

        setTimeout(() => {
            victoryScreen.classList.add("active");
        }, 1000);

    } else {
        victoryScreen.classList.remove("active");
    }

}

// RESET GAME

function resetGame() {

    revealedDogs.clear();

    victoryScreen.classList.remove("active");

    foundCount.textContent = 0;

    createCards();

}

// START GAME

createCards();