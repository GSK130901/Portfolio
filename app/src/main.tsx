import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

import { BrowserRouter } from 'react-router-dom';  // Import BrowserRouter

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* Wrap App in BrowserRouter and add basename */}
    <BrowserRouter basename="/Portfolio">  {/* Replace with your exact repo name */}
      <App />
    </BrowserRouter>
  </StrictMode>
);
