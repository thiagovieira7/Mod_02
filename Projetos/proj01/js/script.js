const elementoInicio = document.getElementById('Gatinhas'); 
const elementoApanha = document.querySelector('#clicando'); 
const elementoImg = document.querySelector('#imagem1') 
let elementoBtn = document.querySelector('#alterar') 
elementoBtn.addEventListener('click', () =>{
    if(elementoBtn.value == "CLICK"){
        elementoImg.src = './midia/img/jhonny_se_mostrando.jpg' 
        elementoApanha.innerText = "E aí gatinha, você deixou cair alguma coisa? Meu queixo!"
        elementoBtn.value = "cliiica"     

        
    } else if(elementoBtn.value == 'cliiica'){ 
        elementoImg.src = './midia/img/Johny_Bravo_arrebentado.jpg'
        elementoInicio.innerText = "UUUiiii" 
        elementoApanha.innerText = "Essa doeu...."
        elementoBtn.value = "fim" 
    } else {
        elementoImg.src = './midia/img/johnny-bravo-dancando.gif'
        elementoInicio.innerText = "De Boas... Gatinhas...." 
        elementoApanha.innerText = "Vamos dançar???" 
        elementoBtn.value = 'CLICK' 
    }
}) 