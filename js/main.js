//Funcion que inicia la pagina
function iniciarEncriptador(){
    let buttonEncriptar = document.getElementById('btnEncrypted')

    buttonEncriptar.addEventListener('click', encryptMessenger)

    let buttonDecrypt = document.getElementById('btnDecrypt')

    buttonDecrypt.addEventListener('click', decryptMessenger)

    let btnCopy = document.getElementById('btnCopy')
    btnCopy.style.display = 'none'
}

//Funcion del boton de encriptacion
function encryptMessenger(){
    let myMessenger = document.getElementById("myTextEncrypted").value
    let myMessengerEncrypted = ""
    for (let index = 0; index < myMessenger.length; index++) {
        switch (myMessenger[index]) {
            case 'a':myMessengerEncrypted = myMessengerEncrypted + "ai"; break;
            case 'e':myMessengerEncrypted = myMessengerEncrypted + "enter"; break;
            case 'i':myMessengerEncrypted = myMessengerEncrypted + "imes"; break;
            case 'o':myMessengerEncrypted = myMessengerEncrypted + "ober"; break;
            case 'u':myMessengerEncrypted = myMessengerEncrypted + "ufat"; break;
            default: myMessengerEncrypted = myMessengerEncrypted + myMessenger[index]
                break;
        }
    }

    let imgM = document.getElementById('imgM')
    let titleIMG = document.getElementById('titleIMG')
    imgM.style.display = 'none'
    titleIMG.style.display = 'none'

    let btnCopy = document.getElementById('btnCopy')
    btnCopy.style.display = 'block'

    showMessenger(myMessengerEncrypted)
}

//Funcion del boton de desencriptacion
function decryptMessenger(){
    let myMessengerEncrypted = document.getElementById("myTextEncrypted").value
    let myMessenger = ""
    for (let index = 0; index < myMessengerEncrypted.length; index++) {
        switch (myMessengerEncrypted[index]) {
            case 'a':
                if(myMessengerEncrypted.substring(index,(index + 2)) == "ai"){
                    myMessenger = myMessenger + 'a'
                    index++
                }else{
                    myMessenger = myMessenger + myMessengerEncrypted[index]
                }; break;
            case 'e':
                if(myMessengerEncrypted.substring(index,(index + 5)) == "enter"){
                    myMessenger = myMessenger + 'e'
                    index = index + 4
                }else{
                    myMessenger = myMessenger + myMessengerEncrypted[index]
                }; break;
            case 'i':
                if(myMessengerEncrypted.substring(index,(index + 4)) == "imes"){
                    myMessenger = myMessenger + 'i'
                    index = index + 3
                }else{
                    myMessenger = myMessenger + myMessengerEncrypted[index]
                }; break;
            case 'o':
                if(myMessengerEncrypted.substring(index,(index + 4)) == "ober"){
                    myMessenger = myMessenger + 'o'
                    index = index + 3
                }else{
                    myMessenger = myMessenger + myMessengerEncrypted[index]
                }; break;
            case 'u':
                if(myMessengerEncrypted.substring(index,(index + 4)) == "ufat"){
                    myMessenger = myMessenger + 'u'
                    index = index + 3
                }else{
                    myMessenger = myMessenger + myMessengerEncrypted[index]
                }; break;
            default: myMessenger = myMessenger + myMessengerEncrypted[index]
                break;
        }
    }
    let imgM = document.getElementById('imgM')
    let titleIMG = document.getElementById('titleIMG')
    imgM.style.display = 'none'
    titleIMG.style.display = 'none'

    let btnCopy = document.getElementById('btnCopy')
    btnCopy.style.display = 'block'

    showMessenger(myMessenger)
}

//Funcion que muestra el mensaje en pantalla
function showMessenger(messeng){
    document.getElementById('txtAreaText').value = messeng
    document.getElementById('myTextEncrypted').value = ""
}

//Funcion para copiar texto
function copyText(){
    let conteiner = document.getElementById('txtAreaText').value

    navigator.clipboard.writeText(conteiner)
}

//Funcion que solo permite escribir texto en minusculas
function onlyTxt(){
    if(((event.keyCode > 96) && (event.keyCode < 123)) || (event.keyCode == 32)){
        event.returnValue = true
    }else{
        event.returnValue = false
    }
}

window.addEventListener('load', iniciarEncriptador)