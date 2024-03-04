function MissionBoardPage() {
  return (
    <section className="KanbanBoard">
      <h1>Mission Board</h1>
      <h2> To Infinity and Beyond! </h2>
      <div className="To do">
        <h3>A new blimp in the radar!</h3>
      </div>
      <div className="In progress">
        <h3>Currently exploring</h3>
      </div>
      <div className="Done">
        <h3>Fully scanned</h3>
      </div>
    </section>
  );
}

export default MissionBoardPage;
