import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import './ProductList.css'; // Make sure this CSS file exists, or style inline
import CartItem from './CartItem';

function ProductList() {
  const [showCart, setShowCart] = useState(false);
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  // Dynamic cart icon counter calculation
  const totalCartItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  const plantsArray = [
    {
      category: "Air Purifying Plants",
      plants: [
        { name: "Snake Plant", image: "https://images.unsplash.com/photo-1545241047-6083a3684587", description: "Produces oxygen at night.", cost: "$15" },
        { name: "Spider Plant", image: "https://images.unsplash.com/photo-1512428813834-c702c7702b78", description: "Filters formaldehyde and xylene.", cost: "$12" },
        { name: "Peace Lily", image: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32", description: "Removes mold spores from the air.", cost: "$18" },
        { name: "Boston Fern", image: "https://images.unsplash.com/photo-1517436070964-d79e39bf05d1", description: "Adds humidity to indoor air.", cost: "$14" },
        { name: "Aloe Vera", image: "https://images.unsplash.com/photo-1596547609652-9cf5d8d76921", description: "Purifies air and heals burns.", cost: "$10" },
        { name: "English Ivy", image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9", description: "Reduces airborne mold particles.", cost: "$16" }
      ]
    },
    {
      category: "Aromatic Houseplants",
      plants: [
        { name: "Lavender", image: "https://images.unsplash.com/photo-1528826722302-d374329d3118", description: "Calming scent that aids sleep.", cost: "$20" },
        { name: "Rosemary", image: "https://images.unsplash.com/photo-1515589654462-a9881e276b8a", description: "Invigorating, fresh herbal aroma.", cost: "$15" },
        { name: "Mint", image: "https://images.unsplash.com/photo-1603569283847-be4020c3cd75", description: "Refreshing scent, great for tea.", cost: "$8" },
        { name: "Jasmine", image: "https://images.unsplash.com/photo-1508747703725-719777637510", description: "Sweet perfume that blooms at night.", cost: "$22" },
        { name: "Lemon Balm", image: "https://images.unsplash.com/photo-1530268576020-5627ec7f4db9", description: "Citrus scent that deters bugs.", cost: "$12" },
        { name: "Eucalyptus", image: "https://images.unsplash.com/photo-1550950158-d0d960dff51b", description: "Cooling menthol aroma.", cost: "$18" }
      ]
    },
    {
      category: "Low Maintenance Plants",
      plants: [
        { name: "ZZ Plant", image: "https://images.unsplash.com/photo-1632207691143-643c2a9a9361", description: "Thrives on neglect and low light.", cost: "$25" },
        { name: "Pothos", image: "https://images.unsplash.com/photo-1597055181300-e3633a207518", description: "Fast-growing trailing vine.", cost: "$12" },
        { name: "Cast Iron Plant", image: "https://images.unsplash.com/photo-1598880940375-d6d76bb381a1", description: "Virtually indestructible foliage.", cost: "$24" },
        { name: "Jade Plant", image: "https://images.unsplash.com/photo-1599599806499-53a50b691129", description: "Succulent requiring minimal watering.", cost: "$15" },
        { name: "Chinese Evergreen", image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b", description: "Tolerates poor lighting conditions.", cost: "$19" },
        { name: "Succulent Mix", image: "https://images.unsplash.com/photo-1520302817085-345e6b76c43a", description: "Tiny plants, very low water demand.", cost: "$10" }
      ]
    }
  ];

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
  };

  const isItemInCart = (productName) => {
    return cartItems.some(item => item.name === productName);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="nav-logo" onClick={() => setShowCart(false)}>Paradise Nursery</div>
        <div className="nav-links">
          <span onClick={() => setShowCart(false)}>Plants</span>
          <span className="cart-icon" onClick={() => setShowCart(true)}>
            🛒 <span className="cart-count">{totalCartItems}</span>
          </span>
        </div>
      </nav>

      {showCart ? (
        <CartItem onContinueShopping={() => setShowCart(false)} />
      ) : (
        <div className="product-container">
          {plantsArray.map((categoryGroup, idx) => (
            <div key={idx} className="category-section">
              <h2>{categoryGroup.category}</h2>
              <div className="product-list">
                {categoryGroup.plants.map((plant, pIdx) => (
                  <div key={pIdx} className="product-card">
                    <img src={plant.image} alt={plant.name} className="product-image" />
                    <h3>{plant.name}</h3>
                    <p>{plant.description}</p>
                    <p className="product-price">{plant.cost}</p>
                    <button 
                      disabled={isItemInCart(plant.name)} 
                      onClick={() => handleAddToCart(plant)}
                      className="add-to-cart-btn"
                    >
                      {isItemInCart(plant.name) ? "Added to Cart" : "Add to Cart"}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductList;
