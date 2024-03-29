// (() => {
//   const refs = {
//     openModalBtn: document.querySelector("[data-modal-open]"),
//     closeModalBtn: document.querySelector("[data-modal-close]"),
//     modal: document.querySelector("[data-modal]"),
//     // body: document.querySelector("[body]"),
//   };

//   refs.openModalBtn.addEventListener("click", toggleModal);
//   refs.closeModalBtn.addEventListener("click", toggleModal);

//   function toggleModal() {
//     // document.body.classList.toggle("modal-open");
//     refs.modal.classList.toggle("is-hidden");
//     // refs.body.classList.toggle("no-scroll");
//   }
// })();

(() => {
  const openModalBtns = document.querySelectorAll("[data-modal-open]");
  const closeModalBtn = document.querySelector("[data-modal-close]");
  const modal = document.querySelector("[data-modal]");

  openModalBtns.forEach((btn) => {
    btn.addEventListener("click", toggleModal);
  });

  closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    modal.classList.toggle("is-hidden");
  }
})();
