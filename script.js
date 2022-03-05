
const iconLinks = document.querySelectorAll(".icon__link");

iconLinks.forEach(link => {
    link.addEventListener("mouseover", () => {

        link.classList.add("mouse-over-color")

    })
    
    link.addEventListener("mouseleave", () => {

        link.classList.remove("mouse-over-color")
    })
});

css-file.mouse-over-color {
    
    color = '#E882E8';

}


// let iconToggleStatus = false;

// function iconToggle() {
//     let links = document.querySelectorAll(".icon__link");
//     let icon = document.querySelectorAll(".icon__italic");

//     if (iconToggleStatus == false) {
//         links.style.color = "white";
//         icon.style.borderColor = "white";
//         iconToggleStatus = true;
//     }
//     else if (iconToggleStatus == true) {
//         links.style.color = "#E882E8";
//         icon.style.borderColor = "#E882E8";
//         iconToggleStatus = false;
//     }
// }



// links.addEventListener('mouseover', iconToggle);