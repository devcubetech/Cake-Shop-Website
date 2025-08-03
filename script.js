// Cake Data
        const cakes = [
            {
                id: 1,
                name: "Velvet Dream",
                description: "Luxurious red velvet cake with cream cheese frosting and edible gold accents",
                price: 3499,
                originalPrice: 3999,
                category: "birthday",
                image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            },
            {
                id: 2,
                name: "Ethereal Elegance",
                description: "Five-tier masterpiece with sugar flowers and delicate lace patterns",
                price: 24999,
                originalPrice: 26999,
                category: "wedding",
                image: "https://images.unsplash.com/photo-1505976378723-9726b54e9bb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            },
            {
                id: 3,
                name: "Berry Symphony",
                description: "Vanilla bean cake with mixed berry compote and mascarpone frosting",
                price: 2999,
                originalPrice: 3499,
                category: "anniversary",
                image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            },
            {
                id: 4,
                name: "Caramel Delight",
                description: "Salted caramel cake with praline crunch and caramel buttercream",
                price: 3299,
                originalPrice: 3799,
                category: "custom",
                image: "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            },
            {
                id: 5,
                name: "Rainbow Fantasy",
                description: "Colorful funfetti cake with vanilla buttercream and sprinkles",
                price: 2799,
                originalPrice: 3299,
                category: "birthday",
                image: "https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            },
            {
                id: 6,
                name: "Floral Enchantment",
                description: "Lemon cake with raspberry filling and hand-painted floral design",
                price: 3799,
                originalPrice: 4299,
                category: "anniversary",
                image: "https://images.unsplash.com/photo-1519869325930-281384150729?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            },
            {
                id: 7,
                name: "Chocolate Indulgence",
                description: "Triple chocolate cake with ganache and chocolate shavings",
                price: 3199,
                originalPrice: 3699,
                category: "custom",
                image: "https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            },
            {
                id: 8,
                name: "Naked Romance",
                description: "Semi-naked cake with fresh flowers and seasonal fruit",
                price: 19999,
                originalPrice: 21999,
                category: "wedding",
                image: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            },
              {
                id: 9,
                name: "Rainbow Fantasy",
                description: "Colorful funfetti cake with vanilla buttercream and sprinkles",
                price: 2799,
                originalPrice: 3299,
                category: "birthday",
                image: "https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            },
             {
                id: 10,
                name: "Caramel Delight",
                description: "Salted caramel cake with praline crunch and caramel buttercream",
                price: 3299,
                originalPrice: 3799,
                category: "custom",
                image: "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            }, 
            {
                id: 11,
                name: "Velvet Dream",
                description: "Luxurious red velvet cake with cream cheese frosting and edible gold accents",
                price: 3499,
                originalPrice: 3999,
                category: "birthday",
                image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            },
            {
                id: 12,
                name: "Ethereal Elegance",
                description: "Five-tier masterpiece with sugar flowers and delicate lace patterns",
                price: 24999,
                originalPrice: 26999,
                category: "wedding",
                image: "https://images.unsplash.com/photo-1505976378723-9726b54e9bb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            }, 
        ];

        // DOM Elements
        const cakeGrid = document.getElementById('cakeGrid');
        const categoryBtns = document.querySelectorAll('.category-btn');
        const cartIcon = document.getElementById('cartIcon');
        const cartModal = document.getElementById('cartModal');
        const closeCart = document.getElementById('closeCart');
        const overlay = document.getElementById('overlay');
        const continueShopping = document.getElementById('continueShopping');
        const cartItems = document.getElementById('cartItems');
        const cartCount = document.querySelector('.cart-count');
        const cartTotal = document.getElementById('cartTotal');
        const mobileMenu = document.getElementById('mobileMenu');
        const navMenu = document.getElementById('navMenu');

        // Cart state
        let cart = [];

        // Initialize the page
        function init() {
            renderCakes();
            setupEventListeners();
        }

        // Render cakes to the page
        function renderCakes(category = 'all') {
            cakeGrid.innerHTML = '';
            
            const filteredCakes = category === 'all' 
                ? cakes 
                : cakes.filter(cake => cake.category === category);
            
            filteredCakes.forEach(cake => {
                const cakeCard = document.createElement('div');
                cakeCard.className = 'cake-card';
                cakeCard.innerHTML = `
                    <div class="cake-img">
                        <img src="${cake.image}" alt="${cake.name}">
                        <div class="cake-category">${cake.category.charAt(0).toUpperCase() + cake.category.slice(1)}</div>
                    </div>
                    <div class="cake-info">
                        <h3>${cake.name}</h3>
                        <p>${cake.description}</p>
                        <div class="cake-footer">
                            <div class="price">₹${cake.price.toLocaleString()} <span>₹${cake.originalPrice.toLocaleString()}</span></div>
                            <button class="add-to-cart" data-id="${cake.id}">
                                <i class="fas fa-plus"></i>
                            </button>
                        </div>
                    </div>
                `;
                cakeGrid.appendChild(cakeCard);
            });
            
            // Add event listeners to the new "Add to Cart" buttons
            document.querySelectorAll('.add-to-cart').forEach(button => {
                button.addEventListener('click', addToCart);
            });
        }

        // Add to cart function
        function addToCart(e) {
            const cakeId = parseInt(e.currentTarget.getAttribute('data-id'));
            const cake = cakes.find(c => c.id === cakeId);
            
            // Check if cake is already in cart
            const existingItem = cart.find(item => item.id === cakeId);
            
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({
                    id: cake.id,
                    name: cake.name,
                    price: cake.price,
                    quantity: 1,
                    image: cake.image
                });
            }
            
            updateCart();
            showNotification(`${cake.name} added to cart!`);
        }

        // Update cart UI
        function updateCart() {
            // Update cart count
            cartCount.textContent = cart.reduce((total, item) => total + item.quantity, 0);
            
            // Update cart items
            cartItems.innerHTML = '';
            
            if (cart.length === 0) {
                cartItems.innerHTML = '<p style="text-align: center; padding: 40px 20px; color: #777; font-size: 1.1rem;">Your cart is empty. Add some sweetness!</p>';
                cartTotal.textContent = '₹0.00';
                return;
            }
            
            let total = 0;
            
            cart.forEach(item => {
                const itemTotal = item.price * item.quantity;
                total += itemTotal;
                
                const cartItem = document.createElement('div');
                cartItem.className = 'cart-item';
                cartItem.innerHTML = `
                    <div class="cart-item-img">
                        <img src="${item.image}" alt="${item.name}">
                    </div>
                    <div class="cart-item-details">
                        <h4>${item.name}</h4>
                        <div class="cart-item-price">₹${item.price.toLocaleString()}</div>
                        <div class="cart-item-quantity">
                            <button class="quantity-btn minus" data-id="${item.id}">-</button>
                            <input type="text" class="quantity-input" value="${item.quantity}" readonly>
                            <button class="quantity-btn plus" data-id="${item.id}">+</button>
                            <button class="remove-item" data-id="${item.id}">
                                <i class="fas fa-trash"></i>
                            </button>
                        </div>
                    </div>
                `;
                cartItems.appendChild(cartItem);
            });
            
            // Update total
            cartTotal.textContent = `₹${total.toLocaleString()}`;
            
            // Add event listeners to the new buttons
            document.querySelectorAll('.minus').forEach(btn => {
                btn.addEventListener('click', decreaseQuantity);
            });
            
            document.querySelectorAll('.plus').forEach(btn => {
                btn.addEventListener('click', increaseQuantity);
            });
            
            document.querySelectorAll('.remove-item').forEach(btn => {
                btn.addEventListener('click', removeItem);
            });
        }

        // Decrease item quantity
        function decreaseQuantity(e) {
            const id = parseInt(e.currentTarget.getAttribute('data-id'));
            const item = cart.find(i => i.id === id);
            
            if (item.quantity > 1) {
                item.quantity -= 1;
            } else {
                cart = cart.filter(i => i.id !== id);
            }
            
            updateCart();
        }

        // Increase item quantity
        function increaseQuantity(e) {
            const id = parseInt(e.currentTarget.getAttribute('data-id'));
            const item = cart.find(i => i.id === id);
            
            item.quantity += 1;
            updateCart();
        }

        // Remove item from cart
        function removeItem(e) {
            const id = parseInt(e.currentTarget.getAttribute('data-id'));
            cart = cart.filter(i => i.id !== id);
            updateCart();
        }

        // Show notification
        function showNotification(message) {
            // Create notification element
            const notification = document.createElement('div');
            notification.className = 'notification';
            notification.textContent = message;
            notification.style.cssText = `
                position: fixed;
                bottom: 30px;
                right: 30px;
                background: linear-gradient(135deg, var(--primary), var(--secondary));
                color: white;
                padding: 18px 30px;
                border-radius: 12px;
                box-shadow: 0 12px 30px rgba(233, 30, 99, 0.35);
                z-index: 2000;
                transform: translateX(120px);
                opacity: 0;
                transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                font-weight: 500;
                max-width: 350px;
                font-size: 1.05rem;
            `;
            
            document.body.appendChild(notification);
            
            // Animate in
            setTimeout(() => {
                notification.style.transform = 'translateX(0)';
                notification.style.opacity = '1';
            }, 10);
            
            // Remove after delay
            setTimeout(() => {
                notification.style.transform = 'translateX(120px)';
                notification.style.opacity = '0';
                
                setTimeout(() => {
                    document.body.removeChild(notification);
                }, 400);
            }, 3500);
        }

        // Setup event listeners
        function setupEventListeners() {
            // Category filter buttons
            categoryBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    // Remove active class from all buttons
                    categoryBtns.forEach(b => b.classList.remove('active'));
                    // Add active class to clicked button
                    btn.classList.add('active');
                    // Filter cakes
                    renderCakes(btn.getAttribute('data-category'));
                });
            });
            
            // Cart icon click
            cartIcon.addEventListener('click', () => {
                cartModal.classList.add('open');
                overlay.classList.add('active');
                document.body.style.overflow = 'hidden';
            });
            
            // Close cart
            closeCart.addEventListener('click', closeCartModal);
            overlay.addEventListener('click', closeCartModal);
            continueShopping.addEventListener('click', closeCartModal);
            
            // Mobile menu toggle
            mobileMenu.addEventListener('click', () => {
                navMenu.classList.toggle('show');
            });
            
            // Smooth scrolling for anchor links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    const target = document.querySelector(this.getAttribute('href'));
                    if (target) {
                        window.scrollTo({
                            top: target.offsetTop - 80,
                            behavior: 'smooth'
                        });
                        
                        // Close mobile menu if open
                        navMenu.classList.remove('show');
                    }
                });
            });
        }

        // Close cart modal
        function closeCartModal() {
            cartModal.classList.remove('open');
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        }

        // Initialize the page when loaded
        window.addEventListener('DOMContentLoaded', init);