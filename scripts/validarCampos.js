const formulario1 = document.querySelector('#form')
const inputName = document.querySelector('#inputname')
const inputEmail = document.querySelector('#inputEmail')
const inputCpf = document.querySelector('#inputCpf')
const inputRadio = document.querySelector('#inputRadio')
const inputRadioError = document.querySelector('#inputRadioError')


formulario1.onsubmit = (event) => {
    event.preventDefault( )
    if(document.forms[0],inputName.value == 0){
        inputName.classList.add('hidden')
        inputName.classList.remove('input_form1')
    } else {
        inputName.classList.add('input_form1')
        inputName.classList.remove('hidden')
    }
    if(document.forms[0],inputEmail.value == 0){
        inputEmail.classList.add('hidden')
        inputEmail.classList.remove('input_form1')
    } else {
        inputEmail.classList.add('input_form1')
        inputEmail.classList.remove('hidden')
    }
    if(document.forms[0],inputCpf.value == 0){
        inputCpf.classList.add('hidden')
        inputCpf.classList.remove('input_form1')
    } else {
        inputCpf.classList.add('input_form1')
        inputCpf.classList.remove('hidden')
    }
}   

