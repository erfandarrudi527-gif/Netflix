"use strict"

// faq
function toggleFaq(btn) {

  const parent = btn.closest(".faq-item");

  const isOpen = parent.classList.contains("open");

  const items = document.querySelectorAll(".faq-item");

  for (let i = 0; i < items.length; i++) {
    items[i].classList.remove("open");
  }

  if (!isOpen) {
    parent.classList.add("open");
  }

}
// faq