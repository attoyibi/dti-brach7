import { useState, useEffect, createContext } from "react";
import axios from "axios";
export const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([
    {
        id: 1,
        title: "Harry Potter",
        price: 100000,
        category: "Novel",
        },
        {
        id: 2,
        title: "JavaScript",
        price: 200000,
        category: "Programming",
        },
        {
        id: 3,
        title: "ReactJS",
        price: 300000,
        category: "Programming",
    }
  ]);

  

  return (
    <BookContext.Provider value={{ books, setBooks }}>
      {children}
    </BookContext.Provider>
  );
}