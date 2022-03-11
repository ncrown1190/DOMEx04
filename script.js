let total = 0;
let quantity;
let coinType;
let newCoin;
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("hello");
  let form = document.querySelector("form");
  const data = new FormData(form);
  quantity = data.get("quantity");
  coinType = data.get("coinType");
  //   console.log(quantity);
  //   console.log(coinType);
  for (let i = 0; i < quantity; i++) {
    newCoin = document.createElement("div");
    // let img = document.createElement("i");
    // img.classList.add("fa-solid", "fa-coin");

    newCoin.classList.add("coin");
    newCoin.textContent = coinType;
    const deposit = document.querySelector(".coinSection");
    deposit.append(newCoin);
    //deposit.append(img);
    if (coinType === "penny") {
      newCoin.classList.add("penny");
      total += 0.01;
    } else if (coinType === "nickel") {
      newCoin.classList.add("nickel");
      total += 0.05;
    } else if (coinType === "dime") {
      newCoin.classList.add("dime");
      total += 0.1;
    } else if (coinType === "quarter") {
      newCoin.classList.add("quarter");
      total += 0.25;
    }

    document.querySelector(".total").textContent = `Total : $${total.toFixed(
      2
    )}`;
  }
});
//delete a coin on click
// document.querySelector(".coinSection").addEventListener("click", (event) => {
//   //   console.log(event.target);
//   event.target.remove();
// });

document.querySelector(".coinSection").addEventListener("click", (event) => {
  //console.log("hi", event.target.innerText);
  event.target.remove();
  //console.log(event.target.contains(coin));
  //if ([...event.target.classList].includes("penny")) {
  //newCoin.classList.remove("penny");
  if (event.target.textContent === "penny") {
    total -= 0.01;
  } else if ([...event.target.classList].includes("nickel")) {
    //newCoin.classList.remove("nickel");
    total -= 0.05;
  } else if ([...event.target.classList].includes("dime")) {
    //newCoin.classList.remove("dime");
    total -= 0.1;
  } else if ([...event.target.classList].includes("quarter")) {
    // newCoin.classList.remove("quarter");
    total -= 0.25;
  }
  console.log(total);
  document.querySelector(".total").textContent = `Total : $${total.toFixed(2)}`;
});
