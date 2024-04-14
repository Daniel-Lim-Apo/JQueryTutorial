$(document).ready(function () {
  $("#registrationForm").submit(function (event) {
    let isValid = true;

    const name = $("#name").val().trim();
    if (name === "") {
      $("#errorName").text("Name is required.");
      isValid = false;
    } else {
      $("#errorName").text("");
    }

    const email = $("#email").val().trim();
    if (email === "") {
      $("#errorEmail").text("Email is required.");
      isValid = false;
    } else if (!/^[^@]+@\w+(\.\w+)+\w$/.test(email)) {
      $("#errorEmail").text("Invalid email format.");
      isValid = false;
    } else {
      $("#errorEmail").text("");
    }

    const password = $("#password").val();
    if (password.length < 6) {
      $("#errorPassword").text("Password must be at least 6 characters long.");
      isValid = false;
    } else {
      $("#errorPassword").text("");
    }

    if (!isValid) {
      event.preventDefault();
    }
  });
});
