const contentContainer = document.querySelector(".content");
const thanksContainer = document.querySelector(".thanks");
const ratings = document.querySelectorAll(".numbers");
const actualRating = document.getElementById("rating");


function submitFunction() {
    contentContainer.style.display = "none";
    thanksContainer.classList.remove("hidden");
};

ratings.forEach(function (i) {
    
    i.addEventListener('click', function() {
        ratings.forEach((rating)=> {
            rating.classList.remove("active");
        });    i.classList.add("active");
    document.getElementById("rating").innerHTML = i.innerHTML;
    

});
}); 



