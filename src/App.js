import React, { useState } from "react";
import Navigation from "./components/Navigation";
import Dashboard from "./components/Dashboard";
import CategoryManager from "./components/CategoryManager";
import ProductManager from "./components/ProductManager";
import Footer from "./components/Footer";

function App() {
  const [activeSection, setActiveSection] = useState("dashboard");

  return (
    <div className="app-container">
      <Navigation setActiveSection={setActiveSection} />

      <main className="main-content">
        {activeSection === "dashboard" && <Dashboard />}
        {activeSection === "categories" && <CategoryManager />}
        {activeSection === "products" && <ProductManager />}
      </main>

      <Footer />
    </div>
  );
}

export default App;
