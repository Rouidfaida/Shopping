const btnAddTag = document.getElementsByClassName("plus");
const checktag = document.getElementsByClassName("check");
for (var i = 0; i < btnAddTag.length; i++) {
  btnAddTag[i].addEventListener("click", add);
  checktag[i].addEventListener("click", total);
}
function add(event) {
  var btnAdd = event.target;
  var divElt = btnAdd.parentElement;
  var quentityTag = divElt.querySelector("p");
  var quentity = Number(quentityTag.innerHTML);
  quentity++;
  quentityTag.innerHTML = quentity;
  var trElt = divElt.parentElement.parentElement;
  var unitePrice = Number(trElt.querySelector(".unitPrice").innerHTML);
  var priceTag = trElt.querySelector(".price");
  var price = Number(priceTag.innerHTML);

  price = quentity * unitePrice;
  priceTag.innerHTML = price;
}
const btnaddminus = document.getElementsByClassName("minus");
for (var i = 0; i < btnaddminus.length; i++) {
  btnaddminus[i].addEventListener("click", minus);
}
function minus(event) {
  var btnMin = event.target;
  var divElt = btnMin.parentElement;
  var quentityTag = divElt.querySelector("p");
  var quentity = Number(quentityTag.innerHTML);
  if (quentity > 0) {
    quentity--;
  }
  quentityTag.innerHTML = quentity;
  var trElt = divElt.parentElement.parentElement;
  var unitePrice = Number(trElt.querySelector(".unitPrice").innerHTML);
  var priceTag = trElt.querySelector(".price");
  var price = Number(priceTag.innerHTML);
  price = quentity * unitePrice;
  priceTag.innerHTML = price;
}
function total(e) {
  var checktag = e.target;
  var price = Number(
    checktag.parentElement.parentElement.querySelector(".price").innerHTML
  );
  var totaltag = document.querySelector("#total");

  var total = Number(totaltag.innerHTML);
  if (checktag.checked === true) {
    total += price;
  } else {
    total -= price;
  }
  totaltag.innerHTML = total;
  var btnAddTag = checktag.parentElement.parentElement.querySelector(".plus");
  var btnaddminus =
    checktag.parentElement.parentElement.querySelector(".minus");
  if (checktag.checked === true) {
    btnAddTag.setAttribute("disabled", true);
  } else {
    btnaddminus.RemoveAttribute;
  }
  if (checktag.checked === true) {
    btnaddminus.setAttribute("disabled", true);
  } else {
    btnaddminus.RemoveAttribute;
  }
}

var btndelete = document.querySelectorAll(".delete");
for (i = 0; i < btndelete.length; i++) {
  btndelete[i].addEventListener("click", function boutondelete(e) {
    btndelete = e.target;
    var tr = btndelete.parentElement.parentElement.parentElement;
    var tr2 = tr.parentElement;
    tr2.remove();
  });
}
var btnlike = document.querySelectorAll(".like");

for (j = 0; j < btnlike.length; j++) {
  var likeboton = btnlike[j];
  likeboton.addEventListener("click", function boutonlike(e) {
    var boton = e.target;

    boton.style.color = "red";
  });
}
