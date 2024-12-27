let userScore=0;
let compScore=0;

const choices= document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");

const genComputerChoice= () =>{
    let options=["rock","paper", "scissors"]
    //rock , paper, scissores
    const randidx =Math.floor(Math.random()*3);
    return options[randidx];

}
const drawGame=()=>{
    console.log("Game was draw");
    msg.innerText="Gmae was Draw Play Again";
    msg.style.backgroundColor ="#081b13";
    
};

const showWinner=(userWin, userChoice, compChoice)=>{
    if(userWin){
        userScore++;
        userScorepara.innerText=userScore;
        console.log("you win!");
        msg.innerText=`You win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor ="green";
    }else{
        compScore++;
        compScorepara.innerText=compScore;
        console.log("you lose");
        msg.innerText=`You lost, ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor ="red";
    }
}

const playGame=(userChoice)=>{
    console.log("user choice=", userChoice);
    //Genrate computer choice
    const compChoice=genComputerChoice();
    console.log("comp choice = ",compChoice);

    if(userChoice===compChoice){
        drawGame();

    }else{
        let userWin=true;
        if(userChoice=="rock"){
            //scissor , paper
            userWin = compChoice==="paper" ? false : true;
        }else if(userChoice==="paper"){
            //rock scissor
            userWin=compChoice==="scissors" ? false: true;
        }else{
            //rock , paper
            userWin=compChoice=="rock"? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
    
};

choices.forEach((choice)=>{
    //console.log(choice);
    const userChoice=choice.getAttribute("id");
    choice.addEventListener("click", ()=>{

        //console.log("Choice was clicked",userChoice);
        playGame(userChoice);
    });
}); 