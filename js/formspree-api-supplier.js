window.addEventListener("DOMContentLoaded", function() {
  var form = document.getElementById("supplier-form-modal");
  var status = document.getElementById("supplier-toast");
  form.action = "https://formcarry.com/s/Dc1rp6BHI-d";

  function success() {
    form.reset();
    status.innerHTML = "Message has been sent successfully!";
    status.style.color = 'green';
    status.style.display = 'block';
  }

  function error() {
    status.innerHTML = 'There was an error sending your message. Please try again.';
    status.style.color = 'red';
    status.style.display = 'block';
  }

  form.addEventListener("submit", function(ev) {
    ev.preventDefault();
    status.innerHTML = 'Sending...';
    status.style.color = 'orange';
    status.style.display = 'block';

    var isFormValid = $("#supplier-form-modal").valid();
    if (isFormValid) {
      var data = new FormData(form);
      fetch(form.action, {
        method: "POST",
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      })
      .then(response => {
        if (response.ok) {
          success();
        } else {
          error();
        }
      })
      .catch(() => {
        error();
      });
    } else {
      status.innerHTML = 'Please Make Sure That you have Entered correct Data';
      status.style.color = 'red';
      status.style.display = 'block';
    }
  });
});