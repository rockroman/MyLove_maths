// wait for document to start loading before running the game
document.addEventListener('DOMContentLoaded',()=>{
    let buttons=document.getElementsByTagName('button');
    
    for(let button of buttons){
        button.addEventListener('click',function(){
            if(this.getAttribute('data-type')==="submit"){
                checkAnswer();
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
/**
 * checks if users answer is same as returned answer 
 * from calculateCorrectAnswer array
 */
function  checkAnswer(){
    let userAnswer=parseInt(document.getElementById('answer-box').value);
    let calculatedAnswer=calculateCorrectAnswer();
    if(userAnswer===calculatedAnswer[0]){
        alert('you got it right')
        incrementScore();
    }else{
        incrementWrongAnswer();
        alert(`nooo you answered ${userAnswer}.but right answer is ${calculatedAnswer[0]}`);
        
    }
    
   runGame(calculatedAnswer[1]);
};

/**
 * gets the operand (numbers) and the operator(plus,minus)
 * directly from the dom and returns correct answer
 */
function calculateCorrectAnswer(){
    let operand1= parseInt(document.getElementById('operand1').innerText);
    let operand2= parseInt(document.getElementById('operand2').innerText);
    let operator=document.getElementById('operator').innerText;

    if(operator==='+'){
        return[operand1+operand2,'addition']
    }else{
        alert(`unimplemented operator ${operator}`);
        throw `unimplemented operator ${operator}.aborting!`
    }
   
};
/**
 * get the current score from the DOM and increment it by one
 * 
 */
function incrementScore(){
    let oldScore=parseInt(document.getElementById('score').innerText);
    document.getElementById('score').innerText= ++oldScore;

};
/**
 * get the current incorrect answers value from the DOM and increment it by one
 * 
 */
function incrementWrongAnswer(){
    let oldScore=parseInt(document.getElementById('incorrect').innerText);
    document.getElementById('incorrect').innerText= ++oldScore;

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