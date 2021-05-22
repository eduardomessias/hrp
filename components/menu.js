// components/menu.js

const Menu = ({className, children}) =>
    <ul className={"flex flex-col lg:flex-row list-none " + (className)}>
        {children}
    </ul>

export default Menu

