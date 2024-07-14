var Litre_Plastic_Bottle = document.getElementById('Litre-Plastic-Bottle');
var Oval_Glass_Jar = document.getElementById('Oval-Glass-Jar');
var Special_Plastic_Jar = document.getElementById('Special-Plastic-Jar');
var Litre_Glass_Bottle = document.getElementById('Litre-Glass-Bottle');

/// Best Seller 

function LitrePlasticBottleIn() {
    Litre_Plastic_Bottle.src = "Images/Litre Plastic Bottle_2.jpg"
}
function LitrePlasticBottleOut() {
    Litre_Plastic_Bottle.src = "Images/Litre Plastic Bottle_1.jpg"
}

function OvalGlassJarIn() {
    Oval_Glass_Jar.src = "Images/Oval Glass Jar_2.jpg"
}
function OvalGlassJarOut() {
    Oval_Glass_Jar.src = "Images/Oval Glass Jar_1.jpg"
}

function SpecialPlasticJarIn() {
    Special_Plastic_Jar.src = "Images/Special Plastic Jar_2.jpg"
}
function SpecialPlasticJarOut() {
    Special_Plastic_Jar.src = "Images/Special Plastic Jar_1.jpg"
}

function LitreGlassBottleIn() {
    Litre_Glass_Bottle.src = "Images/Litre Glass Bottle_2.jpg"
}
function LitreGlassBottleOut() {
    Litre_Glass_Bottle.src = "Images/Litre Glass Bottle_1.jpg"
}

/// New Arrivals

var Trans_Glass_Bottle = document.getElementById('Trans-Glass-Bottle');
var Hexagon_Glass_Jar = document.getElementById('Hexagon-Glass-Jar');
var Brown_Wood_Baskets = document.getElementById('Brown-Wood-Baskets');
var Grey_Wood_Basket = document.getElementById('Grey-Wood-Basket');
var Round_Plastic_Jar = document.getElementById('Round-Plastic-Jar');

function TransGlassBottleIn() {
    Trans_Glass_Bottle.src = "Images/Transparent Glass Bottle_2.jpg"
}
function TransGlassBottleOut() {
    Trans_Glass_Bottle.src = "Images/Transparent Glass Bottle_1.jpg"
}

function HexagonGlassJarIn() {
    Hexagon_Glass_Jar.src = "Images/Hexagon Glass Jar_2.jpg"
}
function HexagonGlassJarOut() {
    Hexagon_Glass_Jar.src = "Images/Hexagon Glass Jar_1.jpg"
}

function BrownWoodBasketsIn() {
    Brown_Wood_Baskets.src = "Images/Brown Wood Baskets_2.png"
}
function BrownWoodBasketsOut() {
    Brown_Wood_Baskets.src = "Images/Brown Wood Baskets_1.png"
}

function GreyWoodBasketIn() {
    Grey_Wood_Basket.src = "Images/Grey Wood Baskets_2.png"
}
function GreyWoodBasketOut() {
    Grey_Wood_Basket.src = "Images/Grey Wood Baskets_1.png"
}

function RoundPlasticJarIn() {
    Round_Plastic_Jar.src = "Images/Round Plastic Jar_2.jpg"
}
function RoundPlasticJarOut() {
    Round_Plastic_Jar.src = "Images/Round Plastic Jar_1.jpg"
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



