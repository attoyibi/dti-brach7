# 📚 Book Manager App

A simple React app to manage a list of books — fetch, add, and delete — using state management with Context API and a custom hook. This project is a study case for learning React fundamentals including useState, useEffect, custom hooks, and async API handling.

---

## 🚀 Features

### ✅ Fetch Book List (Simulated from Products API)
- Data fetched from [dummyjson.com/products](https://dummyjson.com/products)
- Each product is treated as a "book"
- Shows book title, price, and category

### ✅ Add New Book
- Add a book using a form with:
  - **Title**
  - **Price**
  - **Category**
- Data is stored only in local state (no real API call)

### ✅ Delete Book
- Each book card has a "Delete" button
- Deletion affects local state only

### ✅ Global State with Context API
- Uses React Context (`BookContext`) to manage global book list
- Shared state accessible from all components

### ✅ Custom Hook - `useBooks`
- Centralized logic for:
  - Fetching books
  - Adding a book
  - Deleting a book
  - Handling loading and error states

---

## 🧪 Tech Stack

- React (with Vite or CRA)
- Axios
- Context API
- Custom Hooks
- CSS/Tailwind (optional)

---

## 🛠 Project Structure

