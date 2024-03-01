import { Link } from "react-router-dom"

function Sidebar() {
  return (
    <>
    <hr></hr>
    <div>Sidebar</div>
    <ul>
      <li><Link to="/"> Home </Link> </li>
      <li><Link to="/missionboard"> Mission Board </Link> </li>
      <li><Link to="/about"> About </Link></li>
      <li><Link to="/gallery"> Space Images Gallery </Link></li>
    </ul>
    </>
  )
}

export default Sidebar
 