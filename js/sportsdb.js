const loadInfo = () => {
    fetch('https://www.thesportsdb.com/api/v1/json/2/all_sports.php')
        .then(res => res.json())
        .then(data => displayInfo(data.sports))
}
loadInfo()

const displayInfo = (players) => {
    const playerSpinner = document.getElementById('player-spinner');
    playerSpinner.style.display = 'none';
    const sportsConatiner = document.getElementById('sports-container');
    players.forEach(player => {
        console.log(player.idSport)
        const sportsDiv = document.createElement('div');
        sportsDiv.classList.add('col-md-3')
        sportsDiv.innerHTML = `
        
               <div class="shadow rounded p-4 m-2 p-3">
               <img class="img-fluid" src="${player.strSportThumb}"
                    <h4>Game:${player.strSport}</h4>
                    <p>${player.strSportDescription.slice(0, 210)}</p>
                    <button class="btn-primary" onclick="loadSportsDetails(${player.idSport})">Details</button>
               </div>
        `;
        sportsConatiner.appendChild(sportsDiv);
    })
}
const loadSportsDetails = () => {
    fetch('https://www.thesportsdb.com/api/v1/json/2/all_sports.php')
        // some correction will be added
        .then(res => res.json())
        .then(data => displaySportsDetails(data))
}
const displaySportsDetails = (id) => {
    const playerDetails = document.getElementById('player-details');
    playerDetails.innerText = '';
    const detailsBox = document.createElement('div');
    detailsBox.innerHTML = `
    <h3>ID:${id.idSport} $</h3>
    `;
    playerDetails.appendChild(detailsBox);
}