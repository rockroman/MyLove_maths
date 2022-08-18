// wait for document to start loading before running the game
document.addEventListener('DOMContentLoaded',()=>{
    let buttons=document.getElementsByTagName('button');
    
    for(let button of buttons){
        button.addEventListener('click',function(){
            if(this.getAttribute('data-type')==="submit"){
                alert('you clicked submit!');
            }else{
                let gameType=this.getAttribute('data-type');
                runGame(gameType);
               
            }

        });

    }
    runGame('addition');

})
/**
 * main game loop called when script is loaded
 * after users answer has been processed
 */
function runGame(gameType){
    let num1=Math.floor(Math.random() * 25)+ 1;
    let num2=Math.floor(Math.random() * 25)+ 1;
    if(gameType==='addition'){
        displayAdditionQuestion(num1,num2)
    }else{
        alert(`unknown game type:${gameType}`);
        throw`unknown game type:${gameType}.aborting!`
    }

};

function  checkAnswer(){
   
};

function calculateCorrectAnswer(){

};

function incrementScore(){

};

function incrementWrongAnswer(){

};

function displayAdditionQuestion(operand1,operand2){
    document.getElementById('operand1').textContent =operand1;
    document.getElementById('operand2').textContent =operand2;
    document.getElementById('operator').textContent ='+';

};

function displaySubtractQuestion(){

};

function displayMultiplyQuestion(){

};