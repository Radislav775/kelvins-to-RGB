let red
let green
let blue

let temp = prompt('Введите цветовую температуру в кельвинах')
temp1 = temp / 100

//! алгоритм обработки красного цвета (0-255)
if (temp1 <= 66)
    {
        red = 255
    }
else
    {
        red = temp1 - 60
        red = (red ** -0.1332047592) * 329.698727446
        if (red < 0) {red = 0}
        if (red > 255) {red = 255}
        
    }


if (temp1 <= 66)
    {
        green = temp1
        green = 99.4708025861 * Math.log(green) - 161.1195681661
        if (green < 0) {green = 0}
        if (green > 255) {green = 255}
    }
else
    {
        green = temp1 - 60
        green = 288.1221695283 * (green ** -0.0755148492)
        if (green < 0) {green = 0}
        if (green >255) {green = 255}   
    }
    

if (temp1 >= 66) 
    {
        blue = 255
    }
else if (temp1 <= 19)
    {
        blue = 0
    }
    
else
    {
        blue = temp1 - 10
        blue = 138.5177312231 * Math.log(blue) - 305.0447927307
        if (blue < 0) {blue = 0}
        if (blue > 255) {blue = 255}
    }





let resultR = (`red: ${red.toFixed(3)}`)
let resultG = (`green: ${green.toFixed(3)}`)
let resultB = (`blue: ${blue.toFixed(3)}`)
let kresult = (temp + ' - tempreture in kelvin')

document.getElementById('red').innerText = resultR
document.getElementById('green').innerText = resultG
document.getElementById('blue').innerText = resultB

document.getElementById('hh').innerText = kresult