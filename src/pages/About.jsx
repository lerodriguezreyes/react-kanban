import Images from "../images/images"

function About() {
  return (
    <div>
    <h1> About CosmicFlow and the OG FlowNaut</h1>
    <img src={Images.image1} alt='flownaut recruitment'/>
    <p> Insert project description here along with a little about me.</p>
    <button> Github </button>
    <button>LinkedIn</button>
    </div>
  )
}

export default About