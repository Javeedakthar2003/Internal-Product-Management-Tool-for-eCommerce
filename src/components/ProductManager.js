import React, { useState } from "react";
import "./ProductManager.css";
import "./manager-container.css";

function ProductManager() {
  // Start with empty product list
  const [products, setProducts] = useState([]);

  const [newProduct, setNewProduct] = useState({ name: "", price: "", image: "" });
  const [editId, setEditId] = useState(null);
  const [cart, setCart] = useState([]);

  // Add Product
  const handleAdd = () => {
    if (!newProduct.name || !newProduct.price || !newProduct.image) return alert("Fill all fields");
    setProducts([
      ...products,
      { id: Date.now(), name: newProduct.name, price: parseFloat(newProduct.price), image: newProduct.image }
    ]);
    setNewProduct({ name: "", price: "", image: "" });
  };

  // Delete Product
  const handleDelete = (id) => {
    setProducts(products.filter((p) => p.id !== id));
    setCart(cart.filter((item) => item.id !== id));
  };

  // Edit Product
  const handleEdit = (product) => {
    setEditId(product.id);
    setNewProduct({ name: product.name, price: product.price, image: product.image });
  };

  // Save Edit
  const handleUpdate = () => {
    setProducts(
      products.map((p) =>
        p.id === editId ? { ...p, name: newProduct.name, price: parseFloat(newProduct.price), image: newProduct.image } : p
      )
    );
    setEditId(null);
    setNewProduct({ name: "", price: "", image: "" });
  };

  // Add to cart
  const handleShop = (product) => {
    if (!cart.find((item) => item.id === product.id)) {
      setCart([...cart, product]);
    }
  };

  return (
    <div className="manager-container">
      <h2>Product Manager</h2>

      {/* Add/Edit Form */}
      <div className="form-container">
        <input
          type="text"
          placeholder="Product Name"
          value={newProduct.name}
          onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
        />
        <input
          type="number"
          placeholder="Price"
          value={newProduct.price}
          onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
        />
        <input
          type="text"
          placeholder="Image URL"
          value={newProduct.image}
          onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
        />
        {editId ? (
          <button onClick={handleUpdate}>Update</button>
        ) : (
          <button onClick={handleAdd}>Add</button>
        )}
      </div>

      {/* Product Table */}
      {products.length > 0 ? (
        <table className="product-table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Price (₹)</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p.id}>
                <td>
                  <img
                    src={p.image}
                    alt={p.name}
                    onError={(e) => (e.target.src = "https://via.placeholder.com/80x80?text=No+Image")}
                    style={{ width: "60px", height: "60px", objectFit: "cover", borderRadius: "6px" }}
                  />
                </td>
                <td>{p.name}</td>
                <td>{p.price}</td>
                <td>
                  <button onClick={() => handleEdit(p)}>Edit</button>
                  <button onClick={() => handleDelete(p.id)}>Delete</button>
                  <button onClick={() => handleShop(p)}>Shop</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p style={{ marginTop: "20px", textAlign: "center" }}>No products added yet.</p>
      )}

      {/* Shopping Cart */}
      {cart.length > 0 && (
        <div className="cart-section">
          <h3>Shopping List</h3>
          <ul>
            {cart.map((item) => (
              <li key={item.id} style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
                <img
                  src={item.image}
                  alt={item.name}
                  onError={(e) => (e.target.src = "https://via.placeholder.com/80x80?text=No+Image")}
                  style={{ width: "40px", height: "40px", objectFit: "cover", borderRadius: "6px", marginRight: "10px" }}
                />
                {item.name} - ₹{item.price}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default ProductManager;
