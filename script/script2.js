let quant = +prompt('Введите количество ступенек')
let sym = prompt('Введите символ отступов (не пустой)')
let end = prompt('Введите конечный символ (не пустой)')

quant = !isNaN(quant) && quant !== 0 && quant > 0 ? quant : 5
sym = sym != ' ' ? sym : alert('Введите не пустой символ отступов')
end = end != ' ' ? end : alert('Введите не пустой конечный символ')


