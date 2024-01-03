const mainBodyContainer = document.querySelector('.main-container');

let secondaryColor = '#F7F8F3';

//INITAL LOADING IS SET TO - RGB 
document.addEventListener('DOMContentLoaded', () => {
    colorChangeForRGB();

    let selectedColourScheme = document.querySelector('#colours');

    selectedColourScheme.addEventListener('change', () => {
        let selectedColourSchemeInText = selectedColourScheme.value;
        console.log(selectedColourSchemeInText);
    
        if ( selectedColourSchemeInText === 'rbgClr' ){
            colorChangeForRGB();
        }
        else{
            colorChangeForBNW();
        }
    });
});

function colorChangeForRGB(){
    document.querySelector('.main-container').innerHTML = '';
    for ( let count=0; count<256; count++ ){
        const childConatiner = document.createElement('div');
        childConatiner.classList.add('child');
        mainBodyContainer.appendChild(childConatiner);

        //STYLING
        childConatiner.style.backgroundColor = secondaryColor;
        childConatiner.style.border = '1px solid black';
        childConatiner.style.height = '40px';
        childConatiner.style.width = '40px';
    
        //HOVER EFFECT
        childConatiner.addEventListener('mouseover',(child)=>{
    
            //RANDOM RGBA COLOUR PICKING
            const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
            const r = randomBetween(0,255);
            const g = randomBetween(0,255);
            const b = randomBetween(0,255);
            const randomlyPickedColour = `rgb(${r},${g},${b})`;
    
            //COLOUR CHANGE
            child.target.style.backgroundColor = randomlyPickedColour;
        });
    }
}

function colorChangeForBNW(){
    document.querySelector('.main-container').innerHTML = '';
    for ( let count=0; count<256; count++ ){
        const childConatiner = document.createElement('div');
        childConatiner.classList.add('child');
        mainBodyContainer.appendChild(childConatiner);
    
        //STYLING
        childConatiner.style.backgroundColor = secondaryColor;
        childConatiner.style.border = '1px solid black';
        childConatiner.style.height = '40px';
        childConatiner.style.width = '40px';
    
        //HOVER EFFECT
        childConatiner.addEventListener('mouseover',(child)=>{
    
            //COLOUR CHANGE
            child.target.style.backgroundColor = 'black';
        });
    }
}







