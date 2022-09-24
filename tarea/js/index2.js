let sitioWeb = window.location.href;

let nombre = sitioWeb.slice(sitioWeb.search("nombre") + 7);
document.getElementById("demo").innerHTML = nombre;