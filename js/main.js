// function validar_correo(correo){
//     var expReg= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

//     if(expReg.test(correo)){
//         return (true);
//     }
//     else{
//         return (false);
//     }
// }
// function correo(){
//     var mail = document.getElementById('txtMail');
//     if(validar_correo(mail.value) == true){
//         mail.value = '';
//         alert('Gracias, pronto me pondré en contacto.');
//     }
//     else{
//         alert('correo invalido');
//     }
// }

swal.fire({
    title: 'bienvenido'
});