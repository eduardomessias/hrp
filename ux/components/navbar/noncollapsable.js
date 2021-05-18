// ux/components/navbar/noncollapsable.js

const NonCollapsable = ({children}) =>
    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
        {children}
    </div>

export default NonCollapsable

