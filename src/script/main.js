function cronometro() {
    const dataEvento = new Date("2023/05/23")
    const dataAtual = new Date()

    const diferencial = dataEvento - dataAtual
    const seg = Math.floor(diferencial / 1000)
    const min = Math.floor(seg / 60)
    const hr = Math.floor(min / 60)
    const dias = Math.floor(hr / 24)

    const [diasHtml, hrHtml, minHtml, segHtml] = document.querySelectorAll( "#timer-day, #timer-hr, #timer-min, #timer-seg")
    
    diasHtml.textContent = `${dias}`
    hrHtml.textContent = `${(hr % 24).toString().padStart(2, "0")}`
    minHtml.textContent = `${(min % 60).toString().padStart(2, "0")}`
    segHtml.textContent = `${(seg % 60).toString().padStart(2, "0")}`

    let intervalId
    if (dataAtual >= dataEvento) {
        clearInterval(intervalId)
    }
}

const exibirTempoRestante = () => {
    cronometro()
    intervalId = setInterval(cronometro, 1000)
}

exibirTempoRestante()
