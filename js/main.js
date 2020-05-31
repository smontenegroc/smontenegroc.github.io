
const menu = document.getElementById('menu');
const cerrar = document.getElementById('menu-item');
const menuIcon = document.getElementById('menu-icon');
const mail = document.getElementById('txtMail');
const form = document.getElementById('form-mail');

//Desplegar el menú
menuIcon.addEventListener('click', () =>{
    menuIcon.classList.toggle('change');
    menu.classList.toggle('active');
})

//Cierra el menú al hacer clic en uno de sus elementos.

cerrar.addEventListener('click', () =>{
    menu.classList.remove('active');
    menuIcon.classList.remove('change');
});

//Manejo del correo 

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    if(validar_correo(mail.value.toLowerCase().trim())){
        // console.log(`Correo es: ${mail.value}`);
        agregar_correo(mail.value.trim(),obtener_fecha());
        alert_correo_valido();
        mail.value = '';
    }
    else{
        alert_correo_invalido();
        mail.focus();
        obtener_fecha();
    }
    
});

function validar_correo(correo){
    var expReg= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

    if(expReg.test(correo)){
        return (true);
    }
    else{
        return (false);
    }
}

function alert_correo_valido(){
    swal.fire({
    title: 'Gracias!',
	text: 'Pronto me pondré en contacto',
	icon: 'success',        
	allowOutsideClick: true,
	allowEscapeKey: false,
	allowEnterKey: true,
	stopKeydownPropagation: false,
    });
}

function alert_correo_invalido(){
    swal.fire({
    title: 'Correo inválido!',
	text: 'Por favor, ingrese su correo',
	icon: 'error',        
	allowOutsideClick: true,
	allowEscapeKey: false,
	allowEnterKey: true,
	stopKeydownPropagation: false,
    });
}

function obtener_fecha(){
    var fecha = new Date();
    return fecha;
}

//conexion
firebase.initializeApp ({
    apiKey: "AIzaSyCKzKK85FK1t2Fnvh2Xm4w2DCTaIJcHEl4",
    authDomain: "pagsergio-8a89c.firebaseapp.com",
    databaseURL: "https://pagsergio-8a89c.firebaseio.com",
    projectId: "pagsergio-8a89c"
})
const db = firebase.firestore();

function agregar_correo(mail,fecha){
    db.collection('correos').add({
        correo: mail,
        fecha: fecha
    })
}



