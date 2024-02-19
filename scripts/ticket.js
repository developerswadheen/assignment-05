let count = 1;
let decreaseSeat = 39;

let array = [];

let seatLeft = document.getElementById("SeatLeft");
let seatCount = document.getElementById("seatCount");
let totalPrice = parseInt(document.getElementById("totalPrice").innerText);
let grandTotal = parseInt(document.getElementById("grandTotal").innerText);
let applyBtn = document.getElementById("applyBtn");

let busSeat = document.getElementsByClassName("seatBtn");

for (let i of busSeat) {
  i.addEventListener("click", function () {
    console.log(i.innerText);
    seatCount.innerText = count;
    count++;
  
    seatLeft.innerText = decreaseSeat;
    decreaseSeat--;

    i.classList.add("bg-[#1DD100]");

    // i.setAttribute('disabled', true);

    let motherDiv = document.getElementById("seatBook");
    let div = document.createElement("div");
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");
    let p3 = document.createElement("p");

    let seatNumber = i.innerText;
    array.push(seatNumber);

    let arrayLength = array.length;
    console.log(arrayLength);

    if (arrayLength >= 5) {
      alert("You can Select Max 4 Seats");
      i.classList.remove("bg-[#1DD100]");
      return;
    }
    if (arrayLength > 3) {
      applyBtn.removeAttribute("disabled", true);
    }
    
    p1.innerText = seatNumber;
    p2.innerText = "Economy";
    p3.innerText = 550;

    div.appendChild(p1);
    div.appendChild(p2);
    div.appendChild(p3);

    motherDiv.appendChild(div);
    div.classList.add("flex", "justify-between");

    let priceTotal = p3.innerText;
    let seatPrice = parseInt(priceTotal);

    totalPrice = totalPrice + seatPrice;

    document.getElementById("totalPrice").innerText = totalPrice;
    document.getElementById("grandTotal").innerText = totalPrice;
  });
}

let coupon = document.getElementById("coupon");

function applyCoupon() {
  if (coupon.value == "NEW15") {
    let hide = document.getElementById("hide");
    hide.classList.add("hidden");
    // let totalTicketPrice = parseInt(document.getElementById("totalPrice").innerText);
    discountPrice = totalPrice - totalPrice * 0.15;
    document.getElementById("grandTotal").innerText = discountPrice;
  }
  else if(coupon.value == "Couple 20"){
    let hide = document.getElementById("hide");
    hide.classList.add("hidden");
    // let totalTicketPrice = parseInt(document.getElementById("totalPrice").innerText);
    discountPrice = totalPrice - totalPrice * 0.20;
    document.getElementById("grandTotal").innerText = discountPrice;
  }
}

document.getElementById('buyTicketBtn').addEventListener('click', function() {
  // Scroll to the ticket sell section smoothly
  document.getElementById('buyTicket').scrollIntoView({ behavior: 'smooth' });
});