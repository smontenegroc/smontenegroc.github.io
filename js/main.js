
function mostrar_menu(x) {
    var menu = document.getElementById('menu');
    x.classList.toggle("change");    
    menu.classList.toggle("active");
}
function validar_correo(correo){
    var expReg= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

    if(expReg.test(correo)){
        return (true);
    }
    else{
        return (false);
    }
}
function obtener_correo(){
    var mail = document.getElementById('txtMail');
    if(validar_correo(mail.value.toLowerCase()) == true){
        mail.value = '';
        alert_correo_valido();
    }
    else{
        alert_correo_invalido();
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

