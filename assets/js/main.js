// wait for document to start loading before running the game
document.addEventListener('DOMContentLoaded',()=>{
    let buttons=document.getElementsByTagName('button');
    
    for(let button of buttons){
        button.addEventListener('click',function(){
            if(this.getAttribute('data-type')==="submit"){
                alert('you clicked submit!');
            }else{
                let gameType=this.getAttribute('data-type');
                alert(`you clicked ${gameType}`);
               
            }

        });

    }

})
/**
 * main game loop called when script is loaded
 * after users answer has been processed
 */
function runGame(){
    let num1=Math.floor(Math.random() * 25)+ 1;
    let num2=Math.floor(Math.random() * 25)+ 1;

};
runGame();
function  checkAnswer(){
   
};

function calculateCorrectAnswer(){

};

function incrementScore(){

};

function incrementWrongAnswer(){

};

function displayAdditionQuestion(){

};

function displaySubtractQuestion(){

};

function displayMultiplyQuestion(){

};