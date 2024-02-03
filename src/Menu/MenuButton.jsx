import React from "react"
import Button from "../Button"
import { MenuContext } from "./Menu"

export default function MenuButton({ children }) {
    const { toggle } = React.useContext(MenuContext)
    return (
        <Button onClick={toggle}>{children}</Button>
    )
}