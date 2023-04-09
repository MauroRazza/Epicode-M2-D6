
function Changeh1(){
let h1 = document.getElementById("h1");
h1.innerHTML = "LO SHOP CHE TI OFFRE <br> LO <span>SMARTPHONE</span> CHE TI MERITI <br> E ANCHE QUELLO CHE NON TI MERITI";
}

function ChangeBG(){
    let colorbg = document.getElementsByClassName("box");
    for (let i = 0; i < colorbg.length; i++) {
        colorbg[i].style.backgroundColor = "#BBBBBB";
    }
}

function ChangeAddress(){
    let ChangeAddress = document.getElementById("address");
    ChangeAddress.innerHTML = '<i class="fa-solid fa-location-dot"></i> Via Roma 10, 00100 Roma (RM)';
    }

function ChangeLink(){
    let ChangeLink = document.getElementsByTagName("a");
    for (let i = 0; i < ChangeLink.length; i++) {
        ChangeLink[i].style.color = "black";
    }
}

function ChangeImg(){
    let changeimg = document.querySelectorAll("img");
    for (let i = 0; i < changeimg.length; i++) {
        changeimg[i].style.display = "block";
    }
}

function ChangePrice(){
    let changeprice = document.getElementsByTagName("h5");
    for (let i = 0; i < changeprice.length; i++) {
        changeprice[i].style.color = "rgb(51, 51, 51)";
    }
}

Changeh1();
ChangeBG();
ChangeAddress();
ChangeLink();
ChangeImg();
ChangePrice();

