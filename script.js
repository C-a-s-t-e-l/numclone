document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuButton = document.getElementById('mobile-menu-toggle');
    const mobileNav = document.getElementById('mobile-nav');
    if (mobileMenuButton && mobileNav) {
        mobileMenuButton.addEventListener('click', () => {
            mobileNav.classList.toggle('active');
        });
    }
    const header = document.getElementById('main-header');
    if (header) {
        const scrollThreshold = 50;
        const handleScroll = () => {
            if (window.scrollY > scrollThreshold) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        };
        window.addEventListener('scroll', handleScroll);
        handleScroll();
    }
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId.length > 1) {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    const headerOffset = document.querySelector('.main-header').offsetHeight;
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth"
                    });
                    if (mobileNav && mobileNav.classList.contains('active')) {
                        mobileNav.classList.remove('active');
                    }
                }
            }
        });
    });
    console.log("All scripts, including smooth scroll, are loaded and active.");
});