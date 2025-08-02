# StyleHub - Online Clothing Store

A modern, responsive e-commerce website for men's and women's clothing built with HTML, CSS, and JavaScript.

## 🌟 Features

### 🛍️ Shopping Experience
- **Product Catalog**: Browse curated collections of men's and women's clothing
- **Smart Filtering**: Filter products by category (All, Men, Women, Sale)
- **Search Functionality**: Find products by name, category, or subcategory
- **Shopping Cart**: Add, remove, and manage items with quantity controls
- **Persistent Cart**: Cart contents saved in localStorage

### 🎨 Modern Design
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **Beautiful UI**: Modern gradient backgrounds, smooth animations, and hover effects
- **Professional Navigation**: Dropdown menus for categories and smooth scrolling
- **High-Quality Images**: Professional product photography from Unsplash

### 💫 Interactive Features
- **Mobile Menu**: Hamburger menu for mobile navigation
- **Cart Sidebar**: Slide-out cart with real-time updates
- **Loading Animations**: Smooth loading states and transitions
- **Notifications**: Success messages for cart actions
- **Newsletter Signup**: Email subscription with discount offer

### 🛒 Product Categories

#### Men's Collection
- Shirts (Dress shirts, Polo shirts)
- Pants (Jeans, Chinos)
- Jackets (Leather jackets, Blazers)
- Accessories (Shoes, Bags)

#### Women's Collection
- Dresses (Summer dresses, Maxi dresses)
- Tops (Blouses, Sweaters)
- Bottoms (Jeans, Skirts)
- Accessories (Handbags, Jewelry)

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No additional software or dependencies required

### Installation
1. Clone or download this repository
2. Open `index.html` in your web browser
3. Start shopping!

### File Structure
```
├── index.html          # Main HTML file
├── style.css           # CSS styles and responsive design
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## 🎯 Usage

### Navigation
- **Home**: Landing page with hero section and category overview
- **Men/Women**: Dropdown menus with subcategories
- **Sale**: View all discounted items
- **Search**: Type in the search bar to find specific products

### Shopping Cart
1. Click "Add to Cart" on any product
2. View cart by clicking the cart icon in the header
3. Adjust quantities with +/- buttons
4. Remove items with the × button
5. Proceed to checkout (demo functionality)

### Mobile Experience
- Tap the hamburger menu (☰) for navigation
- All features are touch-optimized
- Cart sidebar adapts to full-screen on mobile

## 🛠️ Technical Features

### Performance
- **Lazy Loading**: Images load as needed for better performance
- **Local Storage**: Cart persistence across browser sessions
- **Optimized Images**: Compressed images for fast loading
- **Smooth Animations**: Hardware-accelerated CSS transitions

### Accessibility
- **Semantic HTML**: Proper heading structure and landmarks
- **Keyboard Navigation**: All interactive elements are keyboard accessible
- **Alt Text**: Descriptive alt text for all images
- **Focus Management**: Clear focus indicators

### Browser Support
- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+

## 🎨 Design System

### Colors
- **Primary**: `#667eea` (Purple gradient)
- **Secondary**: `#2c3e50` (Dark blue-gray)
- **Accent**: `#e74c3c` (Red for sale badges)
- **Success**: `#27ae60` (Green for notifications)

### Typography
- **Font**: Poppins (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700

### Layout
- **Max Width**: 1200px container
- **Grid System**: CSS Grid for responsive layouts
- **Spacing**: Consistent 8px grid system

## 📱 Responsive Breakpoints
- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: 320px - 767px

## 🔧 Customization

### Adding Products
Edit the `products` array in `script.js`:
```javascript
{
    id: 13,
    name: "Your Product Name",
    category: "men" | "women",
    subcategory: "shirts" | "pants" | "dresses" | "accessories",
    price: 99.99,
    originalPrice: 129.99, // Optional for sale items
    image: "https://your-image-url.com/image.jpg",
    badge: "new" | "sale", // Optional
    description: "Product description"
}
```

### Styling
Modify `style.css` to customize:
- Colors and gradients
- Typography and spacing
- Animation durations
- Layout breakpoints

## 🌐 Demo
Open `index.html` in your browser to see the live demo with:
- 12 sample products (6 men's, 6 women's)
- Working shopping cart
- Responsive design
- All interactive features

## 📄 License
This project is open source and available under the MIT License.

## 🤝 Contributing
Feel free to fork this project and submit pull requests for improvements!

---

Built with ❤️ using vanilla HTML, CSS, and JavaScript