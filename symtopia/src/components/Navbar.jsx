/**
 * Navbar Component
 * 
 * Navigation bar component that appears on all pages.
 * Provides links to Home, Report, and Dashboard pages.
 * Includes responsive design with mobile menu.
 */

import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import AnimatedThemeToggler from './AnimatedThemeToggler'
import './Navbar.css'

function Navbar() {
  // State for mobile menu toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  // Get current location to highlight active nav link
  const location = useLocation()
  
  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  
  // Close menu when a link is clicked
  const closeMenu = () => {
    setIsMenuOpen(false)
  }
  
  // Check if a path is currently active
  const isActive = (path) => location.pathname === path
  
  return (
    <nav className="navbar">
      <div className="container navbar-container">
        {/* Logo / Brand */}
        <Link to="/" className="navbar-brand" onClick={closeMenu}>
          <svg 
            className="navbar-logo" 
            viewBox="0 0 40 40" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Health cross icon */}
            <circle cx="20" cy="20" r="18" fill="url(#gradient)" />
            <path d="M20 10V30M10 20H30" stroke="white" strokeWidth="3" strokeLinecap="round" />
            <circle cx="12" cy="12" r="3" fill="rgba(255,255,255,0.5)" />
            <circle cx="28" cy="28" r="2" fill="rgba(255,255,255,0.5)" />
            <defs>
              <linearGradient id="gradient" x1="0" y1="0" x2="40" y2="40">
                <stop offset="0%" stopColor="#0077b6" />
                <stop offset="100%" stopColor="#2a9d8f" />
              </linearGradient>
            </defs>
          </svg>
          <span className="navbar-title">SymptoMap</span>
        </Link>
        
        {/* Mobile menu button */}
        <button 
          className={`navbar-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          <span className="toggle-bar"></span>
          <span className="toggle-bar"></span>
          <span className="toggle-bar"></span>
        </button>
        
        {/* Theme Toggler */}
        <AnimatedThemeToggler />
        
        {/* Navigation links */}
        <div className={`navbar-menu ${isMenuOpen ? 'open' : ''}`}>
          <Link 
            to="/" 
            className={`navbar-link ${isActive('/') ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link 
            to="/report" 
            className={`navbar-link ${isActive('/report') ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Report Symptoms
          </Link>
          <Link 
            to="/dashboard" 
            className={`navbar-link ${isActive('/dashboard') ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Dashboard
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
