// 获取蓝线元素
const progress = document.getElementById("progress");
// 获取按钮元素
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");
let currentActive = 1
next.addEventListener("click", () => {
    currentActive++;
    update();
})
prev.addEventListener("click", () => {
    currentActive--;
    update();
})
function update() {
    circles.forEach((item, index) => {
        if (index < currentActive) {
            item.classList.add("active");
        } else {
            item.classList.remove("active");
        }
    })
    progress.style.width = (currentActive - 1) / (circles.length - 1) * 100 + "%"
    if (currentActive === 1) {
        prev.disabled = true;
    } else if (currentActive === 4) {
        next.disabled = true;
    } else {
        prev.disabled = false;
        next.disabled = false;
    }
}