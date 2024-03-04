import TaskList from "../components/TaskList"


function Dashboard() {
  return (
    <>
    <section className="KanbanBoard">
      <h1>Mission Board: To Infinity and Beyond! </h1>
      <div className="ToDo">
        <h3>A new blimp in the radar!</h3>
      </div>
      <div className="InProgress">
        <h3>Currently exploring</h3>
      </div>
      <div className="Done">
        <h3>Fully scanned</h3>
      </div>
    </section>
    <TaskList/>
    <button> Discover new celestial body </button>
    </>
  )
}

export default Dashboard