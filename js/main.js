
const menu = document.getElementById('menu');
const cerrar = document.getElementById('menu-item');
const menuIcon = document.getElementById('menu-icon');
const mail = document.getElementById('txtMail');
const btnMail = document.getElementById('enviarMail');

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

btnMail.addEventListener('click', (e) =>{
    e.preventDefault();
    if(validar_correo(mail.value.toLowerCase().trim())){
        mail.value = '';
        alert_correo_valido();
    }
    else{
        alert_correo_invalido();
        mail.focus();
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



