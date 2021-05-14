// hrp/ux/components/ActionButton.js

const ActionButton = ({href,children}) => 
    <a href={href} className="bg-transparent mr-auto hover:bg-indigo-300 text-indigo-300 hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-indigo-300 hover:border-transparent">
        {children}
    </a>

export default ActionButton
