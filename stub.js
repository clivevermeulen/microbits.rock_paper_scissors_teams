let tool = 0
let score = ""
let other_tool = 0
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
function do_reset()  {
    other_tool = -1
    tool = -1
    basic.showIcon(IconNames.Happy)
}
