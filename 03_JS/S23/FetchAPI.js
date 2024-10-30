function getProducts() {
  fetch("https://fakestoreapi.com/products")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      data.forEach(function (product) {
        createCard(product);
      });
    })
    .catch((error) => {
      alert("erroe while fetching the data");
    });
}

function createCard(product) {
  //create a Div Dom Element
  var divDomElement = document.createElement("div");
  divDomElement.style.width = "270px";

  divDomElement.style.boxShadow = "0 0 10px black";
  divDomElement.style.textAlign = "center";
  divDomElement.style.padding = "10px";

  //create a Image
  var img = document.createElement("img");
  img.src = product.image;
  img.width = "270";
  img.height = "200";

  //create h4
  var h4 = document.createElement("h4");
  h4.innerText = product.title;

  //create p
  var p = document.createElement("p");
  p.innerText = "$" + product.price;

  //create p
  var pDesc = document.createElement("p");
  pDesc.innerText =
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. ";

  //create button
  var btn = document.createElement("button");
  btn.innerText = "Product Details";

  //add image,h4,p,p,button in div
  divDomElement.appendChild(img);
  divDomElement.appendChild(h4);
  divDomElement.appendChild(p);
  divDomElement.appendChild(pDesc);
  divDomElement.appendChild(btn);

  document.querySelector("#dynamic").appendChild(divDomElement);
}
