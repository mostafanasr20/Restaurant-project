let links = document.querySelectorAll('.links div');
let box = document.querySelectorAll('.box-container .boxe');



links.forEach((div) => {
    div.addEventListener("click" , removeActive)
    div.addEventListener("click" , manageBox)
})

function removeActive(){
    links.forEach((div) => {
        div.classList.remove("active");
        this.classList.add("active");
    })
}

function manageBox(){
    box.forEach((box) => {
        box.style.display = "none";
    })
  
document.querySelectorAll(this.dataset.dog).forEach((ele) => {
    ele.style.display = "block";
})
}
