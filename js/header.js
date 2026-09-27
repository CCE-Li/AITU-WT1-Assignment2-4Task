// 用 header.js 自身的位置推算 components 路径，
// 这样在本地 Live Server 和 GitHub Pages 的子路径下都能正确加载
const headerUrl = new URL("../components/header.html", document.currentScript.src);

fetch(headerUrl)
    .then(response => response.text())
    .then(data => {
        document.getElementById("header").innerHTML = data;
    });