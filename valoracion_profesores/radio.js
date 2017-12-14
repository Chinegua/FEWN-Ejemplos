class Radio {
    constructor(general,riguroso,creativo,atractivo){
        this.general = general;
        this.riguroso = riguroso;
        this.creativo = creativo;
        this.atractivo = atractivo;
    }

    toString(){
        console.log("General:"+this.general+"Atractivo:"+this.atractivo+"Creativo:"+this.creativo+"Atractivo:"+this.atractivo);
    }

    setGeneral(value){
        this.general = value;
        
        if(document.getElementById("radioAnclado").checked == true){
            document.getElementById("radioAnclado").checked = false;            
            this.setRiguroso(value);          
            this.setCreativo(value);
            this.setAtractivo(value);
            this.toString();
            
        }
    }
    setRiguroso(value){
        console.log("hola");
        this.riguroso = value;
        document.getElementById("rangeRiguroso").value = value;        
        toString();
    }
    setCreativo(value){
        this.creativo = value;
        document.getElementById("rangeCreativo").value = value;        
        toString();
    }
    setAtractivo(value){
        this.atractivo = value;
        document.getElementById("rangeAtractivo").value = value;         
        toString();
    }


    getGeneral(value){
        return this.general;
    }
    getRiguroso(value){
        return this.riguroso;
    }
    getCreativo(value){
        return this.creativo;
    }
    getAtractivo(value){
        return this.atractivo;
    }




}