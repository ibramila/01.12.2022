
var demo = document.getElementById("demo");
// demo.innerHTML = "Browser width: " + window.screen.width + ".";
window.addEventListener("resize", () => {
    demo.innerHTML = "Browser width: " + window.screen.width + ".";
})

var demo2 = document.getElementById("demo2");
demo2.innerHTML = "Browser availWidth: " + window.screen.availWidth + ".";