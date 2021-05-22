// ux/components/navbar/hamburger.js

const Hamburger = ({transparent}) =>
    <button className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button">
        <i className={(transparent ? "text-white" : "text-gray-800") + " fas fa-bars"}></i>
    </button>

export default Hamburger

