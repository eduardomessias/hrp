// ux/components/navbar-leftmenu.js

const NavBarLeftMenu = ({transparent}) =>
    <ul className="flex flex-col lg:flex-row list-none mr-auto">
        <li className="flex items-center">
            <a className={(transparent ? "lg:text-white lg:hover:text-gray-300 text-gray-800" : "text-gray-800 hover:text-gray-600") + " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"} href="#">
                <i className={(transparent ? "lg:text-gray-300 text-gray-500" : "text-gray-500") + " far fa-file-alt text-lg leading-lg mr-2"}></i>
                Docs
            </a>
        </li>
    </ul>

export default NavBarLeftMenu

