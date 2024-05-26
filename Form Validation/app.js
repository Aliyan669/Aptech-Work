function Sumbit() {
    
    var uname = document.getElementById("userName").value;
    var uemail = document.getElementById("userEmail").value;
    var upassword = document.getElementById("userPassword").value;
    var ucpassword = document.getElementById("userCpassowrd").value;

    if (uname == "" || uemail == "" || upassword == "" || ucpassword == "") {
        alert("Please Enter the Filed");

    } else if (upassword == ucpassword) {
        alert("Succfully Sumbit")

    } else {
        alert("Confirm Password Doesn't Match")

    }
}


