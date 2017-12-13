class Radio {
    constructor(general,riguroso,creativo,atractivo){
        this.general = general;
        this.riguroso = riguroso;
        this.creativo = creativo;
        this.atractivo = atractivo;
    }

    toString(){
        console.log("General:"+general+"Atractivo:"+atractivo+"Creativo:"+creativo+"Atractivo:"+atractivo);
    }

    setGeneral(value){
        this.general = value;
    }
    setRiguroso(value){
        this.riguroso = value;
    }
    setCreativo(value){
        this.creativo = value;
    }
    setAtractivo(value){
        this.atractivo = value;
    }

    getGeneral(value){
        return this.general;
    }
    setRiguroso(value){
        return this.riguroso;
    }
    setCreativo(value){
        return this.creativo;
    }
    setAtractivo(value){
        return this.atractivo;
    }

}