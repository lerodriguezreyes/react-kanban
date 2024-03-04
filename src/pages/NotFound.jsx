import Images from "../images/images"
function NotFound() {
  return (
    <div>
    <h1 id='lostHeader'> You seem to be lost...</h1>
    <img id="lostPic" src={Images.image2} alt='voyager in space'/>
    <h2 id= 'lostMessege'> These are not the routes you are looking for.</h2>
    </div>
  )
}

export default NotFound