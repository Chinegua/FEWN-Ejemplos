function recoger(){
    console.log("Hola");
    console.log(localStorage.getItem("firstname"));
    document.getElementById("prueba").innerHTML = localStorage.getItem("firstname");
    
}