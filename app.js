const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll('.movie-list');

arrows.forEach((arrow, i)=> {
    const itemLength = movieLists[i].querySelectorAll('img').length;
    let clickCounter = 0 
    arrow.addEventListener('click', () => {
        clickCounter++;
        const ratio = Math.floor(window.innerWidth/155);
        if(itemLength - (6+clickCounter)  + (6-ratio) >= 0) {
            movieLists[i].style.transform = `translateX(${
                movieLists[i].computedStyleMap().get("transform")[0].x.value -230
            }px)`;
        } else {
            movieLists[i].style.transform = "translateX(0)";
            clickCounter=0;
        }
        // console.log(movieLists[i].computedStyleMap().get("transform")[0].x.value);
    })
})




const ball = document.querySelector('.toogle-ball')
const items = document.querySelectorAll('.navbar, .navbar-container, .sidebar, .left-menu-icon, .container, .movie-list-title');

ball.addEventListener('click', () => {
    items.forEach(item => {
        item.classList.toggle("active")
    })
    ball.classList.toggle("active")

})

