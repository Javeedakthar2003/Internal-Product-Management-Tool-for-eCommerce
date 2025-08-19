

Interview Design Task – Internal Product Management Tool Link : https://internal-product-management-tool-for-e-commerce-r192-96xbjaenk.vercel.app/


🛠️ Internal Product Management Tool for eCommerce
📌 Overview

This project is an Internal Product Management Tool designed for an eCommerce platform to manage its product catalog.
The platform currently sells dresses and shoes, but it expands into new product categories every 6 months (e.g., watches, smartphones, grooming products, accessories).

This tool enables merchandisers and category managers to:

Define new product categories and their specific attributes

Create, update, and manage products with category-specific attributes

Ensure data integrity and provide scalability for future category expansion

🚀 Features

📂 Category Management (Add/Edit/Delete product categories)

⚙️ Attribute Management (Define custom attributes for each category)

🛒 Product Management (Create, update, and manage products with category-specific attributes)

✅ Scalable Database Design supporting future expansion

🔒 Ensures normalization and data integrity

🏗️ Step 1: Database Design

Designed a relational database schema to support dynamic categories and custom attributes.

Entities include:

Category

Attribute

Product

ProductAttributeValue

🔗 ERD (Entity Relationship Diagram)

(Add your ERD diagram image here — e.g., ![ERD](docs/ERD.png))

✍️ Design Justification

Normalization: Avoided data redundancy by separating attributes from products.

Flexibility: Allows adding new categories and attributes without schema changes.

Future-proofing: Scales with new product categories (e.g., smartphones, watches).

🧩 Step 2: Class Design

Created class diagram aligned with the database schema.

Major classes:

Category

Attribute

Product

ProductManager

📊 Class Diagram

(Add your class diagram image here — e.g., ![Class Diagram](docs/ClassDiagram.png))

💻 Step 3: Implementation

The tool is implemented using [Your Tech Stack Here: e.g., Python (Flask/Django) + SQLite/MySQL + React/HTML].

🔑 Core Modules

Category Management → Add/Edit/Delete categories

Attribute Management → Define attributes for each category

Product Management → Add/Edit/Delete products with category-specific attributes
We are not measuring speed. Quality matters more than how fast you finish.
We will evaluate based on:
Database Design: scalability, normalization, flexibility
Class Design: clarity, maintainability, extensibility
Implementation: code quality, structure, documentation, usability
Completeness: following instructions, delivering all required artifacts
