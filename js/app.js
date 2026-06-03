const inputEmail = document.getElementById("input");
const btnValidarEmail = document.getElementById("btn");
const resultadoEmailTexto = document.getElementById("resultado");

const comprobarEmailValidacion = (email) => {
    if (typeof email !== "string" || email.trim() === "") {
        return false;
    }

    const reglaEmail = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;

    return reglaEmail.test(email);
};

btnValidarEmail.addEventListener("click", () => {
    const valorEmail = inputEmail.value.trim(); 

    if (valorEmail === "") {
        resultadoEmailTexto.textContent = "Por favor, escriba un correo electrónico.";
        return;
    }

    const esValido = comprobarEmailValidacion(valorEmail);

    if (esValido === true) {
        resultadoEmailTexto.innerHTML = `Verdadero: <br> El email es válido y tiene la estructura correcta.`;
    } else {
        resultadoEmailTexto.innerHTML = `Falso: <br> El formato del email no es válido (verifique @ y el punto).`;
    }
});
