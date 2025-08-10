function calcularGuardias() {
  const fechaInicio = new Date(document.getElementById("fechaInicio").value);
  const tipo = document.getElementById("tipoGuardia").value;
  let resultado = "";

  if (!fechaInicio) {
    resultado = "Por favor selecciona una fecha válida.";
  } else {
    if (tipo === "12") {
      resultado = `Tu próxima guardia será el ${sumarDias(fechaInicio, 2).toLocaleDateString()}`;
    } else if (tipo === "24") {
      resultado = `Tu próxima guardia será el ${sumarDias(fechaInicio, 4).toLocaleDateString()}`;
    }
  }

  document.getElementById("resultado").innerText = resultado;
}

function sumarDias(fecha, dias) {
  const nuevaFecha = new Date(fecha);
  nuevaFecha.setDate(nuevaFecha.getDate() + dias);
  return nuevaFecha;
}
