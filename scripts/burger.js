window.addEventListener('resize', function(event){
  if (window.innerWidth > 480) {
    document.querySelector("#menu").style.display = "inline-block"
  } else {
    document.querySelector("#menu").style.display = "none"
  }}
  );

function showMenu() {
  let menu = document.querySelector("#menu");
  let visibility = menu.style.display === "block" ? "none" : "block";

  menu.style.display = visibility;
};
