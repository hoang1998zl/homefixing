window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById('header').style.top = "0";
        document.getElementById('header').style.left = "0";
        document.getElementById('header').style.right = "0";
        document.getElementById('header').style.backgroundColor = "rgba(0, 0, 0, 1)";
    } else {
        document.getElementById('header').style.top = "2rem";
        document.getElementById('header').style.left = "2rem";
        document.getElementById('header').style.right = "2rem";
        document.getElementById('header').style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    }
}