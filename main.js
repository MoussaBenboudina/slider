var sliderImage= Array.from(document.querySelectorAll(".slider-container img"))
var sliderCount = sliderImage.length ;
var i = 1;
var buttonNext = document.getElementById("next");
var buttonPrev =  document.getElementById("prev");
var number = Array.from(document.querySelectorAll("ul li"));
var numberImage = document.getElementById("number");

cliick();
number.forEach((li) => {
li.addEventListener("click" , (e) => {
i = e.target.getAttribute('data-index');
cliick();
})});

buttonNext.onclick = ()=>{
    if(i  < number.length)
    i++
    cliick();
}

buttonPrev.onclick = ()=>{
    if( i > 1)
    i--;
    cliick(); 
}

function cliick(){
   
number.forEach((li) =>
li.classList.remove("active"))

sliderImage.forEach((img) =>
img.classList.remove("active"))

sliderImage[i-1].classList.add("active");

console.log("click")
number[i-1].classList.add("active");

numberImage.innerHTML =`image ${i} of ${sliderImage.length} ` 

if(i == 1){
    buttonPrev.classList.add("disabled")
    
}else{
    buttonPrev.classList.remove("disabled")
}

if(i == number.length){
    buttonNext.classList.add("disabled")
    
}else{
    buttonNext.classList.remove("disabled")
}}