function insert(num) {
  let number = document.getElementById('result').innerHTML

  document.getElementById('result').innerHTML = number + num
}

function clean() {
  document.getElementById('result').innerHTML = ''
}

function delet() {
  let result = document.getElementById('result').innerHTML

  document.getElementById('result').innerHTML = result.substring(
    0,
    result.length - 1
  )
}

function calculate() {
  let result = document.getElementById('result').innerHTML
  if (result) {
    document.getElementById('result').innerHTML = eval(result)
  }
}
