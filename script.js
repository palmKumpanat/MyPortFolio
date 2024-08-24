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

document.addEventListener('DOMContentLoaded', function() {
    const aboutLink = document.getElementById('aboutLink');
    
    aboutLink.addEventListener('click', function(e) {
        e.preventDefault();
        
        Swal.fire({
            title: 'Sorry!',
            text: 'The content is not available yet. Please check back later for updates.',
            icon: 'info',
            confirmButtonText: 'OK',
            confirmButtonColor: '#00abf0'
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const projectLink = document.getElementById('projectLink');
    
    projectLink.addEventListener('click', function(e) {
        e.preventDefault();
        
        Swal.fire({
            title: 'Sorry!',
            text: 'The content is not available yet. Please check back later for updates.',
            icon: 'info',
            confirmButtonText: 'OK',
            confirmButtonColor: '#00abf0'
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const skillLink = document.getElementById('skillLink');
    
    skillLink.addEventListener('click', function(e) {
        e.preventDefault();
        
        Swal.fire({
            title: 'Sorry!',
            text: 'The content is not available yet. Please check back later for updates.',
            icon: 'info',
            confirmButtonText: 'OK',
            confirmButtonColor: '#00abf0'
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const contractLink = document.getElementById('contractLink');
    
    contractLink.addEventListener('click', function(e) {
        e.preventDefault();
        
        Swal.fire({
            title: 'Sorry!',
            text: 'The content is not available yet. Please check back later for updates.',
            icon: 'info',
            confirmButtonText: 'OK',
            confirmButtonColor: '#00abf0'
        });
    });
});