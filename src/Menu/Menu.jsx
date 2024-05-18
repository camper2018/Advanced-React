import React from "react"
import MenuButton from "./MenuButton"
import MenuDropdown from "./MenuDropdown"

const MenuContext = React.createContext()

export default function Menu({ children }) {
    const [open, setOpen] = React.useState(false)
    const menuId = React.useId(); // to get unique id for each Menu dropdown controlled by unique menu button 
    function toggle() {
        setOpen(prevOpen => !prevOpen)
    }
    // When building a custom drop down or any other compound DOM element, it is crucial to add aria-accessibility rules to give semantic meaning to the elements
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