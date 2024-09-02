const ratingCards = document.querySelectorAll(".rating-options span")
const submit_btn = document.querySelector(".submit-btn");
const rate_point = document.getElementById("rate");
const rating_section = document.querySelector(".rating-state");
const thank_section = document.querySelector(".thank-you-state");

let rate = null;

ratingCards.forEach((rating_card) => {
    rating_card.addEventListener('click', (e) => {
        const active = document.querySelector('.checked');
        if(active){
            active.classList.remove("checked")
        }
        const card = e.target;
        card.classList.add("checked");
        rate = e.target.innerText;
    })
})

submit_btn.addEventListener('click', () => {
    if (rate) {
        rate_point.innerText = rate;
        rating_section.classList.add("hidden");
        thank_section.classList.remove("hidden");
    }
})