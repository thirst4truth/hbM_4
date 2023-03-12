let row = 0
let col = 0
input.onButtonPressed(Button.A, function () {
    music.setVolume(255)
    music.startMelody(music.builtInMelody(Melodies.Birthday), MelodyOptions.ForeverInBackground)
    basic.showString("Happy Birthday Matilda!")
    basic.pause(100)
    for (let index = 0; index < 2; index++) {
        basic.showIcon(IconNames.Heart)
        basic.showIcon(IconNames.SmallHeart)
    }
    music.stopMelody(MelodyStopOptions.Background)
    basic.showIcon(IconNames.Heart)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("Room temp is")
    basic.showString("" + (input.temperature()))
    basic.pause(1000)
    basic.showString("Light level")
    basic.showString("" + (input.lightLevel()))
})
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.soaring), SoundExpressionPlayMode.InBackground)
    for (let index = 0; index < 100; index++) {
        row = randint(0, 4)
        col = randint(0, 4)
        if (led.point(col, row)) {
            led.unplot(col, row)
            basic.pause(200)
        }
    }
    basic.clearScreen()
})
