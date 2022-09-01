let players = [
  {
    name: 'Mick',
    score: 0
  },
  {
    name: 'Molly',
    score: 0
  },
  {
    name: 'Sam',
    score: 0
  },
  {
    name: 'Jeremy',
    score: 0
  }
]


function addMickPoint(){
  let mick = players.find(p => p.name == 'Mick')
  mick.score++
  console.log('add point',mick);
}

function addPoint(name){
  // debugger
  let player = players.find(p => p.name == name)
  console.log(player)
  player.score += 1
  updatePlayers()
}

function updatePlayers(){
  players.forEach(p => {
    console.log(p);
    let scoreCard = document.getElementById(p.name)
    console.log(scoreCard)
    let score = scoreCard.querySelector('.score')
    score.innerText = p.score
  })
}

// NOTE only need draw really if you're injecting code
function drawPlayers(){
let template = ''
players.forEach(p => {
  template += `
  <div class="col-6 bg-secondary" id="${p.name}">
    <h3>${p.name}</h3>
    <h4 class="score">${p.score}</h4>
    <button class="btn btn-danger">-</button>
    <button class="btn btn-primary" onclick="addPoint('${p.name}')">+</button>
  </div>
  `
  console.log(template);
})
document.getElementById('players').innerHTML = template
}

drawPlayers()
updatePlayers()