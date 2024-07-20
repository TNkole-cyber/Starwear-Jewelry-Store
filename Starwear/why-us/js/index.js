const catalogue = [
    [1,"1 (1).jpeg","GOLD CHAIN",94000,"men gold chain"],
    [2,"1 (2).jpeg","SLIVER CHAIN",92000,"men silver chain"],
    [3,"1 (3).jpeg","SILVER BUTTERFLY NECKLACE",9000,"women silver butterfly necklace"],
    [4,"1 (5).jpeg","SILVER FERN EARRINGS",9000,"silver chain"],
    [5,"1 (6).jpeg","SILVER FLORAL NECKLACE",9000,"silver floral necklace earring set"],
    [6,"1 (1).jpg","ROSE QUARTZ SET",9000,"pink floral necklace earring set"],
    [7,"1 (5).jpg","ROSE & DIAMOND RING",9000,"pink copper diamond ring"],
    [8,"1 (6).jpg","DIAMONELLE EARRINGS",9000,"silver diamonelle earring"],
    [9,"1 (8).jpg","SILVER ANGELIC SET",9000,"silver angelic floral necklace earring set"],
    [10,"1 (9).jpg","FUZZLE EARRINGS",9000,"pink blue grey white red black fuzzle earring"],
    [11,"1 (10).jpg","ENCRUSTED CHOKER",9000,"silver choker"],
    [12,"1 (12).jpg","ROSEY WRISTWEAR SET",9000,"pink rosey wristwear watch bracelet set"],
    [13,"1 (14).jpg","COPPER & DIAMOND RING",9000,"copper diamond ring"],
    [14,"1 (15).jpg","CLASSIC DIAMOND RING",9000,"silver classic diamond ring"],
    [15,"1 (17).jpg","ROSE EARRINGS",9000,"copper rose floral diamond ring"],
    [16,"1 (21).jpg","DAZZLING GOLD RING",9000,"gold dazzling ring"],
    [17,"1 (22).jpg","STARDUST GOLD EARRING",9000,"stardust gold earring"],
    [18,"1 (23).jpg","ROSSETA GOLD RING",9000,"rosetta gold ring"],
    [19,"1 (24).jpg","PEARL EARRINGS",9000,"white pearl earring"],
    [20,"1 (25).jpg","MIDNIGHT BLING SET",9000,"copper bling watch bracelet set"],
    [21,"1 (27).jpg","DAZZLING SILVER RING",9000,"dazzling silver ring"],
    [22,"1 (1).webp","HEART NECKLACE",9000,"heart silver gold necklace"],
];

let cart = []

function addCommas(num) {
    let num2 = "" + num
    let newNum = ""

    for (let i = num2.length - 1; i >= 0; i--){
        newNum = num2.charAt(i) + newNum;

        if ((num2.length - i) % 3 == 0 && i !== 0) {
            newNum = "," + newNum;
        }
    }

    return newNum;
}

generate();

function generate() {
    let table = "";

    for (let i = 0; i < catalogue.length; i ++) {
        table = 
            table + '<div id="item' + 
            catalogue[i][0] +
            '" class="item"><img src="images/' + 
            catalogue[i][1] + '" width="256"><h2 class="text item-name">&nbsp;' + 
            catalogue[i][2] + '</h2><div id="item-price"><span class="item-price">&nbsp;ZMW ' +
            addCommas(catalogue[i][3]) +
            '</span><i class="bx bx-shopping-bag bag-icon button" onclick="addToCart(' + 
            catalogue[i][0] +
            ')"></i></div></div>';
    }
 
    document.getElementById("catalogue").innerHTML = table;
}

const cartHtml = document.querySelector("#cart").classList;

function openCart() {   
    cartHtml.add("active")
}

function closeCart() {   
    cartHtml.remove("active")
}

let cartItemsHtml = document.querySelector("#cart-items");

function addToCart(i) {
    i --;
    if (cart.includes(catalogue[i][0]) == false) {
        cart.push(catalogue[i][0])
        cartItemsHtml.innerHTML += 
            '<div class="cart-item"><img src="images/' +
            catalogue[i][1] +
            '" class="cart-image"></img><div class="cart-details"><h5 class="cart-name">' +
            catalogue[i][2] +
            '</h5><span class="cart-price">ZMW ' +
            addCommas(catalogue[i][3]) +
            '</span>' +
            '<input class="cart-quantity" type="number" min="1" max="99"></input>' +
            '</div></div>';
    }
}