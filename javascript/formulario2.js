const formulario = document.getElementById('pipilin');
const inputs = document.querySelectorAll('#pipilin input');




const expresionesLogin = {
    usuario: /^[a-zA-Z0-9\_\-]{4,16}$/,
    password: /^[a-zA-ZÀ-ÿ\s]{1,40}$/
}

const validarFormulario = (e) => {
    switch (e.target.name) {
        case "usuario":
            if (expresionesLogin.usuario.test(e.target.value)) {

                document.getElementById('username').classList.add('maincra1_correcto');
                document.getElementById('username').classList.remove('maincra1_incorrecto');
            } else {

                document.getElementById('username').classList.add('maincra1_incorrecto');
                document.getElementById('username').classList.remove('maincra1_correcto');
            }
            break;
        case "password":
            if (expresionesLogin.password.test(e.target.value)) {

                document.getElementById('pasworsote').classList.add('maincra1_correcto');
                document.getElementById('pasworsote').classList.remove('maincra1_incorrecto');
            } else {

                document.getElementById('pasworsote').classList.add('maincra1_incorrecto');
                document.getElementById('pasworsote').classList.remove('maincra1_correcto');
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