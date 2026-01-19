export function localBusinessOnboarding(previousPage) {
  const businessSelect = document.getElementById("business_btn");
  const guestSelect = document.getElementById("guest_btn");
  const hotelSelect = document.getElementById("hotel_btn");

  console.log(hotelSelect);
  console.log(businessSelect);
  console.log(guestSelect);

  hotelSelect.addEventListener("click", () => {
    if (previousPage.includes(`index.html`)) {
      window.location.href = `login.html`;
      }
  });
  businessSelect.addEventListener("click", () => {
    window.location.href = `form.html`;
  });
  // guestSelect.addEventListener("click", () => {});
}
// localBusinessOnboarding();
