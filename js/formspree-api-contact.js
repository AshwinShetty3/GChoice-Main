window.addEventListener("DOMContentLoaded", function() {

  var timeNow = new Date().toLocaleString("en-US", {timeZone: "Asia/Kolkata"})
     const CC_EMAIL = "bhakti.kadam@wgblindia.com"
 // const CC_EMAIL = "rohan.kavathekar@wgblindia.com"
  const SUBJECT = "Pisum Exports: Enquiry On " + timeNow
  var form = document.getElementById("contact-form")
  var button = document.getElementById("submit")
  var status = document.getElementById("toast")
  form.action = "https://formspree.io/f/mpwzekgg"

  form._cc.value = CC_EMAIL
  form._subject.value = SUBJECT

  function success() {
    form.reset();
    status.innerHTML = "Thank you. We have received your message. Our Expert will revert you back shortly."
    status.style.color = 'green'
    submit.disabled = true
  }

  function error() {
    status.innerHTML = 'We apologies for your inconvenience that enquiry has not been received to us please contact us to contact@pisumfood.com / 7219115858.'
    status.style.color = 'red'
    submit.disabled = false
  }

  form.addEventListener("submit", function(ev) {
    ev.preventDefault()
    status.innerHTML = 'sending..'
    status.style.color = 'orange'

    var isFormValid = $("#contact-form").valid();
    if (isFormValid) {
      var data = new FormData(form);
      ajax( form.method, form.action, data, success, error)
    }
    else {
      status.innerHTML = 'Please Make Sure That you have Entered correct Data'
      status.style.color = 'red'
    }
  });
});

function ajax(method, url, data, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json")
  xhr.onreadystatechange = function() {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType)
    }
  }
  xhr.send(data)
}