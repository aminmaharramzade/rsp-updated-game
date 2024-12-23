const myImg = document.querySelector("#myImg");
const botImg = document.querySelector("#botImg");
const statusMe = document.querySelector("#statusMe");
const statusBot = document.querySelector("#statusBot");
const btnRock = document.querySelector("#btnRock");
const btnPaper = document.querySelector("#btnPaper");
const btnScissors = document.querySelector("#btnScissors");
const countMe = document.querySelector("#countMe");
const countBot = document.querySelector("#countBot");
const btnSection = document.querySelector("#btnSection");

let pointMe = 0;
let pointComp = 0;

function startGame(myOption) {
  const options = ["R", "S", "P"];
  const compOption = options[Math.floor(Math.random() * options.length)];

  const images = {
    R: "./assets/images/rock.png",
    S: "./assets/images/scissors.png",
    P: "./assets/images/paper.png",
  };

  if (myOption == compOption) {
    setTimeout(function () {
      statusMe.textContent = "DRAW";
      statusBot.textContent = "DRAW";
      myImg.src = images[myOption];
      botImg.src = images[compOption];
      statusMe.style.color = "blue";
      statusBot.style.color = "blue";
      countMe.textContent = pointMe;
      countBot.textContent = pointComp;

      myImg.style.width = "100px";
      botImg.style.width = "100px";
      myImg.classList.remove("moves");
      botImg.classList.remove("moves");
      btnSection.classList.remove("noview");
    }, 1100);
    myImg.classList.add("moves");
    botImg.classList.add("moves");
    myImg.src = "./assets/images/rock.png";
    botImg.src = "./assets/images/rock.png";
    btnSection.classList.add("noview");
  } else if (
    (myOption == "R" && compOption == "S") ||
    (myOption == "S" && compOption == "P") ||
    (myOption == "P" && compOption == "R")
  ) {
    setTimeout(function () {
      statusMe.textContent = "WIN";
      statusBot.textContent = "LOSE";
      pointMe++;
      countMe.textContent = pointMe;
      countBot.textContent = pointComp;

      statusMe.style.color = "green";
      statusBot.style.color = "red";

      myImg.src = images[myOption];
      botImg.src = images[compOption];

      myImg.style.width = "100px";
      botImg.style.width = "100px";
      myImg.classList.remove("moves");
      botImg.classList.remove("moves");
      btnSection.classList.remove("noview");
    }, 1100);
    myImg.classList.add("moves");
    botImg.classList.add("moves");
    myImg.src = "./assets/images/rock.png";
    botImg.src = "./assets/images/rock.png";
    btnSection.classList.add("noview");
  } else if (myOption == undefined) {
    myImg.classList.remove("moves");
    botImg.classList.remove("moves");
  } else {
    setTimeout(function () {
      statusMe.textContent = "LOSE";
      statusBot.textContent = "WIN";
      pointComp++;
      countMe.textContent = pointMe;
      countBot.textContent = pointComp;

      statusMe.style.color = "red";
      statusBot.style.color = "green";

      myImg.src = images[myOption];
      botImg.src = images[compOption];

      myImg.style.width = "100px";
      botImg.style.width = "100px";

      myImg.classList.remove("moves");
      botImg.classList.remove("moves");
      btnSection.classList.remove("noview");
    }, 1100);

    myImg.classList.add("moves");
    botImg.classList.add("moves");
    myImg.src = "./assets/images/rock.png";
    botImg.src = "./assets/images/rock.png";
    btnSection.classList.add("noview");
  }
}

startGame();
