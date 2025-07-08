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


// Selects the container element where the posts will be rendered
const feedContainer = document.querySelector('.feed')

// Renders all posts from the provided array of post objects
const renderFeed = (posts) => {
    let newInnerHTML = ""

    // Loop through each post object and build its HTML markup
    posts.forEach((post) => {
        newInnerHTML += `
        <article class="container post">
            <div class="container post-header">
                <img class="avatar" src="${post.avatar}" alt="Portrait of ${post.name}">
                <div class="name-location">
                        <p class="username bold lg-text">${post.name}</p>
                        <p class="location">${post.location}</p>
                </div>
            </div>

            <img class="container post-img" src="${post.post}" alt="Portrait of ${post.name}">

            <div class="container post-interactions">
                <div class="icons-div">
                        <img  class="icon likes-img" src="images/icon-heart.png" alt="Like">
                        <img class="icon" src="images/icon-comment.png" alt="Comment">
                        <img class="icon" src="images/icon-dm.png" alt="Share">
                </div>
                    <p  class="likes likes-count bold lg-text">${post.likes}</p>
                    <p class="comments"><span class="bold lg-text">${post.username}</span> ${post.comment}</p>
            </div>
        </article>
        `
    })

    // Inject the built HTML into the DOM
    feedContainer.innerHTML = newInnerHTML
}

// Initial rendering of posts
renderFeed(posts)


// Select all like buttons and their corresponding like counters
const likesImg = document.querySelectorAll('.likes-img')
const likesCount = document.querySelectorAll('.likes-count')

// Debug: log all like counter elements
console.log(likesCount)

// Attach a click event to each like button
likesImg.forEach((image, index) => {
    image.addEventListener("click", function () {
        const postIndex = likesCount[index]

        // Increment the like count and update the text content
        let newCount = parseInt(postIndex.textContent)
        newCount += 1
        postIndex.textContent = newCount
    })
})



