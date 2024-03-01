import Images from "../images/images"
function NotFound() {
  return (
    <div>
    <h1> You seem to be lost...</h1>
    <img src={Images.image2} alt='voyager in space'/>
    <h2> These are not the routes you are looking for.</h2>
    </div>
  )
}

export default NotFound