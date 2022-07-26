'use strict';

const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
    {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const likeCount = document.getElementById('like-count');
const likeButton = document.getElementById('like-button');
const post = document.getElementById('post')




const renderPost = () => {
    for (let i = 0; i < posts.length; i++) {
        // console.log(posts[i])

        post.innerHTML += `
        
        <article  class="post-title" >
            <img class="user-avatar"  src="${posts[i].avatar}" >
            <div class="user-info">
                <h3 class="user-full-name">${posts[i].name}</h3>
                <p class="user-location">${posts[i].location}</p>
            </div>
        </article>

         <article class="post-content">
                    <img class="post-image" src="${posts[i].post}" alt="">
                </article>

             <article class="post-interaction">
                    <img id="like-button" class="icon-image" src="./images/icon-heart.png" alt="Like button">
                    <img class="icon-image" src="./images/icon-comment.png" alt="Comment button">
                    <img class="icon-image" src="./images/icon-dm.png" alt="Share button">
                </article>

                <article id="like-count" class="post-info">
                 <strong> ${posts[i].likes} likes</strong>
                </article>

                <article class="post-description">
                    <p>
                        <strong>${posts[i].username}</strong>
                        ${posts[i].comment}
                    </p>
                </article>
        `

    }
}


// let likeTotal = posts[0].likes;

// likeButton.addEventListener('dblclick', () => {
//     likeTotal += 1;
//     likeCount.innerHTML = `
//         <strong> ${likeTotal} likes </strong>
//     `
// })

renderPost();