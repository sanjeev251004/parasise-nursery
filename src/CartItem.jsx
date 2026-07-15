import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css'; // Make sure this CSS file exists, or style inline

function CartItem({ onContinueShopping }) {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  // Parse numerical string (e.g., "$15") to an integer float value
  const parseCost = (costStr) => {
    return parseFloat(costStr.replace('$', ''));
  };

  const calculateTotalAmount = () => {
    return cartItems.reduce((total, item) => total + (parseCost(item.cost) * item.quantity), 0);
  };

  const calculateTotalCost = (item) => {
    return parseCost(item.cost) * item.quantity;
  };

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.name));
    }
  };

  const handleRemove = (itemName) => {
    dispatch(removeItem(itemName));
  };

  const handleCheckout = () => {
    alert("Checkout functionality Coming Soon!");
  };

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      <h3>Total Cart Amount: ${calculateTotalAmount()}</h3>
      
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items-list">
          {cartItems.map((item, idx) => (
            <div key={idx} className="cart-item-card">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <h4>{item.name}</h4>
                <p>Unit Price: {item.cost}</p>
                <p>Subtotal: ${calculateTotalCost(item)}</p>
                <div className="quantity-controls">
                  <button onClick={() => handleDecrement(item)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleIncrement(item)}>+</button>
                </div>
                <button onClick={() => handleRemove(item.name)} className="delete-btn">Delete</button>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="cart-actions">
        <button onClick={onContinueShopping} className="continue-btn">Continue Shopping</button>
        <button onClick={handleCheckout} className="checkout-btn">Checkout</button>
      </div>
    </div>
  );
}

export default CartItem;
