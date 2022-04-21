input.onButtonPressed(Button.A, function () {
    for (let index = 0; index <= 4; index++) {
        for (let index = 0; index <= 4; index++) {
            led.plot(0, index)
            led.plot(index, 0)
            led.plot(x, y)
            led.plot(x, y)
            basic.pause(500)
        }
    }
})
input.onButtonPressed(Button.B, function () {
    for (let x = 0; x <= 4; x++) {
        for (let y = 0; y <= 4; y++) {
            led.plot(y, 0)
            led.plot(x, y)
            basic.pause(200)
        }
    }
})
let x = 0
let y = 0
y = 1
x = 1
basic.forever(function () {
	
})
