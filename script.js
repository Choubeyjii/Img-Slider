 const slider = document.querySelectorAll(".slide");
 var counter = 0
 slider.forEach((slide,index)=>{
    slide.style.left =`${index *100}%`;
 })

 const goPrev=()=>{
    counter--;
    slideImage();
}

const goNext=()=>{
    counter++;
    slideImage();
}

 const slideImage =()=>{
    slider.forEach((slide)=>{
        slide.style.transform = ` translateX(-${counter*100}%)`;
    })
 }