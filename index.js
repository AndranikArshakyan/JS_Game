let start = document.querySelector("#start");
let game =  document.querySelector("#game");
let gameTime = document.querySelector("#game-time");
let time = document.querySelector("#time");
let resultHeader = document.querySelector("#result-header");
let timeHeader=  document.querySelector("#time-header");
let result = document.querySelector("#result")
start.addEventListener("click", startGame);


function startGame(){
    start.classList.add("hide");
    resultHeader.classList.add("hide");
    timeHeader.classList.remove("hide");
    game.style.backgroundColor = "white";
    gameTime.disabled = true;
    renderRect();
    scoreCounter = 0;
    let interval = setInterval(function (){
        let timer = parseFloat(time.textContent);

        if (timer <= 0) {
            clearInterval(interval);
            endGame();
        } else{
            time.textContent = (timer - 0.1).toFixed(1);
        }
    }, 100);
    
}

function endGame(){
    resultHeader.classList.remove("hide");
    timeHeader.classList.add("hide");
    start.classList.remove("hide");
    game.innerHTML = "";
    game.style = "";
    result.textContent = scoreCounter;
    gameTime.disabled = false;
    changeTime()
}

let scoreCounter = 0;
function checkScore() {
    scoreCounter +=1;
}

let Rect = document.createElement("div");
function renderRect(){
    Rect.style.height = Rect.style.width = `${Math.random() * (80 - 25) + 25}px`;
    Rect.style.backgroundColor = `rgb(${Math.random() * (255)},
                                      ${Math.random() * (255)},
                                      ${Math.random() * (255)})`;
    Rect.style.position = "absolute";
    Rect.style.left = `${Math.random() * (80)}%`;
    Rect.style.top = `${Math.random() * (80)}%`;
    game.appendChild(Rect);
}

gameTime.addEventListener("input", changeTime);
Rect.addEventListener("click", renderRect);
Rect.addEventListener("click", checkScore);

function changeTime(){
    time.textContent = gameTime.value; 
}
