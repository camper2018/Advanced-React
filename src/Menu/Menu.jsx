import React from 'react';
export default function Menu({ children }) {
    const [open, setOpen] = React.useState(true)

    function toggle() {
        setOpen(prevOpen => !prevOpen)
    }

    return (
        <div className="menu">
            {/* React.Children api is different from children which is an array of elements */}
            {React.Children.map(children, (child) => {
                // cloneElement makes copy of element just like Object.assign() and allows injecting additional props
                return React.cloneElement(child, {
                    open,
                    toggle
                })
            })}
        </div>
    )
}
