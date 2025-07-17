/**
 * Antonella Attorre Portfolio - JavaScript Functionality
 */

document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const sideNavClose = document.getElementById('side-nav-close');
    const appRow = document.getElementById('appRow');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const stickyColumnWrap = document.getElementById('stickyColumnWrap');
    const mainContent = document.getElementById('mainContent');

    // Sidebar Toggle Functionality
    function toggleSidebar() {
        if (window.innerWidth > 1024) {
            document.body.classList.toggle('nav-closed');
        } else {
            // Mobile close
            stickyColumnWrap.classList.remove('open');
        }
    }

    // Mobile Menu Toggle
    function openMobileMenu() {
        stickyColumnWrap.classList.add('open');
    }

    // Smooth Scrolling for Navigation Links
    function initSmoothScrolling() {
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', function(e) {
                if (this.getAttribute('href').startsWith('#')) {
                    e.preventDefault();
                    const target = document.querySelector(this.getAttribute('href'));
                    if (target) {
                        target.scrollIntoView({ behavior: 'smooth' });
                    }
                    // Close mobile menu if open
                    if (window.innerWidth <= 1024) {
                        stickyColumnWrap.classList.remove('open');
                    }
                }
            });
        });
    }

    // Parallax Effect for Main Content
    let ticking = false;
    
    function updateParallax() {
        const scrolled = window.pageYOffset;
        if (mainContent && window.innerWidth > 1024) {
            mainContent.style.transform = `translateY(${scrolled * 0.1}px)`;
        }
        ticking = false;
    }

    function requestTick() {
        if (!ticking) {
            window.requestAnimationFrame(updateParallax);
            ticking = true;
        }
    }

    // Event Listeners
    if (sideNavClose) {
        sideNavClose.addEventListener('click', toggleSidebar);
    }

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', openMobileMenu);
    }

    // Initialize smooth scrolling
    initSmoothScrolling();

    // Add parallax scroll listener
    window.addEventListener('scroll', requestTick);

    // Handle window resize
    window.addEventListener('resize', function() {
        // Reset mobile menu on desktop resize
        if (window.innerWidth > 1024) {
            stickyColumnWrap.classList.remove('open');
        }
    });
});