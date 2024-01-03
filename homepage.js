const initSlider = () =>{
    const imageList = document.querySelector(".slider-wrap .image-list");
    const slideButtons = document.querySelectorAll(".slider-wrap .slide-button");

    slideButtons.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id === "prev-slide"  ? -1 : 1;
            const scrollAmount = imageList.clientWidth * direction;
            imageList.scrollBy({left: scrollAmount, behavior: "smooth"})
        });
    });
};

window.addEventListener("load", initSlider)

const initSliders = () =>{
    const imageList = document.querySelector(".container-scroll_slider-wrap .image-list_two");
    const slideButtons = document.querySelectorAll(".container-scroll_slider-wrap .slide-buttonn");

    slideButtons.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id === "prev-slides"  ? -1 : 1;
            const scrollAmount = imageList.clientWidth * direction;
            imageList.scrollBy({left: scrollAmount, behavior: "smooth"})
        });
    });
};

window.addEventListener("load", initSliders)