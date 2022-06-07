var slides = document.getElementsByClassName('presentation-item');
var btnNext = document.getElementById('next');
var btnPrev = document.getElementById('prev');
var i = 0;
var n = slides.length;

function changeSlide(from, to){
    slides[from].classList.toggle('active-slide');
    i=to;
    slides[to].classList.toggle('active-slide'); 
}

function nextSlide(){
    if(i>=n-1)
        changeSlide(i, 0);
    else
        changeSlide(i, i+1);
}

function prevSlide(){
    if(i<=0)
        changeSlide(i, n-1);
    else
        changeSlide(i, i-1);
}

btnNext.addEventListener("click", nextSlide);
btnPrev.addEventListener("click", prevSlide);
document.addEventListener('keyup', (e)=>{
    if(e.key==="ArrowRight")
        nextSlide()
    if(e.key==="ArrowLeft")
        prevSlide()
})