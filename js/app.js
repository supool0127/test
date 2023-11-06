const sections = document.querySelectorAll("section");

function scrollHandler(){
    for(let i = 0; i < sections.length; i++){
        if(sections[i].offsetTop -400 <= window.pageYOffset){
            sections[i].classList.add("active")
        }
    }
}

window.addEventListener("load", scrollHandler)
window.addEventListener("scroll", scrollHandler)
