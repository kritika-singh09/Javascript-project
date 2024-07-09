let userScore=0;
let compScore=0;

const choices =document.querySelectorAll(".choice");
const msg=document.querySelector('#msg');
const userScorePara=document.querySelector('#user-score');
const compScorePara=document.querySelector('#comp-score');
const genCompChoice =()=>{
  const options =["rock" ,"paper","scissors"];
 const randIdx= Math.floor(Math.random()*3);
//rock,paper and scissors
return options[randIdx];
};
const drawGame = ()=>{
  msg.innerText="GAme was Draw.Play again.";
  msg.Style.backgroundColor="#081b31";
};
const showWinner=(userWin,userChoice,compChoice)=>{
  if(userWin){
    userScore++;
    userScore.innerText=userScore;
    msg.innerText=`you win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor="green";
  }else{
    compScore++;
    compScorePara.innerText=compScore;
    msg.innerText=`You lost.${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor="red";
  }
};
const playGame =(userChoice) =>{
//console.log("user choice=",userChoice);
//gererate computer -> modular
const compChoice=genCompChoice();
//console.log("comp choice=",compChoice);
if(userChoice===compChoice){
  //Draw Game
  drawGame();
}else{
  let userWin =true;
  if(userChoice==="rock"){
    //scissors.paper
    userWin=compChoice==="paper"?false:true;
  }else if(userChoice==="paper"){
   userWin= compChoice==="scissors"?false:true;
  }else{
    //rock,paper
    userWin=compChoice==="rock"?false:true;
  }
  showWinner(userWin,userChoice,compChoice);
}
};
choices.forEach((choice)=> {
  console.log (choice);
  choice.addEventListener("click",() =>{
    const userChoice=choice.getAttribute("id")
//console.log("choice was clicked",userChoice);
playGame(userChoice);
  });
});