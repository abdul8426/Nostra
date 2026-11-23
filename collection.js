var productContainer = document.getElementById("products")
var search = document.getElementById("search")
var productlist = productContainer.querySelectorAll("div")

search.addEventListener("keyup",function(){
    var enteredValue = event.target.value.toUpperCase()

    for(count=0;count<productlist.length;count=count+1)
    {
        var productname = productlist[count].querySelector("p").textContent

        if(productname.toUpperCase().indexOf(enteredValue)<0)
        {
            productlist[count].style.display="none"
        }
        else{
            productlist[count].style.display="block"
        }   
    } 


})


// side navbar
function comeNavbar()
{
    sidenav.style.left="0"
}

function closeNavbar()
{
    sidenav.style.left="-60%"
    
}



function newpage() {
    window.location.href = "product.html";
}


function newpages() {
    window.location.href = "product2.html";
}

function newpagee() {
    window.location.href = "product3.html";
}

function newpagees() {
    window.location.href = "product4.html";
}

function newpage5() {
    window.location.href = "product5.html";
}

function newpage6() {
    window.location.href = "product6.html";
}

function newpage7() {
    window.location.href = "product7.html";
}

function newpage8() {
    window.location.href = "product8.html";
}

// ladies Section--//
function newpage9() {
    window.location.href = "ladies1.html";
}
function newpages9() {
    window.location.href = "ladies2.html";
}
function newpagee9() {
    window.location.href = "ladies3.html";
}
function newpagees9() {
    window.location.href = "ladies4.html";
}
function newpage59() {
    window.location.href = "ladies5.html";
}
function newpage69() {
    window.location.href = "ladies6.html";
}
function newpage79() {
    window.location.href = "ladies7.html";
}
function newpage89() {
    window.location.href = "ladies8.html";
}





