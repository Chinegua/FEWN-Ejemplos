function generalAction(){

    if( document.getElementById("radioAnclado").checked == true){
        var value = document.getElementById("rangeGeneral").value; 
        document.getElementById("radioAnclado").checked = false;
        document.getElementById("rangeRiguroso").value = value;
        document.getElementById("rangeCreativo").value = value;
        document.getElementById("rangeAtractivo").value = value; 
    }
    mostrarConsola();
}

function mostrarConsola(){
    var rangeGeneral = document.getElementById("rangeGeneral").value;
    var rangeRiguroso= document.getElementById("rangeRiguroso").value;
    var rangeCreativo = document.getElementById("rangeCreativo").value;
    var rangeAtractivo = document.getElementById("rangeAtractivo").value;
    console.log("General:"+rangeGeneral+"Creativo"+rangeCreativo+"Riguroso:"+rangeRiguroso+"Atractivo:"+rangeAtractivo+" ");
    
}

