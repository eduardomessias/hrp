// components/nav.js

const Nav = ({transparent, children}) =>
    <nav className={(transparent ? "top-0 absolute z-50 w-full" : "relative shadow-lg bg-white shadow-lg") + " flex flex-wrap items-center justify-between px-2 py-3"}>
        {children}
    </nav>

export default Nav
