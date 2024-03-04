import { Link } from "react-router-dom"

function TaskDetails(task) {
  return (
    <div>
    <h2>Celestial body details</h2>
    <TaskCard/>
    </div>
  )
}

export default TaskDetails





// // src/pages/ProjectsPage.jsx

// function ProjectsPage(props) {
//   return (
//     <div>
//       <h1>Projects</h1>
//       {props.projects.map((project) => {
//         return (
//           <div key={project._id} className="project">
//             <h3>{project.name}</h3>
//             <p>{project.technologies}</p>
//           </div>
//         );
//       })}
//     </div>
//   );
// }

// export default ProjectsPage;
