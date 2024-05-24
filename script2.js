window.addEventListener('scroll', () => {
    let scrollPosition = window.scrollY;
    let servicesTitle = document.querySelector('.services-title');
    let servicesImage = document.querySelector('.services-image');
    let servicesList = document.querySelector('.services-list');

    servicesTitle.style.transform = `translateY(${scrollPosition * 0.4}px)`;
    servicesImage.style.transform = `translateY(-${scrollPosition * 0.2}px)`;
    servicesList.style.transform = `translateY(-${scrollPosition * 0.1}px)`;
});