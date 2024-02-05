{
  document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('myForm');

    form.addEventListener('submit', function(event) {
        let valid = true;

        // Validate First Name
        const firstNameInput = document.getElementById('first-name');
        const firstNameError = document.getElementById('first-name-error');
        if (firstNameInput.value.trim() === '') {
            firstNameError.textContent = 'First name is required';
            valid = false;
        } else {
            firstNameError.textContent = '';
        }

        // Validate Last Name
        const lastNameInput = document.getElementById('last-name');
        const lastNameError = document.getElementById('last-name-error');
        if (lastNameInput.value.trim() === '') {
            lastNameError.textContent = 'Last name is required';
            valid = false;
        } else {
            lastNameError.textContent = '';
        }

        // Validate Phone Number
        const phoneInput = document.getElementById('phone');
        const phoneError = document.getElementById('phone-error');
        if (phoneInput.value.trim() === '') {
            phoneError.textContent = 'Phone number is required';
            valid = false;
        } else {
            phoneError.textContent = '';
        }

        // Validate Email
        const emailInput = document.getElementById('email');
        const emailError = document.getElementById('email-error');
        if (emailInput.value.trim() === '') {
            emailError.textContent = 'Email is required';
            valid = false;
        } else {
            emailError.textContent = '';
        }

        if (!valid) {
            event.preventDefault(); // Prevent form submission if there are validation errors
        }
    });

    // Add input event listeners to clear error messages when user types in the input fields
    const inputFields = form.querySelectorAll('input');
    inputFields.forEach(function(input) {
        input.addEventListener('input', function() {
            const errorElement = document.getElementById(input.id + '-error');
            errorElement.textContent = '';
        });
    });
});
  }



$(document).ready(function () {
  $('#nav-toggler').on('click', function () {
    $(this).toggleClass('fa-times');
    $('.main-nav .nav-items').toggleClass('show');
  });
  $(window).on('scroll load', function () {

    if ($(window).scrollTop() > 0) {
      $('.main-nav').addClass('bgchange');
    } else {
      $('.main-nav').removeClass('bgchange');
    }


  });
});
$(document).ready(function () {
  // Add click event listener to all links with class 'nav-link'
  $('.nav-link').on('click', function () {
    // Remove the active class from all links
    $('.nav-link').removeClass('active');

    // Add the active class to the clicked link
    $(this).addClass('active');
  });
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1, // Show 2 slides at a time
  spaceBetween: 20,
  loop: false, // Disable loop
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      // Only render bullets for the first two slides
      if (index < 2) {
        return '<span class="' + className + '"></span>';
      }
      return ''; // No bullet for the remaining slides
    },
  },
  // breakpoints: {
  //   320: {
  //     slidesPerView: 1,
  //   },
  //   550: {
  //     slidesPerView: 1,
  //   },
  //   768: {
  //     slidesPerView: 2,
  //   },
  //   1000: {
  //     slidesPerView: 2,
  //   },
  //   1200: {
  //     slidesPerView: 3,
  //   },
  //   1500: {
  //     slidesPerView: 3,
  //   },
  // },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


const emailInput = document.getElementById("email");
const subscribeBtn = document.getElementById("subscribeBtn");
const errorModal = new bootstrap.Modal(document.getElementById("errorModal"));
const successModal = new bootstrap.Modal(document.getElementById("successModal"));

// Add click event listener to the Subscribe button
subscribeBtn.addEventListener("click", function () {
  validateEmail();
});

// Add keydown event listener to the email input
emailInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault(); // Prevent form submission
    validateEmail();
  }
});

// Function to validate email and show modals
function validateEmail() {
  const emailValue = emailInput.value.trim();

  if (emailValue === "") {
    errorModal.show();
  } else if (!emailValue.includes("@")) {
    // Check if "@" is present in the email
    errorModal.show();
  } else {
    successModal.show();
    // You can also reset the input field if needed
    // emailInput.value = "";
  }
}

