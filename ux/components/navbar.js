// ux/components/navbar.js

import Brand from './brand.js'
import NavBarLeftMenu from './navbar-leftmenu.js'

const NavBar = ({transparent, brand, open, children}) =>
    <nav className={transparent ? "top-0 absolute z-50 wfull" : "relative shadow-lg bg-white shadow-lg"}>
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
            <Brand name={brand} transparent={transparent} />
            <div className={(open ? "block rounded shadow-lg" : "hidden") + " lg-flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none"}>
                <NavBarLeftMenu transparent={transparent} />
            </div>
        </div>
    </nav>

export default NavBar
