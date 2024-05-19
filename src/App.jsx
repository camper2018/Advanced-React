import React from 'react';
import ReactDOM from 'react-dom/client';
import Menu from "./Menu/index"
import { BsStar, BsStarFill } from 'react-icons/bs';
import Star from "./Star"
function App() {
  const sports = ["Tennis", "Pickle ball", "Racquet ball", "Squash"]

  return (
    <>
      <Star/>
      <br />
        <Menu>
          <Menu.Button>Sports</Menu.Button>
            <Menu.Dropdown>
              {sports.map(sport => (
                <Menu.Item key={sport}>{sport}</Menu.Item>
              ))}
            </Menu.Dropdown>
        </Menu>
    </>
  )
}
export default App;