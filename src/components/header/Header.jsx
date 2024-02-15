import React from "react"
import logoKasa from "./../../assets/kasa_logo_red.svg"
import { Link, NavLink } from "react-router-dom"


export function Header () {
    return <><header className="header">
      <Link> 
<img src={logoKasa}  alt="logoKasa"/></Link>
    <nav>
      <ul>
        <li>
          <NavLink to="/kasa_P8/">Accueil</NavLink>
        </li>
        <li>
          <NavLink to="/kasa_P8/about">A Propos</NavLink>
        </li>
      </ul>
    </nav>
  </header>
  </>
}

export default Header