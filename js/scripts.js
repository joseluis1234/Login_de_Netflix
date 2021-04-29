//validar el formulario

const inputs = document.querySelectorAll("form .campo input");

//Listeners a los inputs
inputs.forEach((input) => {
  input.addEventListener("blur", validarInput);
});
inputs.forEach((input) => {
  input.addEventListener("blur", validarInput);
});

function validarInput(e) {
  const estados = ["valido", "no-valido"];

  let clase;
  if (e.target.value.length === 0) {
    clase = estados[1];
  } else {
    clase = estados[0];
  }

  e.target.classList.remove(...estados);
  e.target.nextElementSibling.classList.remove(...estados);

  e.target.classList.add(clase);
  e.target.nextElementSibling.classList.add(clase);

  //Inyectar dinamicamente eel div con el error
  if (clase === "no-valido") {
    if (e.target.parentElement.nextElementSibling.classList[0] !== "alerta") {
      //Contruir un mensaje de error
      const errorDiv = document.createElement("div");
      errorDiv.appendChild(
        document.createTextNode(
          "Ingresa un email o un número de teléfono válido."
        )
      );
      errorDiv.classList.add("alerta");
      //Insertar el error
      e.target.parentElement.parentElement.insertBefore(
        errorDiv,
        e.target.parentElement.nextElementSibling
      );
    }
  } else {
    //limpiar el mensaje de error si existe
    if (e.target.parentElement.nextElementSibling.classList[0] === "alerta") {
      e.target.parentElement.nextElementSibling.remove();
    }
  }

  console.log(clase);
}

//Mostrar y ocultar span

const mostrarPassword = document.querySelector('form .campo span');

mostrarPassword.addEventListener('click', e=>{
    const passworInput = document.querySelector('#password');

    if (e.target.classList.contains('mostrar')) {
        //Mostrar el texto
        e.target.classList.remove('mostrar')
        //Cmbiar el texto   
        e.target.textContent = 'Ocultar';
        //Cambiamos a password
        passworInput.type = 'text';
    }else{
        //Mostrar el password
        e.target.classList.add('mostrar');
        //Cmbiar el texto   
        e.target.textContent = 'Mostrar';
        //Cambiamos a password
        passworInput.type = 'password';
    }
})