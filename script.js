const image = document.querySelector("#image");
const preview = document.querySelectorAll(".preview");
preview.forEach(function(preview) {
preview.addEventListener("mouseover",function(){
    image.style.backgroundImage = `url(${this.src})`;
    image.innerHTML=this.alt;
})
});
preview.addEventListener("mouseout",function(){
    image.style.backgroundImage= "none";
    image.innerHTML="Hover over an image below to display here."
});