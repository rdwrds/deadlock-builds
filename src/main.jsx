import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Outer from './components/Outer';
import Header from './components/Header';
import DefaultInventory from "./components/DefaultInventory";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <Outer/>
    <div class="inventory">
      <DefaultInventory/>
    </div>
  </StrictMode>,
)
