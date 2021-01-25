
function toggleShowGallery(slideTitle) {
    const gallery = document.getElementById(`${slideTitle.toLowerCase()}`);

    if (!gallery.style.display) {
        gallery.style.display = 'block';
    } else {
        gallery.style.display = '';
    }

}


const allSlides = document.querySelectorAll('slide-app');
allSlides.forEach(slide => {
    slide.addEventListener('click', e => {
        const slideTitle = e.target.getAttribute('title');
        toggleShowGallery(slideTitle);
    });
});

const allGalleries = document.querySelectorAll('.parent-gallery');
allGalleries.forEach(gallery => {
    gallery.addEventListener('click', e => {
        const slideTitle = e.currentTarget.id
        toggleShowGallery(slideTitle);
    });
});