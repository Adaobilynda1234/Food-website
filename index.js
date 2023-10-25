const product = [
  {
    id: 0,
    image: "images/Tomato.jpg",
    title: "A bucket of Tomatoes",
    price: 2500,
  },
  {
    id: 1,
    image: "images/pepper.jpg",
    title: "A bucket of pepper",
    price: 1500,
  },
  {
    id: 2,
    image: "images/goat.jpg",
    title: "Goat meat",
    price: 3500,
  },
  {
    id: 3,
    image: "images/cowjpg.jpg",
    title: "Cow meat",
    price: 4500,
  },
];
const categories = [
  ...new Set(
    product.map((item) => {
      return item;
    })
  ),
];
let i = 0;
document.getElementById("root").innerHTML = categories
  .map((item) => {
    var { image, title, price } = item;
    return (
      `<div class='flex justify-between flex-col items-center border border-2 border-gray-300 rounded-sm p-4'>
            <div class='w-full h-180 flex item-center justify-center'>
                <img class='max-w-90 max-h-90 object-cover object-center' src=${image}></img>
            </div>
        <div class='mt-5 w-full text-center flex flex-col justify-between h-110'>
        <p>${title}</p>
        <h2 class='font-5 text-red-900'>$ ${price}.00</h2>` +
      "<button class='w-full relative rounded-sm bg-yellow-600 py-2 px-5 text-white cursor:pointer hover:bg-gray-300' onclick='addtocart(" +
      i++ +
      ")'>Add to cart</button>" +
      `</div>
        </div>`
    );
  })
  .join("");

var cart = [];

function addtocart(a) {
  cart.push({ ...categories[a] });
  displaycart();
}
function delElement(a) {
  cart.splice(a, 1);
  displaycart();
}

function displaycart() {
  let j = 0,
    total = 0;
  document.getElementById("count").innerHTML = cart.length;
  if (cart.length == 0) {
    document.getElementById("cartItem").innerHTML = "Your cart is empty";
    document.getElementById("total").innerHTML = "$ " + 0 + ".00";
  } else {
    document.getElementById("cartItem").innerHTML = cart
      .map((items) => {
        var { image, title, price } = items;
        total = total + price;
        document.getElementById("total").innerHTML = "$ " + total + ".00";
        return (
          `<div class='flex align-center justify-between p-3 bg-white border border-b-1 border-black rounded-sm mx-2 my-2'>
                <div class='w-10 h-10 rounded-lg  border border-1 border-bg-orange-600 align-center justify-center'>
                    <img class='max-w-43 max-h-43 rounded-lg ' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>$ ${price}.00</h2>` +
          "<i class='fa-solid fa-trash' onclick='delElement(" +
          j++ +
          ")'></i></div>"
        );
      })
      .join("");
  }
}
