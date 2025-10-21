const botones_aplicar = document.querySelectorAll('.button-apply-job')

botones_aplicar.forEach(boton => {
    boton.addEventListener('click', () => {
    boton.disabled = true
    boton.textContent = '¡Aplicado!'
    boton.classList.add('is-applied')
});

})