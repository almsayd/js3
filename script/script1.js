let num = +prompt('Введите число которое не равно 0')
let deg = +prompt('Введите степень числа')
num = !isNaN(num) && num !== 0 ? num : alert('Введите число которое не равно 0') 
deg = !isNaN(deg) || deg == 0 ? deg : 2

let answer = num

for (let i = 1 ; i < deg; i++){
    answer = answer * num
}
alert(answer)



