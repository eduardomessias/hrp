// components/brand.js

const Brand = ({transparent, name}) =>
    <a className={(transparent ? "text-white" : "text-gray-800") + " text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"} href="#">
        {name}
    </a>

export default Brand

