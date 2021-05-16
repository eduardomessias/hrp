// ux/components/brand.js

const Brand = ({transparent, name}) =>
    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
        <a className={(transparent ? "text-white" : "text-gray-800") + " text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"} href="#">
            {name}
        </a>

        {/* I don't know why is this button here =/ */}
        <button className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button">
            <i className={(transparent ? "text-white" : "text-gray-800") + " fas fa-bars"}></i>
        </button>
    </div>

export default Brand

