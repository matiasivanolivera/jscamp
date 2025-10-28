const botones_aplicar = document.querySelectorAll('.button-apply-job')

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


filter.addEventListener('change', function () {
    const jobcards = document.querySelectorAll('.jobcard')
    const selectedLocation = filter.value

    jobcards.forEach(job => {
        const modalidad = job.dataset.modalidad

        selectedLocation === '' || selectedLocation === modalidad ? 'block' : 'none'
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

            article.dataset.tecnologia = job.data.tecnologia
            article.dataset.ubicacion = job.data.ubicacion
            article.dataset.modalidad = job.data.modalidad
            /* article.dataset.typeOfContract = job.data.typeOfContract */

            article.innerHTML = `
                <header class="jobcard__header">
                    <div class="header-container-1">
                        <h3 class="jobcard__title">${job.titulo}</h3>
                        <small class="jobcard__meta">
                            <span>${job.empresa}</span>
                            <span> | </span>
                            <span>${job.ubicacion}</span>
                        </small>
                    </div>
                    <button class="button-apply-job">Aplicar</button>
                </header>
                <p class="jobcard__desc">${job.descripcion}</p>
            `

            conteiner_jobs.appendChild(article); 

        })
    });