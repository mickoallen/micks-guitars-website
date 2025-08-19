// Shop Page JavaScript

// Product data for detailed views
const productData = {
    dreadnought: {
        name: "Classic Dreadnought Acoustic",
        price: "$3,500",
        description: "Traditional dreadnought with rich, warm tones. Perfect for folk, country, and bluegrass.",
        specs: [
            "Solid Spruce Top",
            "Mahogany Back & Sides", 
            "Rosewood Fingerboard",
            "Bone Nut & Saddle",
            "Tuners: Grover Rotomatics",
            "Finish: Nitrocellulose Lacquer"
        ],
        details: "This classic dreadnought features a solid spruce top that provides excellent projection and clarity. The mahogany back and sides deliver warm, rich tones with great bass response. Perfect for strumming and flatpicking styles."
    },
    electric: {
        name: "Custom Electric Guitar",
        price: "$4,200",
        description: "Modern electric with versatile pickups and sleek design. Ideal for rock, blues, and jazz.",
        specs: [
            "Mahogany Body",
            "Maple Neck",
            "Rosewood Fingerboard",
            "Humbucker Pickups",
            "Tuners: Grover Rotomatics",
            "Finish: Nitrocellulose Lacquer"
        ],
        details: "This custom electric features a mahogany body for warm, resonant tones and a maple neck for stability and brightness. The humbucker pickups provide versatile sound options from clean jazz to overdriven rock."
    },
    parlor: {
        name: "Parlor Acoustic",
        price: "$2,800",
        description: "Compact parlor guitar with sweet, intimate tones. Perfect for fingerpicking and small venues.",
        specs: [
            "Cedar Top",
            "Walnut Back & Sides",
            "Mahogany Neck",
            "Bone Nut & Saddle",
            "Tuners: Open Gear",
            "Finish: Oil Finish"
        ],
        details: "This intimate parlor guitar features a cedar top for warm, responsive tones and walnut back and sides for rich harmonics. Perfect for fingerpicking and smaller venues where you want a more personal sound."
    },
    archtop: {
        name: "Jazz Archtop",
        price: "$3,800",
        description: "Sophisticated archtop with warm, mellow tones. Designed for jazz and blues players.",
        specs: [
            "Arched Spruce Top",
            "Maple Back & Sides",
            "Floating Pickup",
            "Mahogany Neck",
            "Tuners: Grover Rotomatics",
            "Finish: Nitrocellulose Lacquer"
        ],
        details: "This sophisticated archtop features an arched spruce top for enhanced projection and a floating pickup for authentic jazz tones. The maple back and sides provide excellent resonance and sustain."
    },
    bass: {
        name: "Custom Bass Guitar",
        price: "$3,200",
        description: "Versatile bass with deep, punchy tones. Great for studio work and live performance.",
        specs: [
            "Alder Body",
            "Maple Neck",
            "Rosewood Fingerboard",
            "Active Electronics",
            "Tuners: Hipshot Ultralites",
            "Finish: Polyurethane"
        ],
        details: "This custom bass features an alder body for punchy, well-defined tones and active electronics for versatile sound shaping. Perfect for studio work and live performance across multiple genres."
    },
    "12string": {
        name: "12-String Acoustic",
        price: "$4,500",
        description: "Rich, full-bodied 12-string with shimmering harmonics. Perfect for folk and rock.",
        specs: [
            "Sitka Spruce Top",
            "Rosewood Back & Sides",
            "12-String Bridge",
            "Mahogany Neck",
            "Tuners: 12-String Set",
            "Finish: Nitrocellulose Lacquer"
        ],
        details: "This stunning 12-string features a Sitka spruce top for excellent projection and rosewood back and sides for rich, complex harmonics. The 12-string bridge is carefully crafted for optimal string spacing and intonation."
    }
};

// Filter and sort functionality
document.addEventListener('DOMContentLoaded', function() {
    const categoryFilter = document.getElementById('category-filter');
    const priceFilter = document.getElementById('price-filter');
    const sortFilter = document.getElementById('sort-filter');
    const productsGrid = document.getElementById('products-grid');

    // Add event listeners for filters
    categoryFilter.addEventListener('change', filterProducts);
    priceFilter.addEventListener('change', filterProducts);
    sortFilter.addEventListener('change', filterProducts);

    function filterProducts() {
        const category = categoryFilter.value;
        const priceRange = priceFilter.value;
        const sortBy = sortFilter.value;
        
        const products = Array.from(productsGrid.children);
        
        // Filter products
        products.forEach(product => {
            const productCategory = product.dataset.category;
            const productPrice = parseInt(product.dataset.price);
            
            let showProduct = true;
            
            // Category filter
            if (category !== 'all' && productCategory !== category) {
                showProduct = false;
            }
            
            // Price filter
            if (priceRange !== 'all') {
                switch(priceRange) {
                    case 'under-2000':
                        if (productPrice >= 2000) showProduct = false;
                        break;
                    case '2000-4000':
                        if (productPrice < 2000 || productPrice > 4000) showProduct = false;
                        break;
                    case 'over-4000':
                        if (productPrice <= 4000) showProduct = false;
                        break;
                }
            }
            
            // Show/hide product
            product.style.display = showProduct ? 'block' : 'none';
        });
        
        // Sort products
        const visibleProducts = products.filter(product => product.style.display !== 'none');
        const sortedProducts = visibleProducts.sort((a, b) => {
            const aPrice = parseInt(a.dataset.price);
            const bPrice = parseInt(b.dataset.price);
            const aName = a.querySelector('h3').textContent;
            const bName = b.querySelector('h3').textContent;
            
            switch(sortBy) {
                case 'price-low':
                    return aPrice - bPrice;
                case 'price-high':
                    return bPrice - aPrice;
                case 'name':
                    return aName.localeCompare(bName);
                default:
                    return 0; // Keep original order for 'newest'
            }
        });
        
        // Reorder products in DOM
        sortedProducts.forEach(product => {
            productsGrid.appendChild(product);
        });
    }
});

// Modal functionality
const productModal = document.getElementById('product-modal');
const inquiryModal = document.getElementById('inquiry-modal');
const modalContent = document.getElementById('modal-content');

// Close modals when clicking X
document.querySelectorAll('.close').forEach(closeBtn => {
    closeBtn.addEventListener('click', () => {
        productModal.style.display = 'none';
        inquiryModal.style.display = 'none';
    });
});

// Close modals when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === productModal) {
        productModal.style.display = 'none';
    }
    if (e.target === inquiryModal) {
        inquiryModal.style.display = 'none';
    }
});

// View product details
function viewProduct(productId) {
    const product = productData[productId];
    if (!product) return;
    
    modalContent.innerHTML = `
        <div class="product-detail">
            <h2>${product.name}</h2>
            <div class="product-detail-price">${product.price}</div>
            <p class="product-detail-description">${product.description}</p>
            <div class="product-detail-full">
                <h3>Full Description</h3>
                <p>${product.details}</p>
            </div>
            <div class="product-detail-specs">
                <h3>Specifications</h3>
                <ul>
                    ${product.specs.map(spec => `<li>${spec}</li>`).join('')}
                </ul>
            </div>
            <div class="product-detail-actions">
                <button class="btn btn-primary" onclick="inquireProduct('${productId}')">Inquire About This Guitar</button>
            </div>
        </div>
    `;
    
    productModal.style.display = 'block';
}

// Inquire about product
function inquireProduct(productId) {
    const product = productData[productId];
    if (!product) return;
    
    // Close product modal if open
    productModal.style.display = 'none';
    
    // Set guitar name in inquiry form
    document.getElementById('inquiry-guitar').value = product.name;
    
    // Show inquiry modal
    inquiryModal.style.display = 'block';
}

// Handle inquiry form submission
document.getElementById('inquiryForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    const data = Object.fromEntries(formData);
    
    // Basic validation
    if (!data.name || !data.email || !data.message) {
        showNotification('Please fill in all required fields.', 'error');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        showNotification('Please enter a valid email address.', 'error');
        return;
    }
    
    // Show success message
    showNotification(`Thank you for your inquiry about the ${data.guitar}! We'll get back to you soon.`, 'success');
    
    // Reset form and close modal
    this.reset();
    inquiryModal.style.display = 'none';
    
    // Log the inquiry (in real app, this would go to your server)
    console.log('Inquiry submitted:', data);
});

// Notification system (reused from main script)
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#4CAF50' : type === 'error' ? '#f44336' : '#2196F3'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
        z-index: 10000;
        transform: translateX(400px);
        transition: transform 0.3s ease;
        max-width: 400px;
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => notification.remove(), 300);
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.transform = 'translateX(400px)';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// Product card animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe product cards for animation
document.addEventListener('DOMContentLoaded', () => {
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});

// Keyboard navigation for modals
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        productModal.style.display = 'none';
        inquiryModal.style.display = 'none';
    }
}); 