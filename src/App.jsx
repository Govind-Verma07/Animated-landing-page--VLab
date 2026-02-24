import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'

function App() {
    const [darkMode, setDarkMode] = useState(true)

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [darkMode])

    const toggleDarkMode = () => setDarkMode(!darkMode)

    return (
        <div className="min-h-screen bg-[#050505]">
            <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <Home />
        </div>
    )
}

export default App
