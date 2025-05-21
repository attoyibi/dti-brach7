import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import BodyRight from './BodyRight.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BodyRight />
  </StrictMode>
);
