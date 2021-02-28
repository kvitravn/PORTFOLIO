export default function ToTopButton(buttonId) {
    const button = document.getElementById(buttonId)

    window.onscroll = function () {
        scrollFunction()
    };

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            button.style.display = "block"
        } else {
            button.style.display = "none"
        }
    }
}
