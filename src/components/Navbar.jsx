import Sidebar from "./Sidebar";

function Navbar() {
  return (
    <div id="Navbar">
      <div id="navImageContainer">
      <Sidebar/>
        
      </div>
      <div id="navTextContainer">
        {" "}
        <h1>CosmicFlow</h1>
        <h2>
          Unlock the final frontier while seamlessly journeying through tasks
        </h2>{" "}
      </div>
      <div></div>
    </div>
  );
}

export default Navbar;
