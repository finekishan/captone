import{foodItem}from"./fooditem.js";function displayItems(){var e=document.getElementById("biryani"),t=document.getElementById("paneer"),a=document.getElementById("chicken"),n=document.getElementById("vegetable"),d=document.getElementById("chinese"),r=document.getElementById("south-indian");const i=foodItem.filter((e=>"biryani"==e.category)),c=foodItem.filter((e=>"chicken"==e.category)),m=foodItem.filter((e=>"paneer"==e.category)),l=foodItem.filter((e=>"vegetable"==e.category)),o=foodItem.filter((e=>"chinese"==e.category)),s=foodItem.filter((e=>"south indian"==e.category));i.map((t=>{var a=document.createElement("div");a.setAttribute("id","item-card");var n=document.createElement("div");n.setAttribute("id","card-top");var d=document.createElement("i");d.setAttribute("class","fa fa-star"),d.setAttribute("id","rating"),d.innerText=" "+t.rating;var r=document.createElement("i");r.setAttribute("class","fa fa-heart-o add-to-cart"),r.setAttribute("id",t.id),n.appendChild(d),n.appendChild(r);var i=document.createElement("img");i.src=t.img;var c=document.createElement("p");c.setAttribute("id","item-name"),c.innerText=t.name;var m=document.createElement("p");m.setAttribute("id","item-price"),m.innerText="Price : $ "+t.price,a.appendChild(n),a.appendChild(i),a.appendChild(c),a.appendChild(m),e.appendChild(a)})),c.map((e=>{var t=document.createElement("div");t.setAttribute("id","item-card");var n=document.createElement("div");n.setAttribute("id","card-top");var d=document.createElement("i");d.setAttribute("class","fa fa-star"),d.setAttribute("id","rating"),d.innerText=" "+e.rating;var r=document.createElement("i");r.setAttribute("class","fa fa-heart-o add-to-cart"),r.setAttribute("id",e.id),n.appendChild(d),n.appendChild(r);var i=document.createElement("img");i.src=e.img;var c=document.createElement("p");c.setAttribute("id","item-name"),c.innerText=e.name;var m=document.createElement("p");m.setAttribute("id","item-price"),m.innerText="Price : $ "+e.price,t.appendChild(n),t.appendChild(i),t.appendChild(c),t.appendChild(m),a.appendChild(t)})),m.map((e=>{var a=document.createElement("div");a.setAttribute("id","item-card");var n=document.createElement("div");n.setAttribute("id","card-top");var d=document.createElement("i");d.setAttribute("class","fa fa-star"),d.setAttribute("id","rating"),d.innerText=" "+e.rating;var r=document.createElement("i");r.setAttribute("class","fa fa-heart-o add-to-cart"),r.setAttribute("id",e.id),n.appendChild(d),n.appendChild(r);var i=document.createElement("img");i.src=e.img;var c=document.createElement("p");c.setAttribute("id","item-name"),c.innerText=e.name;var m=document.createElement("p");m.setAttribute("id","item-price"),m.innerText="Price : $ "+e.price,a.appendChild(n),a.appendChild(i),a.appendChild(c),a.appendChild(m),t.appendChild(a)})),l.map((e=>{var t=document.createElement("div");t.setAttribute("id","item-card");var a=document.createElement("div");a.setAttribute("id","card-top");var d=document.createElement("i");d.setAttribute("class","fa fa-star"),d.setAttribute("id","rating"),d.innerText=" "+e.rating;var r=document.createElement("i");r.setAttribute("class","fa fa-heart-o add-to-cart"),r.setAttribute("id",e.id),a.appendChild(d),a.appendChild(r);var i=document.createElement("img");i.src=e.img;var c=document.createElement("p");c.setAttribute("id","item-name"),c.innerText=e.name;var m=document.createElement("p");m.setAttribute("id","item-price"),m.innerText="Price : $ "+e.price,t.appendChild(a),t.appendChild(i),t.appendChild(c),t.appendChild(m),n.appendChild(t)})),o.map((e=>{var t=document.createElement("div");t.setAttribute("id","item-card");var a=document.createElement("div");a.setAttribute("id","card-top");var n=document.createElement("i");n.setAttribute("class","fa fa-star"),n.setAttribute("id","rating"),n.innerText=" "+e.rating;var r=document.createElement("i");r.setAttribute("class","fa fa-heart-o add-to-cart"),r.setAttribute("id",e.id),a.appendChild(n),a.appendChild(r);var i=document.createElement("img");i.src=e.img;var c=document.createElement("p");c.setAttribute("id","item-name"),c.innerText=e.name;var m=document.createElement("p");m.setAttribute("id","item-price"),m.innerText="Price : $ "+e.price,t.appendChild(a),t.appendChild(i),t.appendChild(c),t.appendChild(m),d.appendChild(t)})),s.map((e=>{var t=document.createElement("div");t.setAttribute("id","item-card");var a=document.createElement("div");a.setAttribute("id","card-top");var n=document.createElement("i");n.setAttribute("class","fa fa-star"),n.setAttribute("id","rating"),n.innerText=" "+e.rating;var d=document.createElement("i");d.setAttribute("class","fa fa-heart-o add-to-cart"),d.setAttribute("id",e.id),a.appendChild(n),a.appendChild(d);var i=document.createElement("img");i.src=e.img;var c=document.createElement("p");c.setAttribute("id","item-name"),c.innerText=e.name;var m=document.createElement("p");m.setAttribute("id","item-price"),m.innerText="Price : $ "+e.price,t.appendChild(a),t.appendChild(i),t.appendChild(c),t.appendChild(m),r.appendChild(t)}))}displayItems();const vegData=[...new Map(foodItem.map((e=>[e.category,e]))).values()];function selectTaste(){var e=document.getElementById("category-list");vegData.map((t=>{console.log(t);var a=document.createElement("div");a.setAttribute("class","list-card");var n=document.createElement("img");n.src=t.img;var d=document.createElement("a");d.setAttribute("class","list-name"),d.innerText=t.category,d.setAttribute("href","#"+t.category),a.appendChild(n),a.appendChild(d);var r=a.cloneNode(!0);e.appendChild(a),document.querySelector(".category-header").appendChild(r)}))}console.log(vegData),selectTaste(),document.querySelectorAll(".add-to-cart").forEach((e=>{e.addEventListener("click",addToCart)}));var cartData=[];function addToCart(){var e=this.parentNode.nextSibling.nextSibling.innerText,t=foodItem.find((t=>t.name==e)),a=cartData.indexOf(t);-1===a?(document.getElementById(t.id).classList.add("toggle-heart"),cartData=[...cartData,t]):a>-1&&alert("Added to cart!"),document.getElementById("cart-plus").innerText=" "+cartData.length+" Items",document.getElementById("m-cart-plus").innerText=" "+cartData.length,totalAmount(),cartItems()}function cartItems(){var e=document.getElementById("table-body");e.innerHTML="",cartData.map((t=>{var a=document.createElement("tr"),n=document.createElement("td"),d=document.createElement("img");d.src=t.img,n.appendChild(d);var r=document.createElement("td");r.innerText=t.name;var i=document.createElement("td"),c=document.createElement("button");c.setAttribute("class","decrease-item"),c.innerText="-";var m=document.createElement("span");m.innerText=t.quantity;var l=document.createElement("button");l.setAttribute("class","increase-item"),l.innerText="+",i.appendChild(c),i.appendChild(m),i.appendChild(l);var o=document.createElement("td");o.innerText=t.price,a.appendChild(n),a.appendChild(r),a.appendChild(i),a.appendChild(o),e.appendChild(a)})),document.querySelectorAll(".increase-item").forEach((e=>{e.addEventListener("click",incrementItem)})),document.querySelectorAll(".decrease-item").forEach((e=>{e.addEventListener("click",decrementItem)}))}function incrementItem(){let e=this.parentNode.previousSibling.innerText;console.log(e);var t=cartData.find((t=>t.name==e));t.quantity+=1,currPrice=(t.price*t.quantity-t.price*(t.quantity-1))/(t.quantity-1),t.price=currPrice*t.quantity,totalAmount(),cartItems()}var currPrice=0;function decrementItem(){let e=this.parentNode.previousSibling.innerText,t=cartData.find((t=>t.name==e)),a=cartData.indexOf(t);t.quantity>1?(currPrice=(t.price*t.quantity-t.price*(t.quantity-1))/t.quantity,t.quantity-=1,t.price=currPrice*t.quantity):(document.getElementById(t.id).classList.remove("toggle-heart"),cartData.splice(a,1),document.getElementById("cart-plus").innerText=" "+cartData.length+" Items",document.getElementById("m-cart-plus").innerText=" "+cartData.length,cartData.length<1&&flag&&(document.getElementById("food-items").classList.toggle("food-items"),document.getElementById("category-list").classList.toggle("food-items"),document.getElementById("m-cart-plus").classList.toggle("m-cart-toggle"),document.getElementById("cart-page").classList.toggle("cart-toggle"),document.getElementById("category-header").classList.toggle("toggle-category"),document.getElementById("checkout").classList.toggle("cart-toggle"),flag=!1,alert("Currently no item in cart!"),console.log(flag))),totalAmount(),cartItems()}function totalAmount(){var e=0;cartData.map((t=>{e+=t.price})),document.getElementById("total-item").innerText="Total Item : "+cartData.length,document.getElementById("total-price").innerText="Total Price : $ "+e,document.getElementById("m-total-amount").innerText="Total Price : $ "+e}document.getElementById("cart-plus").addEventListener("click",cartToggle),document.getElementById("m-cart-plus").addEventListener("click",cartToggle);var flag=!1;function cartToggle(){cartData.length>0?(document.getElementById("food-items").classList.toggle("food-items"),document.getElementById("category-list").classList.toggle("food-items"),document.getElementById("category-header").classList.toggle("toggle-category"),document.getElementById("m-cart-plus").classList.toggle("m-cart-toggle"),document.getElementById("cart-page").classList.toggle("cart-toggle"),document.getElementById("checkout").classList.toggle("cart-toggle"),flag=!0,console.log(flag)):alert("Currently no item in cart!")}function addEvents(){document.querySelectorAll(".add-to-cart").forEach((e=>{e.addEventListener("click",addToCart)})),document.querySelectorAll(".increase-item").forEach((e=>{e.addEventListener("click",incrementItem)})),document.querySelectorAll(".decrease-item").forEach((e=>{e.addEventListener("click",decrementItem)}))}function addAddress(){var e=prompt("Enter your address","");e?document.getElementById("add-address").innerText=" "+e:alert("Address not added")}window.onresize=window.onload=function(){var e=window.screen.width;if(console.log(e),e<800){var t=document.getElementById("food-items").cloneNode(!0),a=document.getElementById("cart-page").cloneNode(!0);document.getElementById("food-items").remove(),document.getElementById("cart-page").remove(),document.getElementById("category-header").after(t),document.getElementById("food-items").after(a),addEvents()}if(e>800){t=document.getElementById("food-items").cloneNode(!0);document.getElementById("food-items").remove(),document.getElementById("header").after(t);a=document.getElementById("cart-page").cloneNode(!0);document.getElementById("cart-page").remove(),document.getElementById("food-items").after(a),addEvents()}},document.getElementById("add-address").addEventListener("click",addAddress),document.getElementById("m-add-address").addEventListener("click",addAddress);