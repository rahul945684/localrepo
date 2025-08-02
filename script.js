// Enhanced product data with Amazon-like features
const products = [
    // Men's Products
    {
        id: 1,
        name: "Classic White Cotton Dress Shirt - Wrinkle Free",
        category: "men",
        subcategory: "shirts",
        brand: "premium",
        price: 49.99,
        originalPrice: 69.99,
        image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        badge: "sale",
        rating: 4.5,
        reviews: 1247,
        prime: true,
        description: "Premium cotton dress shirt perfect for any occasion",
        discount: "28% off"
    },
    {
        id: 2,
        name: "Men's Slim Fit Stretch Jeans - Dark Wash",
        category: "men",
        subcategory: "pants",
        brand: "essential",
        price: 79.99,
        image: "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        badge: "new",
        rating: 4.3,
        reviews: 892,
        prime: true,
        description: "Modern slim-fit jeans with stretch comfort"
    },
    {
        id: 3,
        name: "Genuine Leather Bomber Jacket - Premium Quality",
        category: "men",
        subcategory: "jackets",
        brand: "designer",
        price: 199.99,
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        rating: 4.7,
        reviews: 456,
        prime: true,
        description: "Genuine leather jacket with timeless style"
    },
    {
        id: 4,
        name: "Men's Running Sneakers - Lightweight & Comfortable",
        category: "men",
        subcategory: "accessories",
        brand: "essential",
        price: 89.99,
        originalPrice: 119.99,
        image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        badge: "sale",
        rating: 4.4,
        reviews: 2134,
        prime: true,
        description: "Comfortable everyday sneakers",
        discount: "25% off"
    },
    {
        id: 5,
        name: "Cotton Polo Shirt - Classic Fit",
        category: "men",
        subcategory: "shirts",
        brand: "essential",
        price: 39.99,
        image: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        rating: 4.2,
        reviews: 678,
        prime: true,
        description: "Classic polo shirt in premium cotton"
    },
    {
        id: 6,
        name: "Men's Chino Pants - Flat Front",
        category: "men",
        subcategory: "pants",
        brand: "premium",
        price: 59.99,
        image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        badge: "new",
        rating: 4.1,
        reviews: 334,
        prime: true,
        description: "Versatile chino pants for casual wear"
    },

    // Women's Products
    {
        id: 7,
        name: "Women's Floral Summer Midi Dress",
        category: "women",
        subcategory: "dresses",
        brand: "designer",
        price: 89.99,
        originalPrice: 129.99,
        image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        badge: "sale",
        rating: 4.6,
        reviews: 1534,
        prime: true,
        description: "Beautiful floral dress perfect for summer",
        discount: "31% off"
    },
    {
        id: 8,
        name: "Women's Silk Blouse - Professional",
        category: "women",
        subcategory: "tops",
        brand: "premium",
        price: 79.99,
        image: "https://images.unsplash.com/photo-1564257577-48df05d95ba5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        badge: "new",
        rating: 4.5,
        reviews: 789,
        prime: true,
        description: "Elegant silk blouse for professional wear"
    },
    {
        id: 9,
        name: "Women's High-Waist Skinny Jeans",
        category: "women",
        subcategory: "bottoms",
        brand: "essential",
        price: 69.99,
        image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        rating: 4.3,
        reviews: 1256,
        prime: true,
        description: "Flattering high-waist denim jeans"
    },
    {
        id: 10,
        name: "Designer Leather Handbag - Premium Collection",
        category: "women",
        subcategory: "accessories",
        brand: "designer",
        price: 149.99,
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        rating: 4.8,
        reviews: 567,
        prime: true,
        description: "Stylish leather handbag for everyday use"
    },
    {
        id: 11,
        name: "Women's Cashmere Knit Sweater",
        category: "women",
        subcategory: "tops",
        brand: "premium",
        price: 59.99,
        originalPrice: 89.99,
        image: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        badge: "sale",
        rating: 4.4,
        reviews: 923,
        prime: true,
        description: "Cozy knit sweater for cooler days",
        discount: "33% off"
    },
    {
        id: 12,
        name: "Women's Evening Maxi Dress - Elegant",
        category: "women",
        subcategory: "dresses",
        brand: "designer",
        price: 99.99,
        image: "https://images.unsplash.com/photo-1566479179817-c0ba9c0e3b37?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        badge: "new",
        rating: 4.7,
        reviews: 445,
        prime: true,
        description: "Elegant maxi dress for special occasions"
    }
];

// Shopping cart and other variables
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let currentFilter = 'all';
let currentSort = 'featured';
let recentlyViewed = JSON.parse(localStorage.getItem('recentlyViewed')) || [];

// DOM elements
const productsGrid = document.getElementById('products-grid');
const cartIcon = document.getElementById('cart-icon');
const cartSidebar = document.getElementById('cart-sidebar');
const cartOverlay = document.getElementById('cart-overlay');
const closeCart = document.getElementById('close-cart');
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const cartCount = document.querySelector('.cart-count');
const cartItemCount = document.getElementById('cart-item-count');
const searchInput = document.getElementById('search-input');
const searchCategory = document.querySelector('.search-category');
const sortSelect = document.getElementById('sort-select');
const resultsCount = document.getElementById('results-count');
const breadcrumbCategory = document.getElementById('breadcrumb-category');
const hamburger = document.querySelector('.hamburger');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    renderProducts(products);
    updateCartUI();
    setupEventListeners();
    updateResultsCount(products.length);
    renderRecentlyViewed();
});

// Setup event listeners
function setupEventListeners() {
    // Mobile menu toggle
    if (hamburger) {
        hamburger.addEventListener('click', toggleMobileMenu);
    }

    // Cart functionality
    if (cartIcon) {
        cartIcon.addEventListener('click', (e) => {
            e.preventDefault();
            openCart();
        });
    }

    if (closeCart) {
        closeCart.addEventListener('click', closeCartSidebar);
    }

    if (cartOverlay) {
        cartOverlay.addEventListener('click', closeCartSidebar);
    }

    // Search functionality
    if (searchInput) {
        searchInput.addEventListener('input', handleSearch);
    }

    if (searchCategory) {
        searchCategory.addEventListener('change', handleSearch);
    }

    // Sort functionality
    if (sortSelect) {
        sortSelect.addEventListener('change', handleSort);
    }

    // Filter links
    const filterLinks = document.querySelectorAll('.filter-link');
    filterLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            filterLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            const filter = link.dataset.filter;
            currentFilter = filter;
            updateBreadcrumb(filter);
            applyFilters();
        });
    });

    // Sidebar filters
    const categoryFilters = document.querySelectorAll('.category-filter');
    const priceFilters = document.querySelectorAll('.price-filter');
    const ratingFilters = document.querySelectorAll('.rating-filter');
    const brandFilters = document.querySelectorAll('.brand-filter');

    [...categoryFilters, ...priceFilters, ...ratingFilters, ...brandFilters].forEach(filter => {
        filter.addEventListener('change', applyFilters);
    });

    // Banner shop now button
    const shopNowBtn = document.querySelector('.banner-content .btn');
    if (shopNowBtn) {
        shopNowBtn.addEventListener('click', () => {
            document.querySelector('.product-section').scrollIntoView({ behavior: 'smooth' });
        });
    }
}

// Toggle mobile menu
function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    if (navMenu) {
        navMenu.classList.toggle('active');
    }
}

// Render products
function renderProducts(productsToRender) {
    if (!productsGrid) return;

    productsGrid.innerHTML = '';
    
    if (productsToRender.length === 0) {
        productsGrid.innerHTML = '<div class="text-center" style="grid-column: 1 / -1; padding: 40px;"><p>No products found matching your criteria.</p></div>';
        return;
    }

    productsToRender.forEach(product => {
        const productCard = createProductCard(product);
        productsGrid.appendChild(productCard);
    });

    updateResultsCount(productsToRender.length);
}

// Create product card with Amazon-like design
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.setAttribute('data-category', product.category);
    card.setAttribute('data-brand', product.brand);
    card.setAttribute('data-price', product.price);
    card.setAttribute('data-rating', product.rating);
    
    const badgeHTML = product.badge ? `<span class="product-badge ${product.badge}">${product.badge.toUpperCase()}</span>` : '';
    const originalPriceHTML = product.originalPrice ? `<span class="original-price">$${product.originalPrice}</span>` : '';
    const discountHTML = product.discount ? `<span class="discount">${product.discount}</span>` : '';
    const starsHTML = generateStars(product.rating);
    const primeHTML = product.prime ? `<div class="prime-badge"><i class="fas fa-shipping-fast"></i> Prime</div>` : '';

    card.innerHTML = `
        <div class="product-image">
            <img src="${product.image}" alt="${product.name}" loading="lazy">
            ${badgeHTML}
        </div>
        <div class="product-info">
            <h3 class="product-title">${product.name}</h3>
            <div class="product-rating">
                <span class="product-stars">${starsHTML}</span>
                <a href="#" class="product-reviews">(${product.reviews})</a>
            </div>
            <div class="product-price">
                <span class="current-price">$${product.price}</span>
                ${originalPriceHTML}
                ${discountHTML}
            </div>
            ${primeHTML}
            <button class="add-to-cart" onclick="addToCart(${product.id})">
                Add to Cart
            </button>
        </div>
    `;

    // Add click event for product viewing
    card.addEventListener('click', (e) => {
        if (!e.target.closest('.add-to-cart')) {
            viewProduct(product.id);
        }
    });

    return card;
}

// Generate star rating HTML
function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    
    let stars = '';
    for (let i = 0; i < fullStars; i++) {
        stars += '★';
    }
    if (hasHalfStar) {
        stars += '☆';
    }
    for (let i = 0; i < emptyStars; i++) {
        stars += '☆';
    }
    
    return stars;
}

// View product (add to recently viewed)
function viewProduct(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    // Add to recently viewed
    recentlyViewed = recentlyViewed.filter(id => id !== productId);
    recentlyViewed.unshift(productId);
    recentlyViewed = recentlyViewed.slice(0, 6); // Keep only last 6
    
    localStorage.setItem('recentlyViewed', JSON.stringify(recentlyViewed));
    renderRecentlyViewed();
}

// Render recently viewed products
function renderRecentlyViewed() {
    const recentContainer = document.getElementById('recent-products');
    if (!recentContainer || recentlyViewed.length === 0) return;

    recentContainer.innerHTML = '';
    
    recentlyViewed.forEach(productId => {
        const product = products.find(p => p.id === productId);
        if (product) {
            const productCard = createCompactProductCard(product);
            recentContainer.appendChild(productCard);
        }
    });
}

// Create compact product card for recommendations
function createCompactProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    
    const starsHTML = generateStars(product.rating);
    const originalPriceHTML = product.originalPrice ? `<span class="original-price">$${product.originalPrice}</span>` : '';

    card.innerHTML = `
        <div class="product-image" style="height: 150px;">
            <img src="${product.image}" alt="${product.name}" loading="lazy">
        </div>
        <div class="product-info">
            <h3 class="product-title" style="font-size: 14px;">${product.name}</h3>
            <div class="product-rating">
                <span class="product-stars" style="font-size: 12px;">${starsHTML}</span>
            </div>
            <div class="product-price">
                <span class="current-price" style="font-size: 16px;">$${product.price}</span>
                ${originalPriceHTML}
            </div>
        </div>
    `;

    card.addEventListener('click', () => viewProduct(product.id));
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
    showAddToCartNotification(product.name);
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
    if (cartCount) cartCount.textContent = totalItems;
    if (cartItemCount) cartItemCount.textContent = totalItems;
}

// Update cart total
function updateCartTotal() {
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    if (cartTotal) cartTotal.textContent = total.toFixed(2);
}

// Render cart items
function renderCartItems() {
    if (!cartItems) return;

    if (cart.length === 0) {
        cartItems.innerHTML = '<div class="text-center" style="padding: 40px;"><p>Your cart is empty</p><p style="font-size: 12px; color: #565959;">Add items to get started</p></div>';
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
                    <span style="margin: 0 8px; font-weight: 600;">${item.quantity}</span>
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                    <button class="quantity-btn" onclick="removeFromCart(${item.id})" style="margin-left: 10px; color: #B12704;">Delete</button>
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
    if (cartSidebar) cartSidebar.classList.add('active');
    if (cartOverlay) cartOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close cart
function closeCartSidebar() {
    if (cartSidebar) cartSidebar.classList.remove('active');
    if (cartOverlay) cartOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

// Search functionality
function handleSearch() {
    const query = searchInput.value.toLowerCase();
    const categoryFilter = searchCategory.value;
    
    let filteredProducts = products.filter(product => {
        const matchesQuery = product.name.toLowerCase().includes(query) ||
                           product.category.toLowerCase().includes(query) ||
                           product.subcategory?.toLowerCase().includes(query) ||
                           product.brand?.toLowerCase().includes(query);
        
        const matchesCategory = categoryFilter === 'all' || product.category === categoryFilter;
        
        return matchesQuery && matchesCategory;
    });

    renderProducts(filteredProducts);
    updateResultsCount(filteredProducts.length);
}

// Sort functionality
function handleSort() {
    currentSort = sortSelect.value;
    applyFilters();
}

// Apply all filters
function applyFilters() {
    let filteredProducts = [...products];

    // Apply main category filter
    if (currentFilter !== 'all') {
        if (currentFilter === 'sale') {
            filteredProducts = filteredProducts.filter(p => p.badge === 'sale');
        } else if (currentFilter === 'new') {
            filteredProducts = filteredProducts.filter(p => p.badge === 'new');
        } else {
            filteredProducts = filteredProducts.filter(p => p.category === currentFilter);
        }
    }

    // Apply sidebar filters
    const checkedCategories = Array.from(document.querySelectorAll('.category-filter:checked')).map(cb => cb.value);
    if (checkedCategories.length > 0) {
        filteredProducts = filteredProducts.filter(p => checkedCategories.includes(p.category));
    }

    const checkedBrands = Array.from(document.querySelectorAll('.brand-filter:checked')).map(cb => cb.value);
    if (checkedBrands.length > 0) {
        filteredProducts = filteredProducts.filter(p => checkedBrands.includes(p.brand));
    }

    const checkedPrices = Array.from(document.querySelectorAll('.price-filter:checked')).map(cb => cb.value);
    if (checkedPrices.length > 0) {
        filteredProducts = filteredProducts.filter(p => {
            return checkedPrices.some(range => {
                if (range === '0-50') return p.price < 50;
                if (range === '50-100') return p.price >= 50 && p.price < 100;
                if (range === '100-200') return p.price >= 100 && p.price < 200;
                if (range === '200+') return p.price >= 200;
                return false;
            });
        });
    }

    const checkedRatings = Array.from(document.querySelectorAll('.rating-filter:checked')).map(cb => parseInt(cb.value));
    if (checkedRatings.length > 0) {
        const minRating = Math.min(...checkedRatings);
        filteredProducts = filteredProducts.filter(p => p.rating >= minRating);
    }

    // Apply sorting
    filteredProducts = sortProducts(filteredProducts, currentSort);

    renderProducts(filteredProducts);
    updateResultsCount(filteredProducts.length);
}

// Sort products
function sortProducts(products, sortBy) {
    const sorted = [...products];
    
    switch (sortBy) {
        case 'price-low':
            return sorted.sort((a, b) => a.price - b.price);
        case 'price-high':
            return sorted.sort((a, b) => b.price - a.price);
        case 'rating':
            return sorted.sort((a, b) => b.rating - a.rating);
        case 'newest':
            return sorted.sort((a, b) => (b.badge === 'new' ? 1 : 0) - (a.badge === 'new' ? 1 : 0));
        default:
            return sorted; // Featured - keep original order
    }
}

// Update results count
function updateResultsCount(count) {
    if (resultsCount) {
        resultsCount.textContent = `Showing 1-${count} of ${count} results`;
    }
}

// Update breadcrumb
function updateBreadcrumb(filter) {
    if (!breadcrumbCategory) return;
    
    const breadcrumbMap = {
        'all': 'All Products',
        'men': "Men's Fashion",
        'women': "Women's Fashion",
        'sale': "Today's Deals",
        'new': 'New Arrivals'
    };
    
    breadcrumbCategory.textContent = breadcrumbMap[filter] || 'All Products';
}

// Show add to cart notification
function showAddToCartNotification(productName) {
    const notification = document.createElement('div');
    notification.innerHTML = `
        <div style="display: flex; align-items: center; gap: 8px;">
            <i class="fas fa-check-circle" style="color: #007185;"></i>
            <span>Added to cart: ${productName}</span>
        </div>
    `;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: white;
        color: #0F1111;
        padding: 12px 20px;
        border-radius: 4px;
        border: 1px solid #007185;
        z-index: 10000;
        animation: slideIn 0.3s ease;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        max-width: 300px;
        font-size: 14px;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Checkout functionality
function handleCheckout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    alert(`Order Summary:\n${itemCount} items\nSubtotal: $${total.toFixed(2)}\n\nThank you for your order! This is a demo - no actual payment was processed.`);
    
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

// Export functions for global access
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateQuantity = updateQuantity;