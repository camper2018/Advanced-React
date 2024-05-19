import React from 'react';
import ReactDOM from 'react-dom/client';
import Menu from "./Menu/index"
import Toggle from './Toggle/index'
import { BsStar, BsStarFill } from 'react-icons/bs';
function App() {
  const sports = ["Tennis", "Pickle ball", "Racquet ball", "Squash"]

  return (
    <>
      <Toggle>
        <Toggle.Button>
          <Toggle.On>
            <BsStarFill className="star filled" />
          </Toggle.On>
          <Toggle.Off>
            <BsStar className="star" />
          </Toggle.Off>
        </Toggle.Button>
      </Toggle>
      <br />
      <br />
      <Toggle>
        <Menu>
          <Toggle.Button>
            <Menu.Button>Sports</Menu.Button>
          </Toggle.Button>
          <Toggle.On>
            <Menu.Dropdown>
              {sports.map(sport => (
                <Menu.Item key={sport}>{sport}</Menu.Item>
              ))}
            </Menu.Dropdown>
          </Toggle.On>
        </Menu>
      </Toggle>
    </>
  )
}
export default App;