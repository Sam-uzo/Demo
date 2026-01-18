const localBusinessBtn = document.getElementById("local_business_button");
const mainBody = document.getElementById("Body");
console.log(localBusinessBtn);
const hotelButton = document.getElementById("hotel_button");
const guestButton = document.getElementById("guest_button");

localBusinessBtn.onclick = function () {
  window.location.href = "form.html";
  // setTimeout(
  //   () => alert("Click on New Account to create your business account"),
  //   200,
  // );
};

hotelButton.onclick = function () {
  console.log("Clicked hotel button");
};

guestButton.onclick = function () {
  console.log("Clicked guest button");
};
