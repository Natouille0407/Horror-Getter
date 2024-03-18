const p = document.querySelector("p");

async function displayPost() {
    const reponse = await fetch("https://www.reddit.com/r/letsnotmeet/new.json?limit=1");
    const post = await reponse.json();
    console.log(post.data.children[0].data.selftext);

    p.textContent = post.data.children[0].data.selftext;
}

displayPost()