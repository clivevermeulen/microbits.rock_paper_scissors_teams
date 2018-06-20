let score = ""
let is_a_result = 0
let tool = 0
let other_tool = 0
input.onButtonPressed(Button.A, () => {
    radio.sendNumber(tool)
})
function get_score()  {
    if (other_tool >= 0 && tool >= 0) {
        if (other_tool == tool) {
            score = "DRAW"
        } else if (other_tool == 0 && tool == 1) {
            score = "WIN"
        } else if (other_tool == 1 && tool == 2) {
            score = "WIN"
        } else if (other_tool == 2 && tool == 0) {
            score = "WIN"
        } else {
            score = "LOSE"
        }
    } else {
        score = ""
    }
}
input.onButtonPressed(Button.AB, () => {
    radio.sendNumber(-1)
    do_reset()
})
input.onGesture(Gesture.Shake, () => {
    tool = Math.random(3)
    if (tool == 0) {
        basic.showIcon(IconNames.SmallSquare)
    } else if (tool == 1) {
        basic.showIcon(IconNames.Square)
    } else {
        basic.showIcon(IconNames.Scissors)
    }
})
radio.onDataPacketReceived( ({ receivedNumber }) =>  {
    if (receivedNumber == -1) {
        do_reset()
    } else {
        other_tool = receivedNumber
    }
})
function do_reset()  {
    other_tool = -1
    tool = -1
    basic.showIcon(IconNames.Happy)
}
radio.setGroup(10)
do_reset()
basic.forever(() => {
    get_score()
    is_a_result = score.length
    if (is_a_result > 0) {
        basic.pause(500)
        basic.showString(score)
    }
})
