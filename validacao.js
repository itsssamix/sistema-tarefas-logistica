function validarTarefa(texto) {
  return texto.trim().length >= 3;
}

module.exports = { validarTarefa };