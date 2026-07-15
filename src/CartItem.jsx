function CartItem({ item, onAdd, onRemove }) {
  return (
    <div className="cart-item">
      <div>
        <strong>{item.name}</strong>
        <p>₹{item.price} each</p>
      </div>
      <div className="cart-actions">
        <button className="qty-btn" onClick={onRemove}>
          −
        </button>
        <span>{item.quantity}</span>
        <button className="qty-btn" onClick={onAdd}>
          +
        </button>
      </div>
    </div>
  );
}

export default CartItem;
