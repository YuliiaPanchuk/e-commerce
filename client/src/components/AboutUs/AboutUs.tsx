import './AboutUs.css';

export function AboutUs() {
  return (
    <section id="aboutUs">
      <div className="AboutUs__Left">
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
      </div>
      <div className="AboutUs__Right">
        <div className="aboutUsText">
          <h1 className="aboutUsHeadline">NomNom Coffee Story</h1>
          <p className="aboutUsDescription">
            Our idea is really quite simple. We buy really good coffee, which is produced in a
            sustainable way and we pay a fair sum. A rather banal concept and customary purchasing
            philosophy for coffee one can imagine.
            <br /> <br /> We prioritise quality and taste to create better coffee experiences for
            our customers. We always ask, what can we do better? And because we have done this for
            the past three decades, you can trust we will keep asking ourselves this question. Nom
            Nom Coffee is one you can trust, for flavour and care.
          </p>
        </div>
      </div>
    </section>
  );
}
