const article_container = document.querySelector(".article-container");
const select = document.querySelector("select");
const select_button = document.querySelector("#select-button");
const amount = document.querySelector("#amount");
let usedIndices = []; // Tableau pour stocker les indices déjà utilisés

// Fonction pour générer un index aléatoire non utilisé
function getRandomIndex(max) {
    let randomIndex = Math.floor(Math.random() * max);
    while (usedIndices.includes(randomIndex)) { // Vérifie si l'index généré est déjà utilisé
        randomIndex = Math.floor(Math.random() * max);
    }
    return randomIndex;
}

async function displayPost() {
    const response = await fetch("https://www.reddit.com/r/" + select.value + "/new.json?limit=" + amount.value);
    const post = await response.json();

    for (let i = 0; i < amount.value; i++) {
        let randomIndex = getRandomIndex(post.data.children.length);
        usedIndices.push(randomIndex); // Ajoute l'index utilisé au tableau des indices utilisés

        const article = document.createElement("article");
        const name = document.createElement("h2");
        const story = document.createElement("p");
        const author = document.createElement("p");
        const hr = document.createElement("hr");

        article_container.appendChild(article);
        article.appendChild(name);
        article.appendChild(story);
        article.appendChild(author);
        article.appendChild(hr);

        article.classList.add("article");
        name.classList.add("name");
        story.classList.add("story");
        author.classList.add("author");

        name.textContent = post.data.children[randomIndex].data.title;
        story.textContent = post.data.children[randomIndex].data.selftext;
        author.textContent = "Post by: " + post.data.children[randomIndex].data.author;

        console.log(post.data.children[i]);
    }
}

select_button.addEventListener("click", function () {
    const article = document.querySelectorAll(".article");
    for (let i = 0; i < article.length; i++) {
        article_container.removeChild(article[i]);
    }
    usedIndices = []; // Réinitialise le tableau des indices utilisés
    displayPost();
});

displayPost();