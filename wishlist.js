let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

let container = document.getElementById("wishlist-container");


function showWishlist(){
    container.innerHTML = "";

    wishlist.forEach((item, index) => {
        let div = document.createElement("div");


        div.innerHTML = `
         <h3>${item.name} - ₹${item.price}</h3>
         <button onclick="removeItem(${index})">Remove❌</button>
        `;

        container.appendChild(div);
    });
}

function removeItem(index) {
  wishlist.splice(index, 1);
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
  showWishlist();
}

showWishlist();



 var sidenav = document.querySelector(".side-navbar")


function comeNavbar()
{
    sidenav.style.left="0"
}

function closeNavbar()
{
    sidenav.style.left="-60%"
    
}




