const menulinks = document.querySelectorAll(".Lista_nav a");

menulinks.forEach((link)=> {
    link.addEventListener(() => console.log("Clicked"));
}