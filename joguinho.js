const tent = document.querySelector('#tent');
const resp = document.querySelector('.resposta');
const lista = document.querySelector('.lista');
const bot = document.querySelector('.botao');
let randomNumber = Math.floor(Math.random() * 10) + 1;
let open = 0;
let resetButtom;
var contador = 0
function submit(){

    if (tent.value == randomNumber && contador < 3){
        resp.textContent = 'Parabéns vc acertou!!!';
        resp.style.backgroundColor = 'rgb(36, 212, 30)';
        setGameOver();
    }else if (contador == 2){
        alert(`Suas chances acabaram! O numero correto era ${randomNumber}`);
        resp.textContent = 'GAME OVER !!!';
        setGameOver();
    }else{
        if (tent.value > randomNumber){
            bot.textContent = 'Está muito alto!';
        }else{
            bot.textContent = 'Está muito baixo!';
        }
        contador++;
        resp.textContent = 'Errou!'
        resp.style.backgroundColor = 'rgb(204, 3, 3)';
        if (open){
            lista.textContent += tent.value + ' ';
        }else{
            lista.textContent = `Tentativas incorretas: ${tent.value} `;
            open = 1;
        }
        tent.value = '';
        tent.focus();
    }
}

function setGameOver(){
    bot.textContent = '';
    tent.disabled = true;
    resetButtom = document.createElement('button');
    resetButtom.textContent = "Começar novo jogo";
    bot.appendChild(resetButtom);
    resetButtom.addEventListener('click', resetGame);
}

function resetGame(){

    const finalResult = document.querySelectorAll('.finalResult p');
    for(let i = 0; i < finalResult.length; i++){
        finalResult[i].textContent = '';
    }

    resetButtom.remove();
    open = 0;
    contador = 0;
    tent.disabled = false;
    tent.value = '';
    tent.focus();
    randomNumber = Math.floor(Math.random() * 10) + 1;
}