function In1() {
    document.getElementById("image1").src = "Images/pizza2.jpg"
}

function In2() {
    document.getElementById("image2").src = "Images/burger2.jpg"
}

function In3() {
    document.getElementById("image3").src = "Images/sandwich2.jpg"
}

function Out1() {
    document.getElementById("image1").src = "Images/pizza.jpg"
}

function Out2() {
    document.getElementById("image2").src = "Images/burger.jpg"
}

function Out3() {
    document.getElementById("image3").src = "Images/sandwich.jpg"
}


function Sumbit() {
    var uname = document.getElementById("userName").value;
    var uemail = document.getElementById("userEmail").value;
    var unumber = document.getElementById("userNumber").value;

    if (uname == "" || uemail == "" || unumber == "") {
        alert("Please Enter the Filed");
    } else {
        alert("Succfully Sumbit")
    }
}


