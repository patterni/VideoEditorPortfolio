window.addEventListener('scroll', () => {
    let scrollPosition = window.scrollY;
    let servicesTitle = document.querySelector('.services-title');
    let servicesImage = document.querySelector('.services-image');
    let servicesList = document.querySelector('.services-list');

    servicesTitle.style.transform = `translateY(${scrollPosition * 0.4}px)`;
    servicesImage.style.transform = `translateY(-${scrollPosition * 0.2}px)`;
    servicesList.style.transform = `translateY(-${scrollPosition * 0.1}px)`;
});

    document.getElementById('mobile-menu').addEventListener('click', function () {
            const navLinks = document.getElementById('nav-links');
            const brand = document.querySelector('.navbar a[href="services.html"]');
            navLinks.classList.toggle('show');
            brand.classList.toggle('hidden');
        });