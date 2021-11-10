const qty = document.querySelector(".number");
const priceAmount = document.querySelector(".price-amount");
const addQty = document.querySelector(".fa-plus");
const remvQty = document.querySelector(".fa-minus");
const defaultAmount = priceAmount.textContent.split("$")[1];
const images = [...document.querySelectorAll(".smaller-screen img")];
const galleryContainer = document.querySelector(".galleryContainer");
const bigImage = document.querySelector(".bigImageData");
const closeModal = document.querySelector(".fa-times");
const nextImage = document.querySelector(".fa-arrow-right");
const prveImage = document.querySelector(".fa-arrow-left");

addQty.addEventListener("click", () => {
  addItem();
  changeAmount();
});
remvQty.addEventListener("click", () => {
  removeItem();
  changeAmount();
});

function addItem() {
  qty.textContent++;
}
function removeItem() {
  Number(qty.textContent) === 1 ? (remvQty.disabled = true) : qty.textContent--;
}

function changeAmount() {
  const itemsQty = Number(qty.textContent);
  priceAmount.textContent = "$" + defaultAmount * itemsQty + "." + "00";
}

images.forEach((img) => {
  img.addEventListener("click", (e) => {
    const target = e.target.getAttribute("src");
    galleryContainer.style.display = "flex";
    bigImage.setAttribute("src", target);
  });
});

closeModal.addEventListener("click", () => {
  galleryContainer.style.display = "none";
});

nextImage.addEventListener("click", () => {
  let currentPos =
    bigImage
      .getAttribute("src")
      .split("")
      .map((elem) => parseInt(elem))
      .filter((elem) => !isNaN(elem))[0] - 1;
  if (currentPos >= 3) {
    currentPos = -1;
  }
  bigImage.setAttribute("src", images[currentPos + 1].getAttribute("src"));
});

prveImage.addEventListener("click", () => {
  let currentPos =
    bigImage
      .getAttribute("src")
      .split("")
      .map((elem) => parseInt(elem))
      .filter((elem) => !isNaN(elem))[0] - 1;
  currentPos = currentPos - 1;

  if (currentPos < 0) {
    currentPos = 3;
  }
  bigImage.setAttribute("src", images[currentPos].getAttribute("src"));
});
