const loadComments = () => {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => displayComments(data));
}
loadComments()
const displayComments = (comments) => {
    const buttonFeild = document.getElementById('comments-details');
    comments.forEach(comment => {
        const div = document.createElement('div');
        div.classList.add('comment');
        div.innerHTML = `
        name: ${comment.name}
        email: ${comment.email}
        <button onclick="loadCommentId(${comment.id})">details</button>
        `;
        console.log(comment)
        buttonFeild.appendChild(div);
    })
}
const loadCommentId = (details) => {
    const url = `https://jsonplaceholder.typicode.com/comments/${id}`
    fetch()
}