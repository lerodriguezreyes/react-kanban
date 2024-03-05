
function NotFound() {
  return (
    <div>
      <h1 className="lostHeader"> You seem to be lost...</h1>
      <img
        className="lostPicblack"
        width={"100%"}
        height={"100%"}
        src="https://www.irishtimes.com/resizer/R1ncS8w_lc193kscBzlcYsjdEcU=/1600x0/filters:format(jpg):quality(70)/cloudfront-eu-central-1.images.arcpublishing.com/irishtimes/5W5SBE4OVBYZSUTJDYQ2HYWIDA.jpg"
        alt="voyager in space"
      />

      <h2 className="lostMessege">
        {" "}
        These are not the routes you are looking for.
      </h2>
    </div>
  );
}

export default NotFound;
