// !==================Modal Sign In
document
  .getElementById("open-modal-sign-in")
  .addEventListener("click", function () {
    document.getElementById("modal-sign-in").classList.add("is-open");
  });

document
  .getElementById("close-modal-sign-in")
  .addEventListener("click", function () {
    document.getElementById("modal-sign-in").classList.remove("is-open");
  });

// !==================Sign Up Modal
document
  .getElementById("open-modal-sign-up")
  .addEventListener("click", function () {
    document.getElementById("modal-sign-up").classList.add("is-open");
  });

document
  .getElementById("close-modal-sign-up")
  .addEventListener("click", function () {
    document.getElementById("modal-sign-up").classList.remove("is-open");
  });

// !==================Sign Up Modal PRODUCT SECTION
document
  .getElementById("product-open-modal-sign-up")
  .addEventListener("click", function () {
    document.getElementById("modal-sign-up").classList.add("is-open");
  });

document
  .getElementById("close-modal-sign-up")
  .addEventListener("click", function () {
    document.getElementById("modal-sign-up").classList.remove("is-open");
  });

// !==================Sign Up Modal PRODUCT SECTION
document
  .getElementById("open-modal-sign-in-from-sign-up")
  .addEventListener("click", function () {
    document.getElementById("modal-sign-up").classList.remove("is-open");
    document.getElementById("modal-sign-in").classList.add("is-open");
  });

// // !================== Variant #2 Sign In Modal from Sign Up
// const link = document.getElementById("open-modal-sign-in-from-sign-up");
// if (link) {
//   link.addEventListener("click", function (e) {
//     e.preventDefault(); // щоб не стрибало по #
//     document.getElementById("modal-sign-up").classList.remove("is-open");
//     document.getElementById("modal-sign-in").classList.add("is-open");
//   });
// }
