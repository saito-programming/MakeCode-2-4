let 数 = 0
basic.showNumber(数)
basic.forever(function () {
    数 += 1
    basic.pause(100)
    basic.showNumber(数)
})
