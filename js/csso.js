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

        litem = false;
        le = false;

    if(item.dataset.parallax){

        let imgw;
        let imgh;
        let ratio;

        /*  
            check the effective dimension of the picture to calculate the ratio

        */
        
        let img = new Image();
        img.src = item.style.backgroundImage.slice(5, -2);
        
        img.onload = function() {
            imgw    = img.width;
            imgh    = img.height;
            ratio   = imgw / imgh;
        };


        /*  
            calculating the entity of the parallax scrolling
            the effect i want to achieve is to scroll the image for a number of pixels
            lower than the numer of current pixels scrolled by the user

            to achieve this i use the "speed" parameter in dataset
            and properly resize the image to cover the div for the entire space of the scrolling

        */
    
        divheight = item.clientHeight;
        scrollingspace = innerHeight + divheight;   //  number of pixels the div is subject to scroll
        scrollingdist = ( scrollingspace * ( item.dataset.speed * 1.2 ) );             //  number of pixels the image has to scroll for each pixel

        /*  caluclating the correct size of the finel image */
        let imgheight = divheight + scrollingdist;

        let px = scrollingdist / scrollingspace;
        
        /*  resizing the image 
            - repositioning the image at top                 
        */

        item.style.backgroundSize = 'auto ' + imgheight + 'px';
        item.style.repeat = 'no-repeat';
        item.style.backgroundPosition = "0% 50%";

        litem = item;



        boundaries = item.getClientRects()[0];



        console.log( "il div è alto ", divheight );
        console.log( "la distanza di scroll è ", scrollingspace );
        console.log( "la distanza di scroll per pixel è ", scrollingdist );
        console.log( "l'altezza dell'immagine è ", imgheight );
        console.log( "il rapporto è ", ratio );
        console.log( "il px è ", px );



                
        window.addEventListener('scroll', e => {
            
            boundaries = item.getClientRects()[0];
            
            if( boundaries.top < window.innerHeight && boundaries.bottom > 0){

                space = window.innerHeight - boundaries.top;

                diff = scrollingspace - (scrollingspace - space);

                move = -1 * diff * px;

                item.style.backgroundPosition = `0% ${move}px `;


                console.log( "mv ", item.style.backgroundPosition);

            }
            else{

                console.log( "NOT in view" );

            }
        });
    }

});