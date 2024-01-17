// root
//> div
// const posts = [{}]
// render posts to div

// utils
const getInitialPost = (name, description) => ({
    name: name, description: description, id: Math.floor(Math.random() * 100)
})

const handleRemovePost = (postId) => {
    const post = document.querySelector(`[data-post-id="${postId}"]`)
    post.remove()
}
const createWrapperEl = () => {
    const divEl = document.createElement('div')
    divEl.classList = 'posts'
    return divEl

}

// data
const posts = [
    getInitialPost('React hooks', 'About react hooks'),
    getInitialPost('React Components', 'About react components'),
    getInitialPost('JS', 'About JS classes'),
]


const rootEl = document.querySelector('#root')


posts.forEach(post => {
    const postEl = createWrapperEl()
    postEl.dataset.postId = post.id
    const h2_El = document.createElement('h2')
    h2_El.textContent = post.name

    const p_El = document.createElement('p')
    p_El.textContent = post.description

    const button_El = document.createElement('button')

    button_El.textContent = 'Видалити пост'
    button_El.addEventListener('click', (event) => handleRemovePost(post.id))

    postEl.append(h2_El)
    postEl.append(p_El)
    postEl.append(button_El)

    rootEl.append(postEl)
})




