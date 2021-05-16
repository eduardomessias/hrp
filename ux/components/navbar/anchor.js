// ux/components/navbar/anchor.js

const Anchor = ({icon, caption, link, transparent, smartCaption}) =>
    <a className={(transparent ? "lg:text-white lg:hover:text-gray-300 text-gray-800" : "text-gray-800 hover:text-gray-600") + " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"} href={link}>
        <i className={(transparent ? "lg:text-gray-300 text-gray-500" : "text-gray-500") + " " + (icon) + " text-lg leading-lg mr-2"}></i>
        <span className={smartCaption ? "lg:hidden inline-block ml-2" : ""}>{caption}</span>
    </a>

export default Anchor

