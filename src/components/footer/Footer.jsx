import React from "react"
import logoKasa from "./../../assets/kasa_logo_white.svg"


export function Footer () {
    return <footer className="footer">

      <img src={logoKasa} alt="logoKasa" />

<span className="copyright">© 2020 Kasa. All rights reserved</span>
  </footer>
}
export default Footer