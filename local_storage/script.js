function enviar(){
    
    var formulario = document.getElementById("myForm");	
    document.getElementById("prueba").innerHTML = formulario[0].value;
    localStorage.setItem("firstname", formulario[0].value);
    localStorage.setItem("lastname", formulario[1].value);
    window.location.href = "http://127.0.0.1:5500/local_storage/recipient.html";
    
    
}
