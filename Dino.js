//let firstSum = 50
//let secondSum = 50
//let sum = firstSum + secondSum
//let jumpoverObstacle = true
//let message = ""
//let messageEl = document.getElementById("message-el")

//function startGame();
  
  
  
  const dino = document.getElementById("dino");
  const cactus = document.getElementById("cactus");

  function jump() {
  if (dino.classList != "jump") {
    dino.classList.add("jump");

    setTimeout (function () {
      dino.classList.remove("jump");
    }, 300);
   }
  }

  let isAlive = setInterval (function () {
  
  let dinoTop = parseInt (window.getComputedStyle(dino).getPropertyValue("top"));

  
  let cactusLeft = parseInt (
    window.getComputedStyle(cactus).getPropertyValue("left")
  );

  
  if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
    
    alert("Game Over!");
   }
  }, 10);

  document.addEventListener("keydown", function (event) {
  jump();
  });

  var highscoretext = new text ({
    text: "highscore" + highscore });

    