function result() {
    var my_inp = document.getElementById("input").value
    var upper = document.getElementById("up")
    var lower = document.getElementById("low")
    var num = document.getElementById("num")
    var special = document.getElementById("sp")
    var pasLength = document.getElementById("pass_length")


    if (my_inp.match(/[A-Z]/)) {
        upper.style.color = "Green"
    }
    else {
        upper.style.color = "Red"
    }

    if (my_inp.match(/[a-z]/)) {
        lower.style.color = "Green"
    }
    else {
        lower.style.color = "Red"
    }

    if (my_inp.match(/[0-9]/)) {
        num.style.color = "Green";
    } else {
        num.style.color = "Red";
    }

    if (my_inp.match(/[!@#$%^&*(),.?":{}|<>]/)) {
        special.style.color = "Green";
    } else {
        special.style.color = "Red";
    }

    if (my_inp.length > 8 && my_inp.length <= 15) {
        pasLength.style.color = "Green"
    }
    else {
        pasLength.style.color = "Red"
    }
}