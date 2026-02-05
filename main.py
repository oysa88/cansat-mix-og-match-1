knapp = 0
spill = 0

def on_button_pressed_a():
    global knapp, spill
    knapp = pins.digital_read_pin(DigitalPin.P0)
    if knapp:
        spill = randint(1, 3)
    if spill == 1:
        basic.show_string("Stein")
    elif spill == 2:
        basic.show_string("Saks")
    else:
        basic.show_string("Papir")
input.on_button_pressed(Button.A, on_button_pressed_a)

