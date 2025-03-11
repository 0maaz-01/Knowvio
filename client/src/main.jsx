import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { AppContextProvider } from './context/AppContext.jsx';
import { BrowserRouter } from 'react-router-dom';
import {ClerkProvider} from '@clerk/clerk-react';

// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")}


createRoot(document.getElementById('root')).render(
  <BrowserRouter>          {/*Setting up a router or getting the support of the router.*/}
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl={'/'}>        {/*Wrapping the content of the website inside the authentication */}
      <AppContextProvider>   {/*// By wrapping your component inside AppContextProvider, you are providing the context (or global state/data) to the App component and all of its children.*/}
        <App/>
      </AppContextProvider>
    </ClerkProvider>
  </BrowserRouter>
)
