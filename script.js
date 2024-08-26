var typed = new Typed(".highlight", {
    strings: ["Software developer", "Backend Developer", "Full-stack developers"],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 1000,
    loop: true,
    smartBackspace: false,
    startDelay: 500,
    fadeOut: true,
    fadeOutClass: 'typed-fade-out',
    fadeOutDelay: 500
});


// scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    let scrollY = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(scrollY >= offset && scrollY < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']')?.classList.add('active');
            });
        }
    });

    // sticky header
    let header = document.querySelector('header');

    header?.classList.toggle('sticky', scrollY > 100);
}

// Smooth scrolling for navigation links
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        let targetId = this.getAttribute('href').substring(1);
        let targetSection = document.getElementById(targetId);
        
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 100,
                behavior: 'smooth'
            });
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navbar = document.querySelector('.navbar');

    menuToggle.addEventListener('click', function() {
        navbar.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });

    document.querySelectorAll('.navbar a').forEach(link => {
        link.addEventListener('click', () => {
            navbar.classList.remove('active');
            menuToggle.classList.remove('active');
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const carousels = document.querySelectorAll('.carousel-container');

    carousels.forEach(carouselContainer => {
        const carousel = carouselContainer.querySelector('.carousel');
        const items = carousel.querySelectorAll('.carousel-item');
        const prevButton = carouselContainer.querySelector('.carousel-button.prev');
        const nextButton = carouselContainer.querySelector('.carousel-button.next');
        let currentIndex = 0;

        function showItem(index) {
            carousel.style.transform = `translateX(-${index * 100}%)`;
            updateCaption(index);
        }

        function showNext() {
            currentIndex = (currentIndex + 1) % items.length;
            showItem(currentIndex);
        }

        function showPrev() {
            currentIndex = (currentIndex - 1 + items.length) % items.length;
            showItem(currentIndex);
        }

        function updateCaption(index) {
            const caption = items[index].querySelector('figcaption').textContent;
            let captionDisplay = carouselContainer.querySelector('.caption-display');
            if (!captionDisplay) {
                captionDisplay = document.createElement('div');
                captionDisplay.className = 'caption-display';
                carouselContainer.appendChild(captionDisplay);
            }
            captionDisplay.textContent = caption;
        }

        nextButton.addEventListener('click', showNext);
        prevButton.addEventListener('click', showPrev);

        updateCaption(0);
    });
});


// document.addEventListener('DOMContentLoaded', function() {
//     const contractLink = document.getElementById('contractLink');
    
//     contractLink.addEventListener('click', function(e) {
//         e.preventDefault();
        
//         Swal.fire({
//             title: 'Sorry!',
//             text: 'The content is not available yet. Please check back later for updates.',
//             icon: 'info',
//             confirmButtonText: 'OK',
//             confirmButtonColor: '#00abf0'
//         });
//     });
// });
