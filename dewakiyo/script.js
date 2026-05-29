// Initialize variables
const playlistWrapper = document.getElementById('playlistWrapper');
const playlistCards = document.querySelectorAll('.playlist-card');
const scrollIndicators = document.querySelectorAll('.indicator-dot');
const spotifyBtns = document.querySelectorAll('.spotify-btn');
const playBtns = document.querySelectorAll('.play-btn');

let touchStartX = 0;
let touchEndX = 0;
let currentScroll = 0;
let isScrolling = false;

// ==================== Playlist Scroll Functionality ====================

function updateScrollIndicators() {
    const scrollLeft = playlistWrapper.scrollLeft;
    const cardWidth = playlistCards[0].offsetWidth + 32; // card width + gap
    const activeIndex = Math.round(scrollLeft / cardWidth);

    scrollIndicators.forEach((dot, index) => {
        dot.classList.toggle('active', index === activeIndex);
    });
}

// Smooth scroll on indicator click
scrollIndicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        const cardWidth = playlistCards[0].offsetWidth + 32;
        const scrollPosition = cardWidth * index;
        
        playlistWrapper.scrollTo({
            left: scrollPosition,
            behavior: 'smooth'
        });
    });
});

// Update indicators on scroll
playlistWrapper.addEventListener('scroll', () => {
    updateScrollIndicators();
});

playlistWrapper.addEventListener('scrollend', () => {
    isScrolling = false;
});

// ==================== Touch/Swipe Functionality ====================

playlistWrapper.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
    isScrolling = true;
}, false);

playlistWrapper.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
}, false);

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > swipeThreshold) {
        const cardWidth = playlistCards[0].offsetWidth + 32;
        const scrollLeft = playlistWrapper.scrollLeft;
        const currentIndex = Math.round(scrollLeft / cardWidth);
        let nextIndex = currentIndex;

        if (diff > 0) {
            // Swiped left - move to next
            nextIndex = Math.min(currentIndex + 1, playlistCards.length - 1);
        } else {
            // Swiped right - move to previous
            nextIndex = Math.max(currentIndex - 1, 0);
        }

        const scrollPosition = cardWidth * nextIndex;
        playlistWrapper.scrollTo({
            left: scrollPosition,
            behavior: 'smooth'
        });
    }
}

// ==================== Mouse Wheel Scroll for Desktop ====================

playlistWrapper.addEventListener('wheel', (e) => {
    if (e.deltaX !== 0) {
        e.preventDefault();
        playlistWrapper.scrollLeft += e.deltaY || e.deltaX;
    }
}, { passive: false });

// ==================== Spotify Button Functionality ====================

spotifyBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const card = btn.closest('.playlist-card');
        const spotifyUrl = card.dataset.spotify;
        
        if (spotifyUrl) {
            window.open(spotifyUrl, '_blank', 'noopener,noreferrer');
            triggerButtonFeedback(btn);
        }
    });
});

playBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const card = btn.closest('.playlist-card');
        const spotifyUrl = card.dataset.spotify;
        
        if (spotifyUrl) {
            window.open(spotifyUrl, '_blank', 'noopener,noreferrer');
            triggerPlayButtonAnimation(btn);
        }
    });
});

// ==================== Button Feedback Animation ====================

function triggerButtonFeedback(btn) {
    btn.style.transform = 'scale(0.95)';
    setTimeout(() => {
        btn.style.transform = '';
    }, 100);
}

function triggerPlayButtonAnimation(btn) {
    btn.style.animation = 'none';
    setTimeout(() => {
        btn.style.animation = '';
    }, 10);
}

// ==================== Card Click Handler ====================

playlistCards.forEach((card) => {
    card.addEventListener('click', () => {
        const spotifyUrl = card.dataset.spotify;
        if (spotifyUrl) {
            // Optional: Add visual feedback
            card.style.transform = 'scale(0.98)';
            setTimeout(() => {
                card.style.transform = '';
            }, 200);
        }
    });
});

// ==================== Keyboard Navigation ====================

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        const cardWidth = playlistCards[0].offsetWidth + 32;
        const scrollLeft = playlistWrapper.scrollLeft;
        const currentIndex = Math.round(scrollLeft / cardWidth);
        const nextIndex = Math.max(currentIndex - 1, 0);
        const scrollPosition = cardWidth * nextIndex;
        
        playlistWrapper.scrollTo({
            left: scrollPosition,
            behavior: 'smooth'
        });
    } else if (e.key === 'ArrowRight') {
        const cardWidth = playlistCards[0].offsetWidth + 32;
        const scrollLeft = playlistWrapper.scrollLeft;
        const currentIndex = Math.round(scrollLeft / cardWidth);
        const nextIndex = Math.min(currentIndex + 1, playlistCards.length - 1);
        const scrollPosition = cardWidth * nextIndex;
        
        playlistWrapper.scrollTo({
            left: scrollPosition,
            behavior: 'smooth'
        });
    }
});

// ==================== Navigation Scroll Behavior ====================

const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ==================== Page Load Animation ====================

window.addEventListener('load', () => {
    // Add fade-in animation to body
    document.body.style.animation = 'fadeIn 0.5s ease-out';
    
    // Initialize indicators
    updateScrollIndicators();
});

// ==================== Intersection Observer for Animations ====================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards
playlistCards.forEach((card) => {
    observer.observe(card);
});

// ==================== Smooth Scroll Behavior Polyfill ====================

if (!('scrollBehavior' in document.documentElement.style)) {
    console.log('Smooth scroll not supported, using polyfill');
}

// ==================== Mobile Menu Toggle (if needed) ====================

const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        const navLinks = document.querySelector('.nav-links');
        navLinks.classList.toggle('active');
    });
}

// ==================== Error Handling ====================

window.addEventListener('error', (e) => {
    console.error('Error:', e.error);
});

// ==================== Performance Optimization ====================

// Debounce resize events
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        updateScrollIndicators();
    }, 250);
});

// ==================== Console Info ====================

console.log('%c🎵 Dewakiyo Spotify Playlist Player', 'color: #FF69B4; font-size: 20px; font-weight: bold;');
console.log('%cSadewa & Kiyo Romantic Collection', 'color: #FFB6C1; font-size: 14px;');
console.log('%cEnjoy the music! 🎧✨', 'color: #1DB954; font-size: 12px;');