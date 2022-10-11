const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll('.movie-list');

arrows.forEach((arrow, i)=> {
    const itemLength = movieLists[i].querySelectorAll('img').length;
    let clickCounter = 0 
    arrow.addEventListener('click', () => {
        clickCounter++
        if(itemLength - (6+clickCounter) > 0) {
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


