let btn = document.getElementById("btn")
btn.addEventListener("click", () => {
    window.location.assign("https://www.google.com");
});
// other method:
// btn.addEventListener("click", () => {
//     window.open("https://www.google.com", '_blank');
// })