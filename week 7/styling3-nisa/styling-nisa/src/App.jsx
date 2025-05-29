import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import axios from "axios";
import Hero from "./components/Hero";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Products from "./pages/ProductPage";

export default function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
        <div>
          <Link to="/product/1">Product 1</Link> |
          <Link to="/product/2">Product 2</Link> |
          <Link to="/product/3">Product 3</Link> |
          <Link to="/product/4">Product 4</Link> |
          <Link to="/product/5">Product 5</Link> |
        </div>
      </nav>
      {/* yang berganti hanya di dalam routes */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/product" element={<Products />} />
        <Route path="/product/:id" element={<Products />} />
      </Routes>
      <footer>ini footer tidak berganti</footer>
    </div>

    // <div>

    //   {/* Navbar */}
    //   <div className="navbar bg-base-100 shadow-sm">
    //     <div className="flex-1">
    //       <a className="btn btn-ghost text-xl">daisyUI</a>
    //     </div>
    //     <div className="flex-none">
    //       <ul className="menu menu-horizontal px-1">
    //         <li>
    //           <a>Link</a>
    //         </li>
    //         <li>
    //           <details>
    //             <summary>Parent</summary>
    //             <ul className="bg-base-100 rounded-t-none p-2">
    //               <li>
    //                 <a>Link 1</a>
    //               </li>
    //               <li>
    //                 <a>Link 2</a>
    //               </li>
    //             </ul>
    //           </details>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    //   {/* Hero Section */}
    //   <Hero />
    //   {/* Footer */}
    // </div>
  );
}
