const article_container = document.querySelector(".article-container");
const select = document.querySelector("select");
const select_button = document.querySelector("#select-button");

async function displayPost() {
    const response = await fetch("https://www.reddit.com/r/" + select.value + "/new.json?limit=10");
    const post = await response.json();

    for (let i = 0; i < post.data.children.length; i++) {

        console.log(post.data.children[i].data);

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

        article.classList.add("article")
        name.classList.add("name");
        story.classList.add("story");
        author.classList.add("author");

        name.textContent = post.data.children[i].data.title;
        story.textContent = post.data.children[i].data.selftext;
        author.textContent = "Post by : " + post.data.children[i].data.author;

    }
}

select_button.addEventListener("click", function () {

    const article = document.querySelectorAll(".article");

    for (let i = 0; i < article.length; i++) {

        article_container.removeChild(article[i])

    }

    displayPost()
    tts()
});

displayPost()