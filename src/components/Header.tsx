import { NavLink } from 'react-router-dom'
import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <nav className="nav">
          <NavLink
            to="/"
            end
            className={({ isActive }) => `nav-link${isActive ? ' nav-link--active' : ''}`}
          >
            Home
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) => `nav-link${isActive ? ' nav-link--active' : ''}`}
          >
            Blog
          </NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Header
