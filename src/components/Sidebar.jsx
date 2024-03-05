import { Link } from "react-router-dom"
import { slide as Menu } from 'react-burger-menu'

function Sidebar() {
  return (
    <>
    <Menu noOverlay customBurgerIcon={ <img
          width="100"
          height="100"
          src="https://github.com/lerodriguezreyes/react-kanban/blob/main/public/logo.png?raw=true"
          alt="rocketship zooming in space"
        /> }>
      <Link to="/"> Home </Link>
      <Link to="/about"> About </Link>
    </Menu>
    </>
  )
}

export default Sidebar
 