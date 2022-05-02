// 得到 panel 属性数组
const panels = document.querySelectorAll('.panel')
// 遍历 panel 这个数组，为每一个 panel 添加点击事件
panels.forEach((item) => {
    item.addEventListener("click", () => {
        // 1. 把所有元素的 active 类名删掉
        panels.forEach((item) => {
            item.classList.remove("active")
        })
        // 2. 为当前元素添加 active 类名
        item.classList.add("active")
    })
})