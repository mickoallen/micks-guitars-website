// Dynamic Gallery Carousel
document.addEventListener('DOMContentLoaded', function() {
    const galleryContainer = document.getElementById('dynamic-gallery');
    const slidesContainer = document.getElementById('gallery-slides');
    const prevButton = document.getElementById('gallery-prev');
    const nextButton = document.getElementById('gallery-next');
    const counter = document.getElementById('gallery-counter');
    const dotsContainer = document.getElementById('gallery-dots');
    
    if (!galleryContainer) return;
    
    let currentSlide = 0;
    let totalSlides = 0;
    
    // EASY TO UPDATE: Just add new image filenames to this array
    // The gallery will automatically load all images listed here
    const imageFiles = [
        // 2025 Images
        'PXL_20250118_193838287~2.jpg',
        'PXL_20250118_193857351~2.jpg',
        'PXL_20250118_194039272~2.jpg',
        'PXL_20250118_194107827~2.jpg',
        'PXL_20250118_194127949~2.jpg',
        'PXL_20250118_194300306.MP~2.jpg',
        
        // 2024 Images
        'PXL_20240730_131816207.jpg',
        'PXL_20240730_131951472.jpg',
        'PXL_20240730_132321142.jpg',
        'PXL_20240428_010533231-EDIT.jpg',
        'PXL_20240428_010547817.jpg',
        'PXL_20240428_010726521.jpg',
        'PXL_20230309_201405086.jpg',
        'PXL_20230309_201500558.jpg',
        
        // 2022 Images
        '20220913_085440.jpg',
        '20220913_085600.jpg',
        '20220913_085606.jpg',
        '20220913_085656.jpg',
        '20220913_085951.jpg',
        '20220405_122536.jpg',
        '20220405_123627.jpg',
        '20220405_124214.jpg'
    ];
    
    // Create gallery slides for each image
    imageFiles.forEach((filename, index) => {
        const slide = document.createElement('div');
        slide.className = 'gallery-slide';
        slide.setAttribute('data-index', index);
        
        const img = document.createElement('img');
        img.src = `images/guitars/optimized/${filename}`;
        img.alt = `Guitar ${index + 1}`;
        img.loading = 'lazy';
        
        // Add watermark overlay
        const watermark = document.createElement('div');
        watermark.className = 'gallery-watermark';
        watermark.innerHTML = '<img src="images/micks-guitars-headstock-logo-png.png" alt="Mick\'s Guitars">';
        
        slide.appendChild(img);
        slide.appendChild(watermark);
        
        // Add loading animation
        img.onload = function() {
            img.classList.add('loaded');
        };
        
        // Add error handling for missing images
        img.onerror = function() {
            console.log(`Image not found: ${filename}`);
            slide.style.display = 'none';
        };
        
        slide.appendChild(img);
        slidesContainer.appendChild(slide);
    });
    
    totalSlides = imageFiles.length;
    
    // Create navigation dots
    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('button');
        dot.className = 'gallery-dot';
        dot.setAttribute('data-index', i);
        dot.addEventListener('click', () => goToSlide(i));
        dotsContainer.appendChild(dot);
    }
    
    // Navigation functions
    function goToSlide(index) {
        if (index < 0) index = totalSlides - 1;
        if (index >= totalSlides) index = 0;
        
        currentSlide = index;
        updateCarousel();
    }
    
    function nextSlide() {
        goToSlide(currentSlide + 1);
    }
    
    function prevSlide() {
        goToSlide(currentSlide - 1);
    }
    
    function updateCarousel() {
        // Add fade effect during transition
        slidesContainer.style.opacity = '0.7';
        
        // Update slide position with smooth transition
        slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
        
        // Update counter
        counter.textContent = `${currentSlide + 1} / ${totalSlides}`;
        
        // Update dots with animation
        const dots = dotsContainer.querySelectorAll('.gallery-dot');
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
        
        // Update slide active states
        const slides = slidesContainer.querySelectorAll('.gallery-slide');
        slides.forEach((slide, index) => {
            slide.classList.toggle('active', index === currentSlide);
        });
        

        
        // Fade back in after transition
        setTimeout(() => {
            slidesContainer.style.opacity = '1';
        }, 300);
    }
    
    // Event listeners
    prevButton.addEventListener('click', prevSlide);
    nextButton.addEventListener('click', nextSlide);
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft') {
            prevSlide();
        } else if (e.key === 'ArrowRight') {
            nextSlide();
        }
    });
    
    // Touch/swipe support for mobile
    let startX = 0;
    let endX = 0;
    
    slidesContainer.addEventListener('touchstart', function(e) {
        startX = e.touches[0].clientX;
    });
    
    slidesContainer.addEventListener('touchend', function(e) {
        endX = e.changedTouches[0].clientX;
        handleSwipe();
    });
    
    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = startX - endX;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                nextSlide(); // Swipe left
            } else {
                prevSlide(); // Swipe right
            }
        }
    }
    
    // Initialize carousel
    updateCarousel();
    
    // Set initial active state
    const firstSlide = slidesContainer.querySelector('.gallery-slide');
    if (firstSlide) {
        firstSlide.classList.add('active');
    }
    
    // Auto-advance slides (optional - can be disabled)
    // setInterval(nextSlide, 5000);
});

// Function to refresh gallery (can be called when new images are added)
function refreshGallery() {
    const galleryContainer = document.getElementById('dynamic-gallery');
    if (galleryContainer) {
        galleryContainer.innerHTML = '';
        // Re-run the gallery loader
        location.reload();
    }
}

// INSTRUCTIONS FOR UPDATING GALLERY:
// 1. Add new images to the 'images/guitars/' folder
// 2. Add the filename to the 'imageFiles' array above
// 3. Refresh the page to see new images
// 
// Example: If you add 'new-guitar.jpg' to the folder:
// Add 'new-guitar.jpg' to the imageFiles array 
