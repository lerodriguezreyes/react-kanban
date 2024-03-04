import Images from "../images/images"

function About() {
  return (
    <div id="aboutPage">
    <h1 id="aboutHeader">About CosmicFlow</h1>
    <img id="flowNaut" src={Images.image1} alt='flownaut recruitment'/>
    <p id="aboutDescription"> Imagine a Kanban board as a cosmic control center, where tasks orbit like celestial bodies around their designated orbit stages. "To Do" tasks are missions about exploring those celestial bodies, launching like rockets, traversing the cosmos of the "In Progress" void until they are fully scanned and you can gracefully dock back at the "Done" space station. Each task is a star in the constellation of productivity, guided by the gravitational pull of efficiency and collaboration. Unlock the final frontier while seamlessly journeying through your tasks. For all the technical details of CosmicFlow, visit the <a href="https://github.com/lerodriguezreyes/react-kanban"> Github repository </a>. </p>
    </div>
  )
}

export default About