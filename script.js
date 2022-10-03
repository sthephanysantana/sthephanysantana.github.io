var button = document.getElementById('button')
var buttonLimpar = document.getElementById('buttonLimpar')
function limparcampos() {
  document.getElementById('aInput').value = ''
  document.getElementById('hInput').value = ''
  document.getElementById('oInput').value = ''
}
function calcular() {
  var a = document.getElementById('aInput').value
  var h = document.getElementById('hInput').value
  var o = document.getElementById('oInput').value
  var url = ''
  var resultado = ''
  if (a != '' && o != '') {
    calcularHipotenusa(document.getElementById('hInput'), a, o)
  } else if (o != '' && h != '') {
    calcularAdjacente(document.getElementById('aInput'), o, h)
  } else if (a != '' && h != '') {
    calcularOposto(document.getElementById('oInput'), a, h)
  } else alert('Informe os valores correspondentes!')
}
function calcularApi(url, inputResult) {
  if (url != '') {
    axios
      .get(
        'http://hipotenusaapi.sthephanys.repl.co/calcularhipotenusa?' +
          'co=' +
          4 +
          '&ca=' +
          3,
        {
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods':
              'GET, POST, OPTIONS, PUT, PATCH, DELETE',
            'Content-Type': 'application/json;charset=UTF-8'
          }
        }
      )
      .then(resposta => (inputResult.innerHTML = resposta.data))
      .catch(erro => console.log(erro))
  }
}
button.addEventListener('click', calcular)
buttonLimpar.addEventListener('click', limparcampos)
function calcularOposto(inputResult, a, h) {
  var value = Math.round(Math.sqrt(h * h - a * a))
  inputResult.value = value
}
function calcularAdjacente(inputResult, o, h) {
  var value = Math.round(Math.sqrt(h * h - o * o))

  inputResult.value = value
}
function calcularHipotenusa(inputResult, a, o) {
  var value = Math.round(Math.sqrt(o * o + a * a))
  inputResult.value = value
}
