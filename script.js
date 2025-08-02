// Sample product data
const products = [
    // Men's Products
    {
        id: 1,
        name: "Classic White Shirt",
        category: "men",
        subcategory: "shirts",
        price: 49.99,
        originalPrice: 69.99,
        image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        badge: "sale",
        description: "Premium cotton dress shirt perfect for any occasion"
    },
    {
        id: 2,
        name: "Slim Fit Jeans",
        category: "men",
        subcategory: "pants",
        price: 79.99,
        image: "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        badge: "new",
        description: "Modern slim-fit jeans with stretch comfort"
    },
    {
        id: 3,
        name: "Leather Jacket",
        category: "men",
        subcategory: "jackets",
        price: 199.99,
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        description: "Genuine leather jacket with timeless style"
    },
    {
        id: 4,
        name: "Casual Sneakers",
        category: "men",
        subcategory: "accessories",
        price: 89.99,
        originalPrice: 119.99,
        image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        badge: "sale",
        description: "Comfortable everyday sneakers"
    },
    {
        id: 5,
        name: "Polo Shirt",
        category: "men",
        subcategory: "shirts",
        price: 39.99,
        image: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        description: "Classic polo shirt in premium cotton"
    },
    {
        id: 6,
        name: "Chino Pants",
        category: "men",
        subcategory: "pants",
        price: 59.99,
        image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        badge: "new",
        description: "Versatile chino pants for casual wear"
    },

    // Women's Products
    {
        id: 7,
        name: "Floral Summer Dress",
        category: "women",
        subcategory: "dresses",
        price: 89.99,
        originalPrice: 129.99,
        image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        badge: "sale",
        description: "Beautiful floral dress perfect for summer"
    },
    {
        id: 8,
        name: "Silk Blouse",
        category: "women",
        subcategory: "tops",
        price: 79.99,
        image: "https://images.unsplash.com/photo-1564257577-48df05d95ba5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        badge: "new",
        description: "Elegant silk blouse for professional wear"
    },
    {
        id: 9,
        name: "High-Waist Jeans",
        category: "women",
        subcategory: "bottoms",
        price: 69.99,
        image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        description: "Flattering high-waist denim jeans"
    },
    {
        id: 10,
        name: "Designer Handbag",
        category: "women",
        subcategory: "accessories",
        price: 149.99,
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        description: "Stylish leather handbag for everyday use"
    },
    {
        id: 11,
        name: "Knit Sweater",
        category: "women",
        subcategory: "tops",
        price: 59.99,
        originalPrice: 89.99,
        image: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        badge: "sale",
        description: "Cozy knit sweater for cooler days"
    },
    {
        id: 12,
        name: "Maxi Dress",
        category: "women",
        subcategory: "dresses",
        price: 99.99,
        image: "https://images.unsplash.com/photo-1566479179817-c0ba9c0e3b37?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        badge: "new",
        description: "Elegant maxi dress for special occasions"
    }
];

// Shopping cart
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// DOM elements
const productsGrid = document.getElementById('products-grid');
const cartIcon = document.getElementById('cart-icon');
const cartSidebar = document.getElementById('cart-sidebar');
const cartOverlay = document.getElementById('cart-overlay');
const closeCart = document.getElementById('close-cart');
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const cartCount = document.querySelector('.cart-count');
const searchInput = document.getElementById('search-input');
const filterBtns = document.querySelectorAll('.filter-btn');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    renderProducts(products);
    updateCartUI();
    setupEventListeners();
});

// Setup event listeners
function setupEventListeners() {
    // Mobile menu toggle
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Cart functionality
    cartIcon.addEventListener('click', (e) => {
        e.preventDefault();
        openCart();
    });

    closeCart.addEventListener('click', closeCartSidebar);
    cartOverlay.addEventListener('click', closeCartSidebar);

    // Search functionality
    searchInput.addEventListener('input', handleSearch);

    // Filter buttons
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            filterProducts(btn.dataset.filter);
        });
    });

    // Newsletter form
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', handleNewsletterSubmit);
    }

    // Smooth scrolling for navigation links
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

    // Header scroll effect
    window.addEventListener('scroll', handleScroll);
}

// Render products
function renderProducts(productsToRender) {
    if (!productsGrid) return;

    productsGrid.innerHTML = '';
    
    if (productsToRender.length === 0) {
        productsGrid.innerHTML = '<p class="text-center">No products found matching your criteria.</p>';
        return;
    }

    productsToRender.forEach(product => {
        const productCard = createProductCard(product);
        productsGrid.appendChild(productCard);
    });
}

// Create product card
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.setAttribute('data-category', product.category);
    
    const badgeHTML = product.badge ? `<span class="product-badge ${product.badge}">${product.badge.toUpperCase()}</span>` : '';
    const originalPriceHTML = product.originalPrice ? `<span class="original-price">$${product.originalPrice}</span>` : '';

    card.innerHTML = `
        <div class="product-image">
            <img src="${product.image}" alt="${product.name}" loading="lazy">
            ${badgeHTML}
        </div>
        <div class="product-info">
            <h3 class="product-title">${product.name}</h3>
            <p class="product-category">${product.category}'s ${product.subcategory || 'clothing'}</p>
            <div class="product-price">
                <span class="current-price">$${product.price}</span>
                ${originalPriceHTML}
            </div>
            <button class="add-to-cart" onclick="addToCart(${product.id})">
                Add to Cart
            </button>
        </div>
    `;

    return card;
}

// Add to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }

    updateCartUI();
    saveCart();
    showAddToCartAnimation();
}

// Remove from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartUI();
    saveCart();
}

// Update quantity
function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (!item) return;

    item.quantity += change;
    
    if (item.quantity <= 0) {
        removeFromCart(productId);
    } else {
        updateCartUI();
        saveCart();
    }
}

// Update cart UI
function updateCartUI() {
    updateCartCount();
    updateCartTotal();
    renderCartItems();
}

// Update cart count
function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
}

// Update cart total
function updateCartTotal() {
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = total.toFixed(2);
}

// Render cart items
function renderCartItems() {
    if (!cartItems) return;

    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="text-center">Your cart is empty</p>';
        return;
    }

    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-info">
                <div class="cart-item-title">${item.name}</div>
                <div class="cart-item-price">$${item.price}</div>
                <div class="quantity-controls">
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                    <span>${item.quantity}</span>
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                    <button class="quantity-btn" onclick="removeFromCart(${item.id})" style="margin-left: 10px; color: #e74c3c;">×</button>
                </div>
            </div>
        </div>
    `).join('');
}

// Save cart to localStorage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Open cart
function openCart() {
    cartSidebar.classList.add('active');
    cartOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close cart
function closeCartSidebar() {
    cartSidebar.classList.remove('active');
    cartOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

// Search functionality
function handleSearch(e) {
    const query = e.target.value.toLowerCase();
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query) ||
        product.subcategory?.toLowerCase().includes(query)
    );
    renderProducts(filteredProducts);
}

// Filter products
function filterProducts(filter) {
    let filteredProducts;
    
    switch(filter) {
        case 'men':
            filteredProducts = products.filter(p => p.category === 'men');
            break;
        case 'women':
            filteredProducts = products.filter(p => p.category === 'women');
            break;
        case 'sale':
            filteredProducts = products.filter(p => p.badge === 'sale');
            break;
        default:
            filteredProducts = products;
    }
    
    renderProducts(filteredProducts);
}

// Newsletter form handling
function handleNewsletterSubmit(e) {
    e.preventDefault();
    const email = e.target.querySelector('input[type="email"]').value;
    
    // Simulate newsletter subscription
    alert(`Thank you for subscribing with ${email}! Check your email for a 20% discount code.`);
    e.target.reset();
}

// Add to cart animation
function showAddToCartAnimation() {
    // Create a simple notification
    const notification = document.createElement('div');
    notification.textContent = 'Added to cart!';
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: #27ae60;
        color: white;
        padding: 12px 20px;
        border-radius: 25px;
        z-index: 10000;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 2000);
}

// Header scroll effect
function handleScroll() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 2px 30px rgba(0, 0, 0, 0.15)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    }
}

// Lazy loading for images
function setupLazyLoading() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    }
}

// Initialize lazy loading
setupLazyLoading();

// Add some utility functions for enhanced UX
function showLoading() {
    const loading = document.createElement('div');
    loading.className = 'loading';
    loading.innerHTML = '<div class="spinner"></div>';
    productsGrid.appendChild(loading);
}

function hideLoading() {
    const loading = document.querySelector('.loading');
    if (loading) {
        loading.remove();
    }
}

// Simulate loading when filtering
const originalFilterProducts = filterProducts;
filterProducts = function(filter) {
    showLoading();
    setTimeout(() => {
        hideLoading();
        originalFilterProducts(filter);
    }, 300);
};

// Add CSS animation for notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);

// Checkout functionality (basic simulation)
function handleCheckout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    alert(`Order total: $${total.toFixed(2)}\n\nThank you for your purchase! This is a demo - no actual payment was processed.`);
    
    // Clear cart
    cart = [];
    updateCartUI();
    saveCart();
    closeCartSidebar();
}

// Add checkout event listener
document.addEventListener('DOMContentLoaded', function() {
    const checkoutBtn = document.querySelector('.checkout-btn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', handleCheckout);
    }
});

// Export functions for global access
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateQuantity = updateQuantity;