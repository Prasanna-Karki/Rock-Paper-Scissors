let gameChoic=document.querySelectorAll(".Choices");
let PS=document.getElementById("pscore");
let CS=document.getElementById("cscore");
let pContent=document.getElementById("play");
let cContent=document.getElementById("comp");
let result=document.getElementById("result");
let compMove="";
let playerMove="";
let pscore=0;
let cscore=0;

gameChoic.forEach((choice)=>{
    choice.addEventListener(("click"),()=>{
        playerMove=choice.getAttribute("id");
        pContent.innerText="You chose "+playerMove;
        let compNum=Math.floor(Math.random()*3);
        if(compNum==0){
            compMove="Rock";
            cContent.innerHTML="Computer chose Rock";
        }
        else if(compNum==1){
            compMove="Paper"
            cContent.innerHTML="Computer chose Paper";
        }
        else{
            compMove="Scissor";
            cContent.innerHTML="Computer chose Scissor";
        }
        checkResult();
    })
});
function checkResult(){
    if(playerMove=="Rock"&&compMove=="Scissor"||playerMove=="Paper"&&compMove=="Rock"||playerMove=="Scissor"&&compMove=="Paper"){
        result.innerText="You won";
        pscore++;
        PS.innerText=pscore;
    }
    else if(playerMove=="Rock"&&compMove=="Paper"||playerMove=="Paper"&&compMove=="Scissor"||playerMove=="Scissor"&&compMove=="Rock"){
        result.innerText="Computer won";
        cscore++;
        CS.innerText=cscore;
    }
    else{
        result.innerText="Draw";
    }
    

}