"use strict"

// faq
function toggleFaq(btn) {

  const parentEl = btn.closest(".faq-item");

  const isOpenEl = parentEl.classList.contains("open");

  const itemsEl = document.querySelectorAll(".faq-item");

  for (let i = 0; i < itemsEl.length; i++) {
    itemsEl[i].classList.remove("open");
  }

  if (!isOpenEl) {
    parentEl.classList.add("open");
  }

}
// faq