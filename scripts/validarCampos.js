const formulario1 = document.querySelector('#form')
const inputName = document.querySelector('#inputname')
const errorName = document.querySelector('#errorName')
const inputEmail = document.querySelector('#inputEmail')
const errorEmail = document.querySelector('#errorEmail')
const inputCpf = document.querySelector('#inputCpf')
const errorCpf = document.querySelector('#errorCpf')
const inputRadio = document.querySelector('#inputRadio')
const inputRadioError = document.querySelector('#inputRadioError')


formulario1.onsubmit = (event) => {
    event.preventDefault( )
    if(document.forms[0],inputName.value == 0){
        inputName.classList.add('hidden')
        inputName.classList.remove('input_form1')
        errorName.innerHTML = 'por favor digite seu nome'
    } else {
        inputName.classList.add('input_form1')
        inputName.classList.remove('hidden')
        errorName.innerHTML = ''

    }
    if(document.forms[0],inputEmail.value == 0){
        inputEmail.classList.add('hidden')
        inputEmail.classList.remove('input_form1')
        errorEmail.innerHTML = 'por favor digite seu email'
    } else {
        inputEmail.classList.add('input_form1')
        inputEmail.classList.remove('hidden')
        errorEmail.innerHTML = ''
    }
    if(document.forms[0],inputCpf.value == 0){
        inputCpf.classList.add('hidden')
        inputCpf.classList.remove('input_form1')
        errorCpf.innerHTML = 'por favor digite seu cpf'
    } else {
        inputCpf.classList.add('input_form1')
        inputCpf.classList.remove('hidden')
        errorCpf.innerHTML = ''
    }
}   

const formulario2 = document.querySelector('#form2')
const inputNameAmigo = document.querySelector('#inputNameAmigo')
const inputEmailAmigo = document.querySelector('#inputEmailAmigo')
const errorNameAmigo = document.querySelector('#errorNameAmigo')
const errorEmailAmigo = document.querySelector('#errorEmailAmigo')

formulario2.onsubmit = (event) => {
    event.preventDefault()
    if(document.forms[1], inputNameAmigo.value == 0){
        inputNameAmigo.classList.add('hidden')
        inputNameAmigo.classList.remove('input')
        errorNameAmigo.innerHTML = 'por favor digite um nome'
    } else  {
        inputNameAmigo.classList.add('input')
        inputNameAmigo.classList.remove('hidden')
        errorNameAmigo.innerHTML = ''
    }
    if(document.forms[1], inputEmailAmigo.value == 0){
        inputEmailAmigo.classList.add('hidden')
        inputEmailAmigo.classList.remove('input')
        errorEmailAmigo.innerHTML = 'por favor digite um email'
    } else  {
        inputEmailAmigo.classList.add('input')
        inputEmailAmigo.classList.remove('hidden')
        errorEmailAmigo.innerHTML = ''
    }}


