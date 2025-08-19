// src/components/CategoryManager.js
import React, { useState } from "react";
import "./CategoryManager.css";

function CategoryManager() {
  const [categories, setCategories] = useState(["Dresses", "Shoes"]);
  const [newCategory, setNewCategory] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  // Add Category
  const handleAdd = () => {
    if (!newCategory.trim()) return alert("Enter category");
    setCategories([...categories, newCategory.trim()]);
    setNewCategory("");
  };

  // Delete Category
  const handleDelete = (index) => {
    setCategories(categories.filter((_, i) => i !== index));
  };

  // Edit Category
  const handleEdit = (index) => {
    setEditIndex(index);
    setNewCategory(categories[index]);
  };

  // Update Category
  const handleUpdate = () => {
    const updated = [...categories];
    updated[editIndex] = newCategory.trim();
    setCategories(updated);
    setEditIndex(null);
    setNewCategory("");
  };

  return (
    <div className="manager-container">
      <h2>Category Manager</h2>

      {/* Input Form */}
      <div className="form-container">
        <input
          type="text"
          placeholder="Category Name"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
        />
        {editIndex !== null ? (
          <button className="update-btn" onClick={handleUpdate}>Update</button>
        ) : (
          <button className="add-btn" onClick={handleAdd}>Add</button>
        )}
      </div>

      {/* Category Cards */}
      <div className="category-list">
        {categories.map((cat, i) => (
          <div key={i} className="category-card">
            <span>{cat}</span>
            <div className="category-actions">
              <button className="edit-btn" onClick={() => handleEdit(i)}>Edit</button>
              <button className="delete-btn" onClick={() => handleDelete(i)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryManager;
