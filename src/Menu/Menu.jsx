import React from "react"
import MenuButton from "./MenuButton"
import MenuDropdown from "./MenuDropdown"

const MenuContext = React.createContext()

export default function Menu({ children }) {
    const [open, setOpen] = React.useState(false)
    const menuId = React.useId();
    function toggle() {
        setOpen(prevOpen => !prevOpen)
    }
    // Improve accessibility by:
    /* apply role = "menu" 
       aria-expanded on dropdown
       aria-haspopup
       aria-hidden
       aria-controls on button and button-action component i.e dropdown

    */
    return (
        <MenuContext.Provider value={{open, toggle, menuId}}>
            <div className="menu" role="menu">
                {children}
            </div>
        </MenuContext.Provider>
    )
}

export { MenuContext }