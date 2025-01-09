/*
    CSSO
    by enniosan
    MIT LICENSE 2025

*/

document.querySelectorAll('.backgroundable').forEach( item => {
    /*
        if a div has the backgroundable class
        this script will change the background image with the one specified in data
        and set it to cover the entire surface
    */

    item.style.backgroundImage = `url(${item.dataset.src})`;
    item.style.backgroundAttachemt = 'fixed';
    item.style.backgroundSize = 'cover';
    item.style.repeat = 'no-repeat';
    item.style.backgroundPosition = "0% 50%";

    /*
        if a div has set to true the parallax data value
        this is the point where the effect is calculated
        
        the parallax effect has a specific behaviur
        - calculates the original position
        - check the current scrolling position
        - when the div is visibile begins the parallax effect. 
        
    */

    if(item.dataset.parallax){

        try{
            let imgw;
            let imgh;

            /*  
                check the effective dimension of the picture to calculate the ratio

            */
            
            let img = new Image();
            img.src = item.style.backgroundImage.slice(5, -2);
            
            img.onload = function() {
                imgw    = img.width;
                imgh    = img.height;

                /*  
                    calculating the entity of the parallax scrolling
                    the effect i want to achieve is to scroll the image for a number of pixels
                    lower than the numer of current pixels scrolled by the user

                    to achieve this i use the "speed" parameter in dataset
                    and properly resize the image to cover the div for the entire space of the scrolling
                */
            
                let divwidth        = item.clientWidth;        /*  height of the div */
                let divheight       = item.clientHeight;        /*  height of the div */
                let scrollingspace  = innerHeight + divheight;  /*  total space of scrolling */
                let scrollingdist   = ( scrollingspace * ( item.dataset.speed * 1.2 ) );    /*  distance of scrolling */

                /*  caluclating the correct size of the finel image */
                let imgheight = divheight + scrollingdist;

                /*  caculating the cost of move per pixel */
                let px = scrollingdist / scrollingspace;
                
                /*  resizing and restyling the image */
                item.style.backgroundSize = 'auto ' + imgheight + 'px';
                

                /*  adding the scroll listener event */
                window.addEventListener('scroll', e => {
                    
                    let boundaries = item.getClientRects()[0];
                    
                    /*  check if the div is in view */

                    if( boundaries.top < window.innerHeight && boundaries.bottom > 0){

                        /*  calculate the move */
                        
                        space   = window.innerHeight - boundaries.top;
                        diff    = scrollingspace - (scrollingspace - space);
                        move    = -1 * diff * px;

                        /*  reposition the image */
                        item.style.backgroundPosition = `0% ${move}px `;
                    }
                });
            }
        }catch(e){
            console.error(e.message);
        }
    }
});


document.querySelectorAll('.paralText').forEach( item => {

    console.log( item.getBoundingClientRect() );

});