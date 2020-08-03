
const MENU = document.getElementById('menu')
const CERRAR = document.getElementById('menu-item')
const MENUICON = document.getElementById('menu-icon')
const MAIL = document.getElementById('txtMail')
const FORM = document.getElementById('form-mail')

//Desplegar el menú
MENUICON.addEventListener('click', () =>{
    MENUICON.classList.toggle('change')
    MENU.classList.toggle('active')
})

//Cierra el menú al hacer clic en uno de sus elementos.

CERRAR.addEventListener('click', () =>{
    MENU.classList.remove('active')
    MENUICON.classList.remove('change')
})

//Manejo del correo 

FORM.addEventListener('submit', (e) =>{
    e.preventDefault()
    if(validar_correo(MAIL.value.toLowerCase().trim())){
        agregar_correo(MAIL.value.trim(),obtener_fecha())
        alerts('¡Gracias!','Pronto me pondré en contacto','success')
        MAIL.value = ''
    }
    else{
        alerts('¡Correo inválido!','Por favor, ingrese su correo','error')
        MAIL.focus()
        obtener_fecha()
    }
    
})

function validar_correo(correo){
    let expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/

    if(expReg.test(correo)){
        return (true)
    }
    else{
        return (false)
    }
}

function alerts(title,text,icon){
    swal.fire({
        title: title,
        text: text,
        icon: icon,        
        allowOutsideClick: true,
        allowEscapeKey: false,
        allowEnterKey: true,
        stopKeydownPropagation: false,
        })
}

function obtener_fecha(){
    let fecha = new Date()
    return fecha
}

//conexion
firebase.initializeApp ({
    apiKey: "AIzaSyCKzKK85FK1t2Fnvh2Xm4w2DCTaIJcHEl4",
    authDomain: "pagsergio-8a89c.firebaseapp.com",
    databaseURL: "https://pagsergio-8a89c.firebaseio.com",
    projectId: "pagsergio-8a89c"
})
const DB = firebase.firestore()

function agregar_correo(mail,fecha){
    DB.collection('correos').add({
        correo: mail,
        fecha: fecha
    })
}


