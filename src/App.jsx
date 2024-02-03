import React from 'react';
import ReactDOM from 'react-dom/client';
import Menu from "./Menu/Menu"
import MenuButton from "./Menu/MenuButton"
import MenuDropdown from "./Menu/MenuDropdown"
import MenuItem from "./Menu/MenuItem"

function App() {
  const sports = ["Tennis", "Pickle ball", "Racquet ball", "Squash"]
  
  return (
    <Menu>
      <MenuButton>Sports</MenuButton>
      <MenuDropdown>
        {sports.map(sport => (
          <MenuItem key={sport}>{sport}</MenuItem>
        ))}
      </MenuDropdown>
    </Menu>
  )
}
export default App;