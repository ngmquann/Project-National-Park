let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
//Check log in
function checkLogIn(){
  if(localStorage.getItem('isLogin') == null){localStorage.isLogin = "false"};
}

//Click button logout
function logOut(){
  localStorage.isLogin = false;
}
//Show/Hide icon login
function showHideIcon(){
  if(localStorage.isLogin == "false"){$('.icon-user').removeClass('d-none')
            }else{$('.icon-chao, .logOut').removeClass('d-none')}
}
//Loading page
function myFunction() {
  let timeout = setTimeout(alertFunc, 600);
  }
function alertFunc() {
  $('.loading').addClass('d-none')
}
myFunction()
function showUserName(){
  if(localStorage.isLogin == "true"){
    $("#userName").html(localStorage.getItem("email"));   
}
}

