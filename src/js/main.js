function onEntry(entry) {
   entry.forEach(change => {
     if (change.isIntersecting) {
      change.target.classList.add('element-show');
     }
   });
 }
 
 let options = {
   threshold: [0.5] };
 let observer = new IntersectionObserver(onEntry, options);
 let elements = document.querySelectorAll('.element-animation');
 
 for (let elm of elements) {
   observer.observe(elm);
 }

 $('.reviews-slider').slick({
  dots: true,
  infinite: true,
  autoplay: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true
});

$('.brands').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  infinite: true,
  pauseOnFocus: false,
  waitForAnimate: false,
});