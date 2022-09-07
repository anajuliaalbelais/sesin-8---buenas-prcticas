input.onButtonPressed(Button.A, function () {
    basic.showNumber(numero)
    numero += 1
})
input.onButtonPressed(Button.AB, function () {
    texto = "session 8"
})
input.onButtonPressed(Button.B, function () {
    numero += -1
    basic.showNumber(numero)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showString(texto)
})
let numero = 0
let texto = ""
texto = "Buenas!!"
numero = 2
