// components/collapsable.js

const Collapsable = ({open, children}) =>
    <div className={"lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none " + (open ? "block rounded shadow-lg" : "hidden")}>
        {children}
    </div>

export default Collapsable

