let knapp = 0
let spill = 0
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    knapp = pins.digitalReadPin(DigitalPin.P0)
    if (knapp) {
        spill = randint(1, 3)
    }
    
    if (spill == 1) {
        basic.showString("Stein")
    } else if (spill == 2) {
        basic.showString("Saks")
    } else {
        basic.showString("Papir")
    }
    
})
