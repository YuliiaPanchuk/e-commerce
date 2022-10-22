import React from 'react';
import './News.css';

export function News() {
  return (
    <div id="news">
      <section className="newsWrapper">
        <div className="newsBlock">
          <div className="imageNews">
            <img src="/images/NewsOne.jpg" alt="news" />
          </div>

          <div className="textNews">
            <p className="textNewsTitle">New pomegranate flavor</p>
            <p>
              There is a new taste in the world of coffee. One that is familiar to most coffee
              drinkers and that one is called almond.
            </p>
          </div>
        </div>

        <div className="newsBlock">
          <div className="imageNews">
            <img src="/images/newCafe.jpg" alt="news" />
          </div>

          <div className="textNews">
            <p className="textNewsTitle">NomNom Coffee in Malmo</p>
            <p>
              This week we're in the process of opening a new cafe. It's been a long time coming and
              we're pretty excited about it.
            </p>
          </div>
        </div>

        <div className="newsBlock">
          <div className="imageNews">
            <img src="/images/neCafeT.jpg" alt="news" />
          </div>

          <div className="textNews">
            <p className="textNewsTitle"> Join our team in Malmo</p>
            <p>
              For our new cafe in Malmö, we are looking for someone with great coffee taste, and
              great customer service skills.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
