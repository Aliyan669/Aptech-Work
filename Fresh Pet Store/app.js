var product_1 = document.getElementById('product-1');
var product_2 = document.getElementById('product-2');
var product_3 = document.getElementById('product-3');
var product_4 = document.getElementById('product-4');
var product_5 = document.getElementById('product-5');

/// Best Seller 

function Mouse1in() {
    product_1.src = "Images/product 1 (img 1).jpg"
}
function Mouse1out() {
    product_1.src = "Images/product 1 (img 2).jpg"
}

function Mouse2in() {
    product_2.src = "Images/product 7 (img 2).jpg"
}
function Mouse2out() {
    product_2.src = "Images/product 7 (img 1).jpg"
}

function Mouse3in() {
    product_3.src = "Images/product 8 (img 2).jpg"
}
function Mouse3out() {
    product_3.src = "Images/product 8 (img 1).jpg"
}

function Mouse4in() {
    product_4.src = "Images/product 4 ( img 2).jpg"
}
function Mouse4out() {
    product_4.src = "Images/product 4 ( img 1).jpg"
}

function Mouse5in() {
    product_5.src = "Images/product 3 (img 2).jpg"
}
function Mouse5out() {
    product_5.src = "Images/product 3 ( img 1).jpg"
}

/// New Arrivals

var product_6 = document.getElementById('product-6');

function Mouse6in() {
    product_6.src = "Images/product 4 ( img 2).jpg"
}
function Mouse6out() {
    product_6.src = "Images/product 4 ( img 1).jpg"
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

//////   Owl Carousel Jquery Plugin   ////// 

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
        0: {
            items: 2
        },
        600: {
            items: 2
        },
        1000: {
            items: 4
        }
    }
})

