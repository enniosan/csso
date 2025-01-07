/*
    CSSO
    by enniosan
    MIT LICENSE 2025

*/

document.querySelectorAll('.backgroundable').forEach( item => {
    item.style.backgroundImage = `url(${item.dataset.src})`;
    item.style.backgroundSize = 'cover';
    item.style.repeat = 'no-repeat';
    item.style.backgroundPosition = "0% 50%";
});