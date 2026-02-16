let  ID = parseInt(prompt("Ingrese su ID: "));

if (ID % 2 === 0) {
    console.log("Servidor A.");
    alert("Fue asignado al Servidor A.");
} else {
    console.log("Servidor B.");
    alert("Fue asignado al Servidor B.");
}