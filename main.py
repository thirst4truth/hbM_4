def on_button_pressed_b():
    music.set_volume(255)
    music.play_melody("C D C F E - C D ", 90)
    music.play_melody("C G F - C C5 A F ", 90)
    music.play_melody("E D - B A F G F ", 90)
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_microbit_id_button_a_evt():
    basic.show_string("Happy")
    basic.pause(100)
    for index in range(4):
        basic.show_icon(IconNames.HEART)
        basic.show_icon(IconNames.SMALL_HEART)
    basic.show_icon(IconNames.HEART)
    basic.clear_screen()
    basic.pause(1000)
control.on_event(EventBusSource.MICROBIT_ID_BUTTON_A,
    EventBusValue.MICROBIT_EVT_ANY,
    on_microbit_id_button_a_evt)

def on_forever():
    pass
basic.forever(on_forever)
