/* const fetch = require("nodemailer/lib/fetch") */

const botones_aplicar = document.querySelectorAll('.button-apply-job')

/* botones_aplicar.forEach(boton => {
    boton.addEventListener('click', () => {
    boton.textContent = '¡Aplicado!'
    boton.classList.add('is-applied')
    boton.disabled = true
});

}) */

const joblistol = document.querySelector('.joblist')

joblistol.addEventListener('click', function (event) {
    const element = event.target

    if (element.classList.contains('button-apply-job')) {
        element.textContent = '¡Aplicado!'
        element.classList.add('is-applied')
        element.disabled = true
    }
})

const filter = document.querySelector('#filter-location')
const jobcards = document.querySelectorAll('.jobcard')

filter.addEventListener('change', function () {
    const selectedLocation = filter.value

    jobcards.forEach(job => {
        const modalidad = job.dataset.modalidad

        if (selectedLocation === '' || selectedLocation === modalidad) {
            job.style.display = 'block'
        } else {
            job.style.display = 'none'
        }
    })
})


const conteiner_jobs = document.querySelector('.joblist')

fetch("./data.json")
    .then(response => {
        return response.json();
    })
    .then((jobs) => {
        jobs.forEach(job => {
           /*  console.log('tengo los resultados de jobs');
            console.log(job); */

            const article = document.createElement('article')
            article.className = 'jobcard'

            article.dataset.technology = job.data.technology
            article.dataset.location = job.data.location
            article.dataset.modalidad = job.data.modalidad
            /* article.dataset.typeOfContract = job.data.typeOfContract */

            article.innerHTML = `<div>
            <h3 class="jobcard__title">${job.titulo}</h3>
            <small class="jobcard__meta">
            <span> ${job.empresa} | ${job.ubicacion} </span>
            </small>
            <p> ${job.descripcion} </p>
            
            </div>
            <button class="button-apply-job">Aplicar</button>`

            conteiner_jobs.appendChild(article); 

        })
    });