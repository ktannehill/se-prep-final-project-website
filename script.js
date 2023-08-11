function addClickEvent() {

    const button = document.getElementsByClassName("readMore");

// console.log(button);

    // ClassName returns HTML Collection array-thing
    // Need to index to get the actual button
    // then iterate through array of multiple buttons

    function clickAlert() {
        alert("Sorry, content does not exist!");
    };

    function clickAlert2() {
        alert("Be sure to check back soon!");
    };

    for(i = 0; i < button.length; i++){

    button[i].addEventListener("click", clickAlert);
    button[i].addEventListener("click", clickAlert2);

    };
};

addClickEvent();


// as page is scrolled down
// slide image from left
// when it is reached on the screen
document.addEventListener("scroll", slideImg);

/* function slideImg() {
  if (document.documentElement.scrollTop > 250) {
    let imgSlide = document.getElementByClassName("slideUp")
    for(i = 0; i < imgSlide.length; i++){
        imgSlide[i].className = "slideUp";
    }
  }
} */

/* function slideImg() {
    let top = ;
    let i = 0;
    while (document.documentElement.scrollTop < ) {
      let imgSlide = document.getElementByClassName("slideUp")
      for(i = 0; i < imgSlide.length; i++){
          imgSlide[i].className = "slideUp";
      }
    }
  } */