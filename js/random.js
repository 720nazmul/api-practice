const loadImages = () => {
    fetch('https://randomuser.me/api/?picture=50')
        .then(res => res.json())
        .then(data => displayImages(data))
}

loadImages()
const displayImages = (data) => {
    console.log(data.results)
    const details = data.results;
    const userDetails = document.getElementById('user-details');
    for (const detail of details) {
        const div = document.createElement('div');
        div.innerHTML = `
        <img src="${detail.picture.medium}">
        <button onclick="loadImages(${detail.name.first})">user detail</button>
        <h3> name:${detail.name.first}</h3>
        `;
        userDetails.appendChild(div);
        // console.log(image)
    }
}