const MENU = document.getElementById('menu');
const CERRAR = document.getElementById('menu-item');
const MENUICON = document.getElementById('menu-icon');
const MAIL = document.getElementById('txtMail');
const FORM = document.getElementById('form-mail');

//Desplegar el menú
MENUICON.addEventListener('click', () => {
	MENUICON.classList.toggle('change');
	MENU.classList.toggle('active');
});

//Cierra el menú al hacer clic en uno de sus elementos.

CERRAR.addEventListener('click', () => {
	MENU.classList.remove('active');
	MENUICON.classList.remove('change');
});

//Manejo del correo

FORM.addEventListener('submit', e => {
	e.preventDefault();
	if (validar_correo(MAIL.value.toLowerCase().trim())) {
		// agregar_correo(MAIL.value.trim());
		alerts('¡Gracias!', 'Pronto me pondré en contacto', 'success');
		MAIL.value = '';
	} else {
		alerts('¡Correo inválido!', 'Por favor, ingrese un correo válido', 'error');
		MAIL.focus();
		obtener_fecha();
	}
});

function validar_correo(correo) {
	let expReg =
		/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

	if (expReg.test(correo)) {
		return true;
	} else {
		return false;
	}
}

function alerts(title, text, icon) {
	swal.fire({
		title: title,
		text: text,
		icon: icon,
		allowOutsideClick: true,
		allowEscapeKey: false,
		allowEnterKey: true,
		stopKeydownPropagation: false,
	});
}
