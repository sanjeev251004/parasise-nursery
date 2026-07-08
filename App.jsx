import { useDispatch, useSelector } from 'react-redux';
import AboutUs from './AboutUs';
import CartItem from './CartItem';
import ProductList from './ProductList';
import { addItem, clearCart, removeItem } from './CartSlice';
import './App.css';

const featuredPlants = [
  { id: 1, name: 'Snake Plant', price: 450, image: '🌿', tag: 'Low Maintenance' },
  { id: 2, name: 'Peace Lily', price: 600, image: '🪴', tag: 'Air Purifier' },
  { id: 3, name: 'Money Plant', price: 350, image: '🍃', tag: 'Easy Care' },
  { id: 4, name: 'Bird of Paradise', price: 850, image: '🌺', tag: 'Statement Plant' }
];

function App() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="app-shell">
      <header className="hero">
        <div>
          <p className="eyebrow">Paradise Nursery</p>
          <h1>Bring nature home with beautiful indoor plants.</h1>
          <p className="hero-text">
            Fresh greenery, handcrafted planters, and easy-care plants for every home.
          </p>
          <a href="#shop" className="hero-btn">
            Explore Plants
          </a>
        </div>
      </header>

      <main className="content-grid">
        <section className="main-section">
          <AboutUs />

          <div id="shop" className="section-block">
            <div className="section-heading">
              <h2>Featured Plants</h2>
              <p>Handpicked for bright corners and calm spaces.</p>
            </div>
            <ProductList products={featuredPlants} onAdd={(product) => dispatch(addItem(product))} />
          </div>
        </section>

        <aside className="cart-panel">
          <h2>Your Cart</h2>
          {cartItems.length === 0 ? (
            <p className="empty-cart">Your cart is empty. Add a few favorites to begin.</p>
          ) : (
            <div className="cart-list">
              {cartItems.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  onAdd={() => dispatch(addItem(item))}
                  onRemove={() => dispatch(removeItem(item.id))}
                />
              ))}
            </div>
          )}

          <div className="cart-summary">
            <div>
              <span>Items</span>
              <strong>{totalItems}</strong>
            </div>
            <div>
              <span>Total</span>
              <strong>₹{totalPrice}</strong>
            </div>
          </div>

          <button className="clear-btn" onClick={() => dispatch(clearCart())}>
            Clear Cart
          </button>
        </aside>
      </main>
    </div>
  );
}

export default App;
