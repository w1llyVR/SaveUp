const formulario = document.getElementById('pipilin');
const inputs = document.querySelectorAll('#pipilin input');


const expresionesRegistro = {
    usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    password: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    nombre: /^.{4,12}$/, // 4 a 12 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    numero: /^\d{7,14}$/, // 7 a 14 numeros.
    direccion: /^[a-zA-Z0-9\_\-]{8,50}$/
}


const expresiones2 = {
    usuario: /^[a-zA-Z0-9\_\-]{4,16}$/,
    password: /^[a-zA-ZÀ-ÿ\s]{1,40}$/
}

const validarFormulario = (e) => {
    switch (e.target.name) {
        case "usuario":
            if (expresionesRegistro.usuario.test(e.target.value)) {
                document.getElementById('usuario1').classList.add('maincra1_correcto');
                document.getElementById('usuario1').classList.remove('maincra1_incorrecto');
            } else {
                document.getElementById('usuario1').classList.add('maincra1_incorrecto');
                document.getElementById('usuario1').classList.remove('maincra1_correcto');
            }
            break;
        case "password":
            if (expresionesRegistro.password.test(e.target.value)) {
                document.getElementById('password').classList.add('maincra1_correcto');
                document.getElementById('password').classList.remove('maincra1_incorrecto');
            } else {
                document.getElementById('password').classList.add('maincra1_incorrecto');
                document.getElementById('password').classList.remove('maincra1_correcto');
            }
            break;
        case "nombre":
            if (expresionesRegistro.nombre.test(e.target.value)) {
                document.getElementById('nombre').classList.add('maincra1_correcto');
                document.getElementById('nombre').classList.remove('maincra1_incorrecto');
            } else {
                document.getElementById('nombre').classList.add('maincra1_incorrecto');
                document.getElementById('nombre').classList.remove('maincra1_correcto');
            }
            break;
        case "correo":
            if (expresionesRegistro.correo.test(e.target.value)) {
                document.getElementById('correo').classList.add('maincra1_correcto');
                document.getElementById('correo').classList.remove('maincra1_incorrecto');
            } else {
                document.getElementById('correo').classList.add('maincra1_incorrecto');
                document.getElementById('correo').classList.remove('maincra1_correcto');
            }
            break;
        case "numero":
            if (expresionesRegistro.numero.test(e.target.value)) {
                document.getElementById('numero').classList.add('maincra1_correcto');
                document.getElementById('numero').classList.remove('maincra1_incorrecto');
            } else {
                document.getElementById('numero').classList.add('maincra1_incorrecto');
                document.getElementById('numero').classList.remove('maincra1_correcto');
            }
            break;
        case "direccion":
            if (expresionesRegistro.direccion.test(e.target.value)) {
                document.getElementById('direccion').classList.add('maincra1_correcto');
                document.getElementById('direccion').classList.remove('maincra1_incorrecto');
            } else {
                document.getElementById('direccion').classList.add('maincra1_incorrecto');
                document.getElementById('direccion').classList.remove('maincra1_correcto');
            }
            break;

    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

});