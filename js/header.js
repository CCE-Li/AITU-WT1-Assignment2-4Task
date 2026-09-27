// 用 header.js 自身的位置推算网站根路径，
// 这样在本地 Live Server 和 GitHub Pages 的子路径下都能正确加载
const siteRoot = new URL("../", document.currentScript.src);
const headerUrl = new URL("components/header.html", siteRoot);

fetch(headerUrl)
    .then(response => response.text())
    .then(data => {
        document.getElementById("header").innerHTML = data;
        // 导航链接按网站根路径解析（各页面层级不同，不能用固定的 ../）
        document.querySelectorAll("#header nav a").forEach(link => {
            link.href = new URL(link.getAttribute("href"), siteRoot).href;
        });
    });