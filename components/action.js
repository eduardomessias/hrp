export default function Action({ component, route, type }) {
    return (
        <>
            <h1>Action component</h1>
            <p>
                Invoked route: <b>{route}</b><br/>
                Action component: <b>{component}</b><br/>
                Action type: <b>{type}</b><br/>
                <i><b>{route}</b>: {type} {component}.</i>
            </p>
        </>
    )
}