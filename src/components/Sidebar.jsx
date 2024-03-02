import { Link } from "react-router-dom"
import { slide as Menu } from 'react-burger-menu'

function Sidebar() {
  return (
    <>
    <Menu noOverlay customBurgerIcon={ <img
          width="200"
          height="200"
          src="https://github.com/lerodriguezreyes/react-kanban/blob/main/public/logo.png?raw=true"
          alt="rocketship zooming in space"
        /> }>
      <Link to="/"> Home </Link>
      <Link to="/missionboard"> Mission Board </Link>
      <Link to="/about"> About </Link>
      <Link to="/gallery"> Space Images Gallery </Link>
    </Menu>
    </>
  )
}

export default Sidebar
 