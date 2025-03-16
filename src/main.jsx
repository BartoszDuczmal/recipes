
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

document.onselectstart = () => {return false} // Disable selection on the page

createRoot(document.getElementById('root')).render(<App />)
