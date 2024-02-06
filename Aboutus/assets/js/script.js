const subscribeBtn = document.getElementById("subscribeBtn");
const emailInput = document.getElementById('subscriptionEmail');
const errorModal = new bootstrap.Modal(document.getElementById("errorModal"));
const successModal = new bootstrap.Modal(document.getElementById("successModal"));
function validateEmail() {
  
    const emailValue = emailInput.value.trim();
    if (emailValue == "") {
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

  subscribeBtn.addEventListener("click", function () {
    validateEmail();
  });

  $(document).ready(function () {
    $("#subscriptionForm").validate({
      rules: {
        firstName: {
          required: true,
        },
        lastName: {
          required: true,
        },
        email: {
          required: true,
          email: true,
        },
        phoneNumber: {
          required: true,
          digits: true,
        },
        clickingBox: {
          required: true,
        },
      },
      messages: {
        firstName: "Please enter your first name",
        lastName: "Please enter your last name",
        email: {
          required: "Please enter your email address",
          email: "Please enter a valid email address",
        },
        phoneNumber: {
          required: "Please enter your phone number",
          digits: "Please enter a valid phone number",
        },
        clickingBox: "Please check the box to proceed",
      },
      submitHandler: function (form) {
        // If validation is successful, show an alert
        alert("Form submitted successfully!");
        location.reload();
        // You can replace the alert with any other action you want to perform after successful submission.
        // For example, you can use AJAX to submit the form asynchronously or redirect the user to another page.
      },
    });
  });

  $(document).ready(function () {
    $("#subscriptionForm2").validate({
      rules: {
        firstName: {
          required: true,
        },
        lastName: {
          required: true,
        },
        email: {
          required: true,
          email: true,
        },
        state: {
          required: true,
          notEqual: "volvo" // Make sure a valid state is selected (not the placeholder "State")
        },
      },
      messages: {
        firstName: "Please enter your first name",
        lastName: "Please enter your last name",
        email: {
          required: "Please enter your email address",
          email: "Please enter a valid email address",
        },
        state: "Please select a valid state",
      },
      submitHandler: function (form) {
        // If validation is successful, show an alert
        alert("Form submitted successfully!");

        // Refresh the page upon clicking "OK" in the alert
        location.reload();
      },
    });

    // Add custom method for notEqual rule
    $.validator.addMethod("notEqual", function(value, element, param) {
      return this.optional(element) || value !== param;
    }, "Please select a valid state");
  });