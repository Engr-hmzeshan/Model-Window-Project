'use strict';
// Description of project
// We can manipulate classes in DOM by 1. .add 2. .remove 3. .contain

// Understanding the Project
// 1. showModel(Click the button to show model);
// 2. closeModel -> a. close btn b. overlay close c. through Esc keyword.

// Diviide problen into sub-problems
// A. Show-Model button
// We need to perform same action in three btns?
// Answer: Use same class to action in three btns
// On click modal open and background is blur by overlay class

const btnsOpenModel = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
// Refactorizing the code after complete work
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
for (let i = 0; i < btnsOpenModel.length; i++) {
  btnsOpenModel[i].addEventListener(
    'click',
    openModal
    // function () {
    //   modal.classList.remove('hidden');
    //   overlay.classList.remove('hidden');
    // }
  );
}
// B. Close-Modal button
// closebtn + clik on background + Esc keyword

// Close-Btn
btnCloseModal.addEventListener(
  'click',
  closeModal
  // function () {
  //   modal.classList.add('hidden');
  //   overlay.classList.add('hidden');
  // }
);

// Close modal through background click
overlay.addEventListener('click', closeModal);

// Close modal using Escape keyword
// Here document(DOM) directly access all over the body where we can add keyboard events to be true.
document.addEventListener('keydown', function (event) {
  // The arguement of this function gives a keyboard(object) when function called by javascript engines.
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
