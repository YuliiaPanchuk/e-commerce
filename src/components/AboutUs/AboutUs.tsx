import './AboutUs.css';

export function AboutUs() {
  return (
    <section id="aboutUs">
      <div className="aboutUsLeftContainer"></div>
      <div className="aboutUsRightContainer"></div>
      <div className="aboutUsImages">
        <div className="aboutUsImageContainer">
          <img src="images/coffee-beans.png" alt="" />
        </div>
        <div className="aboutUsImageContainer">
          <img src="images/coffee-pour.png" alt="" />
        </div>
        <div className="aboutUsImageContainer">
          <img src="images/coffee-1.png" alt="" />
        </div>
        <div className="aboutUsImageContainer">
          <img src="images/coffee-grinded.png" alt="" />
        </div>
      </div>

      <div className="aboutUsText">
        <h1 className="aboutUsHeadline">NomNom Coffee Story</h1>
        <p className="aboutUsDescription">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          <br /> <br /> Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </section>
  );
}
