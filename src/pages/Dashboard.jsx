import TaskList from "../components/TaskList";

function Dashboard() {
  return (
    <>
      <section className="KanbanBoard">
        <div className="kContainer">
        <h1>Mission Board</h1>
          <div className="kHeaders">
            <h3>A new blimp in the radar!</h3>
            <h3>Currently exploring</h3>
            <h3>Fully scanned</h3>
          </div>
          <div className="dragDropContainer">
          <div className="kColumns">
          <TaskList/>
          <button> Discover new celestial body </button>
          </div>
          <div className="kColumns"></div>
          <div className="kColumns"></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Dashboard;
