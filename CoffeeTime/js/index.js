var link = document.querySelector(".login-link");
var popur = document.querySelector(".modal-login");
var close = document.querySelector(".modal-close");
//    var overlay = document.querySelector(".modal");
var form = document.querySelector("form");
var login = document.querySelector("[name=login]");
var password = document.querySelector("[name=password]");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("login");
}
catch (err) {
  isStorageSupport = false;
}

link.addEventListener("click",function (evt) {
  evt.preventDefault();
  popur.classList.add("modal-show");
//        overlay.classList.add("modal-overlay");

  if (storage) {
    login.value = storage;
    password.focus();
  }
  else {
    login.focus();
  }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popur.classList.remove("modal-show");
//    popur.classList.remove("modal-error");
//    overlay.classList.remove("modal-overlay");
});

form.addEventListener("submit", function (evt) {
  if (!login.value || !password.value) {
    evt.preventDefault();
    popur.classList.add("modal-error");
  }
  else {
    localStorage.setItem("login", login.value);
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();

    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
    }
  }
});
