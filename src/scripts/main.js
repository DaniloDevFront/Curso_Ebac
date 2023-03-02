AOS.init();

const dataDestino = new Date("03/02/2023 19:00");

function atualizaTempoRestante() {
    const dataAtual = new Date();

    if (dataAtual >= dataDestino) {
        document.querySelector(".hero__text__data").textContent = "Evento encerrado";
        clearInterval(intervalo); // Parar a atualização do setInterval
        
        return;
    }

    const difMilissegundos = dataDestino - dataAtual;
    const segundos = Math.floor(difMilissegundos / 1000);
    const minutos = Math.floor(segundos / 60);
    const horas = Math.floor(minutos / 60);
    const dias = Math.floor(horas / 24);

    const mensagem = `${dias} dias, ${horas % 24} horas e ${minutos % 60} minutos e ${segundos % 60}segundos`;
    document.querySelector(".hero__text__data").textContent = mensagem;
}

atualizaTempoRestante(); // Chamada para exibir o tempo restante inicialmente

setInterval(atualizaTempoRestante, 1000); // Chamar a função a cada segundo para atualizar o tempo restante na tela
