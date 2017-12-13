function update(){
    var color = document.getElementById("color").value;
    var width = document.getElementById("width").value;
    var heigh = document.getElementById("heigh").value;
    var borderColor = document.getElementById("borderColor").value;
    
    
    
    

    document.getElementById("box").style.background = color;
    document.getElementById("box").style.width = width + "px";
    document.getElementById("box").style.height = heigh + "px";
    document.getElementById("box").style.borderColor = borderColor;
    
}