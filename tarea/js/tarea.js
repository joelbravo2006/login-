//BOTON DE LIMPIAR//
function limpiar() {
    document.getElementById("miform").reset();
}

function enviar() {
    let user = document.getElementById("user").value;
    let pass = document.getElementById("pass").value;
    console.log("este es el usuario " + user + " y esta es la contraseña " + pass);


    if (pass != "1234") {
        document.getElementById("demo1").innerHTML = "Contraseña incorrecta"
    } else {
        document.miformulario.submit()
    }
}