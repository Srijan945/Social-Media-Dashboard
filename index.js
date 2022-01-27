document.querySelector(".toggle-bar").addEventListener("click",function(){

    document.querySelector(".toggle-bar div").classList.toggle("toggle-mode");
    document.getElementsByTagName("body")[0].classList.toggle("dark");
    document.getElementsByClassName("toggle-bar")[0].classList.toggle("toggle-bar-color");

});