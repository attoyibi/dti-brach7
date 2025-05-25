import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { BookProvider } from './context/BookContext.jsx';

createRoot(document.getElementById('root')).render(
  <BookProvider>
    <App />
  </BookProvider>
);
