function genera_tabla() {
  let body = document.getElementsByTagName("body")[0];
 
  let table   = document.createElement("table");
  let tblBody = document.createElement("tbody");
  let ciudades = ["Monaco","Paris","Londres","Berlin","Santa Cruz de Tenerife"];

  for (let i = 0; i < ciudades.length; i++) {
    let hilera = document.createElement("tr");

    let celdaIdentificador = document.createElement("td");
    let textoCeldaIdentificador = document.createTextNode("Pais: "+(i+1));
    celdaIdentificador.appendChild(textoCeldaIdentificador);
    hilera.appendChild(celdaIdentificador);

    let celdaCiudad = document.createElement("td");
    let textoCeldaCiudad = document.createTextNode(ciudades[i]);
    celdaCiudad.appendChild(textoCeldaCiudad);
    hilera.appendChild(celdaCiudad);
    
    tblBody.appendChild(hilera);
  }
 
  tabla.appendChild(tblBody);
  body.appendChild(tabla);
  tabla.setAttribute("border", "2");
}