/*
    CSSO
    by enniosan
    MIT LICENSE 2025

*/

document.querySelectorAll('.backgroundable').forEach( item => {
    item.style.backgroundImage = `url(${item.dataset.src})`;
    item.style.backgroundAttachemt = 'fixed';
    item.style.backgroundSize = 'cover';
    item.style.repeat = 'no-repeat';
    item.style.backgroundPosition = "0% 50%";

    if(item.dataset.parallax){

        window.addEventListener('scroll', () => {
            let scroll = window.scrollY;
            let speed = item.dataset.speed;
            item.style.backgroundPosition = `0% ${50 + scroll * speed *-1}%`;
            console.log( scroll, speed, item.style.backgroundPosition );
        });
    }

});