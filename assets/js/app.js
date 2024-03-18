const main = document.querySelector("main");

async function displayPost() {
    const response = await fetch("https://www.reddit.com/r/letsnotmeet/new.json?limit=10");
    const post = await response.json();

    for (let i = 0; i < post.data.children.length; i++) {

        console.log(post.data.children[i].data);

        const article = document.createElement("article");
        const name = document.createElement("h2");
        const story = document.createElement("p");
        const author = document.createElement("p");
        const hr = document.createElement("hr");

        main.appendChild(article);
        article.appendChild(name);
        article.appendChild(story);
        article.appendChild(author);
        article.appendChild(hr);

        name.classList.add("name");
        story.classList.add("story");
        author.classList.add("author");

        name.textContent = post.data.children[i].data.title;
        story.textContent = post.data.children[i].data.selftext;
        author.textContent = "Post by : " + post.data.children[i].data.author;

    }
}

displayPost();