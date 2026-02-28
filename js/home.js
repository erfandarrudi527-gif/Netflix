"use strict"
  const submitbtn = document.querySelector(".submit");
  const inpEmailEl = document.querySelector(".inpEmail");

  submitbtn.addEventListener("click", function(e) {
    e.preventDefault(); //
    
    if (inpEmailEl.value !== "") {
      alert("Thank you for subscribing to our newsletter!");
      inpEmailEl.value = ""; 
    }
  });
// faq

  const buttonbtnEl = document.querySelector(".button");
  const emailEl = document.querySelector(".email");

  buttonbtnEl.addEventListener("click", function(e) {
    e.preventDefault(); //
    
    if (emailEl.value !== "") {
      alert("Thank you for subscribing to our newsletter!");
      emailEl.value = ""; 
    }
  });
    const signinbtnEl = document.querySelector(".signin");

  signinbtnEl.addEventListener("click", function(e) {
    e.preventDefault();
      alert("ایمیل شما با موفقیت ثبت شد");
      signinbtnEl.value = ""; 
  });


const itemsEl = document.querySelectorAll(".faq-item");
function toggleFaq(btn) {
    
  const parentEl = btn.closest(".faq-item");
  const isOpenEl = parentEl.classList.contains("open");
  for (let i = 0; i < itemsEl.length; i++) {
    itemsEl[i].classList.remove("open");
  }

  if (!isOpenEl) {
    parentEl.classList.add("open");
  }

}

// faq