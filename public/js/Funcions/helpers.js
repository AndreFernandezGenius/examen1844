const bloqueFormulario = () => {
  console.log("estou en bloqueFormulario");
  let datosFormulario = new FormData(envio);

  return datosFormulario;
};


export const datosPintar = () => {
  console.log("Este es el bloque datosPintar");
  let divInfo = document.createElement("div");
  divInfo.className = "info-datos";
  console.log("Div creado", divInfo);

  let datosFormulario = bloqueFormulario();
  for (let [name, value] of datosFormulario) {
    if (name === "Avatar") continue;
    let spanDatos = document.createElement("span");
    console.log("value ??? ",value)
    spanDatos.innerHTML = `${name} ${value}`;

    console.log("spanDatos", spanDatos);

    divInfo.append(spanDatos);
    console.log("Este es el div dentro del bucle: ", divInfo);
  }
  document.body.append(divInfo);
};