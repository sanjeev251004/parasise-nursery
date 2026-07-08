function ProductList({ products, onAdd }) {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <div className="product-card" key={product.id}>
          <div className="product-image">{product.image}</div>
          <p>{product.tag}</p>
          <h3>{product.name}</h3>
          <div className="product-footer">
            <strong>₹{product.price}</strong>
            <button className="add-btn" onClick={() => onAdd(product)}>
              Add to cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
