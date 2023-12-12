var menuBtn = document.getElementById("menuBtn")
var sideNav = document.getElementById("sideNav")
var menu = document.getElementById("menu")



menuBtn.onclick = function(e) {
  //stop propagation of document click
  e.stopPropagation()

  //toggle side nav
  if (!sideNav.classList.contains("open")) {
    sideNav.classList.add("open");
    menu.src = "images/close.PNG";
  } else {
    sideNav.classList.remove("open");
    menu.src = "images/menu.PNG";
  }
}


//stop propagation on the side nav element
sideNav.onclick = function(e) {
  e.stopPropagation()
}

//close menu when document is clicked
document.onclick = function() {
  sideNav.classList.remove("open");
  menu.src = "images/menu.PNG";
}