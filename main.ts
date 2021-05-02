input.onButtonPressed(Button.A, function () {
    Taktart = 2
})
input.onGesture(Gesture.Shake, function () {
    if (Metronom == 0) {
        Metronom = 1
    } else {
        Metronom = 0
    }
})
input.onButtonPressed(Button.AB, function () {
    Taktart = 4
})
input.onButtonPressed(Button.B, function () {
    Taktart = 3
})
let Schlag = 0
let Metronom = 0
let Taktart = 0
let Tempo = 300
Taktart += 4
Metronom = 0
basic.forever(function () {
    while (Metronom == 1) {
        Schlag = 0
        for (let index = 0; index < Taktart; index++) {
            led.plot(Schlag, 0)
            led.plot(Schlag, 1)
            led.plot(Schlag, 2)
            led.plot(Schlag, 3)
            led.plot(Schlag, 4)
            if (Schlag == 0) {
                basic.setLedColor(0x00ffff)
                music.playTone(523, music.beat(BeatFraction.Quarter))
            }
            if (Schlag != 0) {
                basic.turnRgbLedOff()
                music.playTone(440, music.beat(BeatFraction.Quarter))
            }
            if (input.isGesture(Gesture.TiltLeft)) {
                Tempo += 18
            }
            if (input.isGesture(Gesture.TiltRight)) {
                Tempo += -18
            }
            if (input.isGesture(Gesture.LogoUp)) {
                Tempo += 30
            }
            if (input.isGesture(Gesture.LogoDown)) {
                Tempo += -30
            }
            basic.pause(Tempo)
            led.toggle(Schlag, 0)
            led.toggle(Schlag, 1)
            led.toggle(Schlag, 2)
            led.toggle(Schlag, 3)
            led.toggle(Schlag, 4)
            Schlag += 1
        }
    }
})
