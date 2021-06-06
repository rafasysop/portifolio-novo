
const btnResume = document.querySelector('#li-resume')
const btnClose= document.querySelector('.close')
const resume = document.getElementById('resume')
const exibir = () => {
    // resume.style.display = 'block'
    // resume.style.right = '5vw';
    console.log(' exibe');
    resume.classList.add('show-resume')
}

const fechar = () => {
    // resume.style.display = 'none'
    // resume.style.right = '-15vw';
    console.log('fecha');
    resume.classList.remove('show-resume')
}
btnResume.addEventListener("click", exibir)
btnClose.addEventListener("click", fechar)


