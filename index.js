// import  {emailEmail, emailPassword}  from './secrets/hidden';

// Show the contact form
let modalBtns = [...document.querySelectorAll(".button")];
modalBtns.forEach(function (btn) {
  btn.onclick = function () {
    let modal = btn.getAttribute("data-modal");
    document.getElementById(modal).style.display = "block";
  };
});
let closeBtns = [...document.querySelectorAll(".close")];
closeBtns.forEach(function (btn) {
  btn.onclick = function () {
    let modal = btn.closest(".modal");
    modal.style.display = "none";
  };
});
window.onclick = function (event) {
  if (event.target.className === "modal") {
    event.target.style.display = "none";
  }
};

// Contact form
function sendEmail() {
  let name = document.getElementById("userName").value;
  let email = document.getElementById("userEmail").value;
  let comment = document.getElementById("userComment").value;
  
  Email.send({
      Host : "smtp.gmail.com",
      Username :"brucekent792@gmail.com" ,
      Password : "cmkcmxxfknocdmqr",
      To : "brucekent792@gmail.com",
      From : email,
      Subject : "Invescent",
      Body : `${name} says ${comment}`
      }).then(
        message => alert("Email sent")
  );
}

// Show screen size
window.onresize = screen;
window.onload = screen;

function screen() {
  myWidth = window.innerWidth;
  console.log(myWidth);
}

// e632326f-cda4-45ce-8ab3-6740db9895f0 
// cmkcmxxfknocdmqr
