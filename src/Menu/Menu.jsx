import React from "react"
import Toggle from "../Toggle/index"
export default function Menu({ children, onOpen }) {
    const [on, setOn] = React.useState(false)
    return (
        <Toggle onToggle={onOpen}>
            <div className="menu" role="menu">
                {children}
            </div>
        </Toggle>
    )
}

