
(function() {  //IIFE for slider1

    let controlsLeft = document.querySelector('.controlsLeft');
    let controlsRight = document.querySelector('.controlsRight');
    let myCards = [];
    let newCard;
    let wrapper = document.querySelector('.wrapper'); //testing
    let wrapperWidth = +getComputedStyle(wrapper).width.slice(0, 3) + 2;

    wrapper.style.right = '0px'

    console.log(wrapperWidth);

    let currentIndex = 1;
    let moveRightWorked = false;
    let moveLeftWorked = false;


    function showCards() {
        for (let j = 1; j <= 10; j++) {

            for (let i = 1; i <= 10; i++) {
                newCard = document.createElement('div');
                newCard.classList.add('card')
                newCard.innerHTML = `Card # ${i} #${j}`;
                myCards.push(newCard);
                // console.log('a new arr has been created')
            }

            for (let i = 0; i <= 9; i++) {
                wrapper.append(myCards[i]);
                // console.log('a new div has been added')
            }
            myCards = [];
        }

        wrapper.style.right = (wrapperWidth / 3) * (wrapper.children.length / 2) + 'px';
        console.log(wrapper.children.length)

    };
    showCards();   //i could use IIFE here, but i dont have time for that. Life is too short. Just a joke.

    function moveRight() {
        // wrapper.append(myCards[currentIndex + 3]);

        if (moveLeftWorked) {
            currentIndex += 1;
            moveLeftWorked = false;
        }

        wrapper.style.right = (wrapperWidth / 3) * (wrapper.children.length / 2) + (wrapperWidth / 3) * currentIndex + 'px';
        currentIndex += 1;
        moveRightWorked = true;

        console.log('moveRight works');
        console.log(currentIndex)
    }

    function moveLeft() {

        if (moveRightWorked || ((moveRightWorked === false) & (moveLeftWorked === false))) {
            currentIndex -= 2;
            moveLeftWorked = true;
            moveRightWorked = false;
        } else {
            currentIndex -= 1;
            moveRightWorked = false;
            moveLeftWorked = true;
        }

        wrapper.style.right = (wrapperWidth / 3) * (wrapper.children.length / 2) + (wrapperWidth / 3) * currentIndex + 'px';

        console.log('moveLeft works')
        console.log(currentIndex)
    }

    controlsRight.onclick = moveRight;
    controlsLeft.onclick = moveLeft;
})();





