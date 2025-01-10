/*
    CSSO
    by enniosan
    MIT LICENSE 2025

*/

document.querySelectorAll('.backgroundable').forEach(item=>{item.style.backgroundImage=`url(${item.dataset.src})`;item.style.backgroundAttachemt='fixed';item.style.backgroundSize='cover';item.style.repeat='no-repeat';item.style.backgroundPosition="0% 50%";if(item.dataset.parallax){try{let imgw;let imgh;let img=new Image();img.src=item.style.backgroundImage.slice(5,-2);img.onload=function(){imgw=img.width;imgh=img.height;};let divheight=item.clientHeight;let scrollingspace=innerHeight+divheight;let scrollingdist=(scrollingspace*(item.dataset.speed*1.2));let imgheight=divheight+scrollingdist;let px=scrollingdist/scrollingspace;item.style.backgroundSize='auto '+imgheight+'px';window.addEventListener('scroll',e=>{let boundaries=item.getClientRects()[0];if(boundaries.top<window.innerHeight&&boundaries.bottom>0){space=window.innerHeight-boundaries.top;diff=scrollingspace-(scrollingspace-space);move=-1*diff*px;item.style.backgroundPosition=`0% ${move}px `;}});}catch(e){console.error(e.message);}}});