// ============================================
// NABAVI HOLDING - Main JavaScript
// ============================================

// Preloader
window.addEventListener('load', function() {
    const preloader = document.getElementById('preloader');
    
    setTimeout(() => {
        preloader.classList.add('hidden');
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    }, 2500);
});

// AOS Animation Initialize
AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: true,
    mirror: false
});

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Parallax Effect for Hero
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.hero-bg');
    if (parallax) {
        parallax.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Sector Items Hover Effect with Sound (Optional)
document.querySelectorAll('.sector-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.05)';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Language Button Hover Animation
document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('mouseenter', function() {
        const arrow = this.querySelector('.btn-arrow i');
        if (arrow) {
            arrow.style.transform = 'translateX(10px)';
        }
    });
    
    btn.addEventListener('mouseleave', function() {
        const arrow = this.querySelector('.btn-arrow i');
        if (arrow) {
            arrow.style.transform = 'translateX(0)';
        }
    });
});

// Cursor Effect (Optional - Luxury Touch)
const cursor = document.createElement('div');
cursor.classList.add('custom-cursor');
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// Add to CSS for Custom Cursor:
const style = document.createElement('style');
style.innerHTML = `
    .custom-cursor {
        width: 20px;
        height: 20px;
        border: 2px solid #D4AF37;
        border-radius: 50%;
        position: fixed;
        pointer-events: none;
        z-index: 9999;
        transition: all 0.1s ease;
        transform: translate(-50%, -50%);
        mix-blend-mode: difference;
    }
    
    body {
        cursor: none;
    }
`;
document.head.appendChild(style);

// Console Welcome Message
console.log('%c🦅 NABAVI HOLDING 🦅', 'color: #D4AF37; font-size: 24px; font-weight: bold;');
console.log('%cA Diversified Global Investment Leader', 'color: #FFFFFF; font-size: 14px;');
console.log('%c© 2015-2026 Nabavi Holding Business Group', 'color: #CCCCCC; font-size: 12px;');
