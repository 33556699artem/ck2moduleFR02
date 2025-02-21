function getCurrentDate() {
    console.log(Date.now());
}
window.addEventListener('load', function () {
    setTimeout(getCurrentDate, 10000);
});
