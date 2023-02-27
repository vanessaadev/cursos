const CURSOS = document.querySelectorAll('[data-item="curso"]'); 
//Ele pega todas a lista de elementos que contenham esse data-item="curso"
const QUANTIDADE = document.getElementById('quantidade');
// Ele recebe o elemento específico

CURSOS.forEach((cadaInput) => {  //percorre cada um dos elementos com essa expressão, no  caso data-item="curso" que eu pedi para receber lá em cima
    cadaInput.addEventListener('change', () => { //addEventListener sempre vai ficar atento as changes(alterações) e aí ele vai dar um 
        let qtd = Number(QUANTIDADE.innerHTML); //Como tudo que vem do html é string, aqui eu passo de string para number

        if(cadaInput.checked === true) { //se cadaInput está ticado (de baixo)
            QUANTIDADE.innerHTML = qtd + 1; //quero que QUANTIDADE que é 0 receba let qtd e some + 1; 
            return;
        }
                //senão, (de baixo)
        QUANTIDADE.innerHTML = qtd - 1; //quero que QUANTIDADE receba qtd e diminua 1
    });
});


