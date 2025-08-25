// Dynamic Gallery Grid
document.addEventListener('DOMContentLoaded', function() {
    const galleryContainer = document.getElementById('gallery-grid');
    
    if (!galleryContainer) return;
    
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
    
    // Use only guitar images for the gallery
    const allImages = imageFiles;
    
    // Create gallery items for each image
    allImages.forEach((filename, index) => {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        item.setAttribute('data-index', index);
        
        const img = document.createElement('img');
        img.src = `images/guitars/optimized/${filename}`;
        img.alt = `Guitar ${index + 1}`;
        img.loading = 'lazy';
        
        // Add watermark overlay
        const watermark = document.createElement('div');
        watermark.className = 'gallery-watermark';
        watermark.innerHTML = '<img src="images/micks-guitars-headstock-logo-png.png" alt="Mick\'s Guitars">';
        
        item.appendChild(img);
        item.appendChild(watermark);
        
        // Add loading animation
        img.onload = function() {
            img.classList.add('loaded');
        };
        
        // Add error handling for missing images
        img.onerror = function() {
            console.log(`Image not found: ${filename}`);
            item.style.display = 'none';
        };
        
        galleryContainer.appendChild(item);
    });
    
    // Add click functionality for gallery images
    addImageClickHandlers();
});

// Global variables for navigation
let allImages = [];
let currentImageIndex = 0;

// Function to add click handlers to all gallery and workshop images
function addImageClickHandlers() {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const modalClose = document.getElementById('modalClose');
    
    // Collect all clickable images (excluding watermarks)
    const galleryImages = document.querySelectorAll('.gallery-item img');
    const workshopImages = document.querySelectorAll('.workshop-item img');
    
    // Filter out watermark images (they have 'micks-guitars-headstock-logo-png.png' in their src)
    allImages = [...galleryImages, ...workshopImages].filter(img => 
        !img.src.includes('micks-guitars-headstock-logo-png.png')
    );
    
    // Add click handlers to gallery items
    galleryImages.forEach((img, index) => {
        img.addEventListener('click', function(e) {
            e.stopPropagation();
            currentImageIndex = allImages.indexOf(img);
            openModal(this.src);
        });
    });
    
    // Add click handlers to workshop items
    workshopImages.forEach((img, index) => {
        img.addEventListener('click', function(e) {
            e.stopPropagation();
            currentImageIndex = allImages.indexOf(img);
            openModal(this.src);
        });
    });
    
    // Prevent watermark clicks from opening modal
    document.querySelectorAll('.gallery-watermark, .workshop-watermark').forEach(watermark => {
        watermark.addEventListener('click', function(e) {
            e.stopPropagation();
            e.preventDefault();
        });
    });
    
    // Close modal when clicking close button
    modalClose.addEventListener('click', closeModal);
    
    // Close modal when clicking overlay
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Keyboard navigation and back button
    document.addEventListener('keydown', function(e) {
        if (!modal.classList.contains('active')) return;
        
        switch(e.key) {
            case 'Escape':
                closeModal();
                break;
            case 'ArrowLeft':
                navigateImage(-1);
                break;
            case 'ArrowRight':
                navigateImage(1);
                break;
        }
    });
    
    // Handle browser back button
    window.addEventListener('popstate', function(e) {
        if (modal.classList.contains('active')) {
            closeModal();
        }
    });
}

// Function to navigate between images
function navigateImage(direction) {
    const newIndex = currentImageIndex + direction;
    
    // Handle wrapping around
    if (newIndex < 0) {
        currentImageIndex = allImages.length - 1;
    } else if (newIndex >= allImages.length) {
        currentImageIndex = 0;
    } else {
        currentImageIndex = newIndex;
    }
    
    // Update modal image
    const modalImage = document.getElementById('modalImage');
    modalImage.src = allImages[currentImageIndex].src;
}

// Function to open modal
function openModal(imageSrc) {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    
    modalImage.src = imageSrc;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent scrolling
    
    // Add to browser history
    history.pushState({ modal: true }, '', '#image');
}

// Function to close modal
function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.classList.remove('active');
    document.body.style.overflow = ''; // Restore scrolling
    
    // Remove from browser history if we added it
    if (history.state && history.state.modal) {
        history.back();
    }
}

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
