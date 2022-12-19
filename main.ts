input.onButtonPressed(Button.A, function () {
    回答 = "A"
})
function 出題 (問題: string, 答え: string) {
    basic.showString(問題)
    while (回答 == "") {
        basic.pause(100)
    }
    if (回答 == 答え) {
        basic.showIcon(IconNames.Yes)
        music.playSoundEffect(music.builtinSoundEffect(soundExpression.hello), SoundExpressionPlayMode.UntilDone)
    } else {
        basic.showIcon(IconNames.No)
        music.playSoundEffect(music.builtinSoundEffect(soundExpression.sad), SoundExpressionPlayMode.UntilDone)
    }
    回答 = ""
}
input.onButtonPressed(Button.B, function () {
    回答 = "B"
})
let 答え: string[] = []
let 問題: string[] = []
let 回答 = ""
回答 = ""
問題[0] = "1+1=2"
答え[0] = "A"
問題[1] = "apple"
答え[1] = "B"
let 問題数 = 問題.length
basic.forever(function () {
    for (let カウンター = 0; カウンター <= 問題数 - 1; カウンター++) {
        出題(問題[カウンター], 答え[カウンター])
    }
})
