/* thuyduyen.js */
document.addEventListener("DOMContentLoaded", function () {
    console.log("Personal Info Page Loaded");

    // Example: Add hover effect on profile picture
    const profileImg = document.querySelector(".profile img");
    profileImg.addEventListener("mouseover", function () {
        profileImg.style.transform = "scale(1.1)";
        profileImg.style.transition = "0.3s ease-in-out";
    });
    profileImg.addEventListener("mouseleave", function () {
        profileImg.style.transform = "scale(1)";
    });
});