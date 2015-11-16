(function(){
  var btnMenu = document.getElementById("btnMenu");
  var menu = document.getElementById("navbarMenu");
  btnMenu.addEventListener("click", onClickMenu);

  function onClickMenu() {
    menu.classList.toggle("header-menu-list--show");
  }
}());
