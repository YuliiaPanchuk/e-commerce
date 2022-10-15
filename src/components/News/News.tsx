import React from 'react';
import './News.css';

export function News() {
  return (
    <div id='news'>
      <section className="newsWrapper">
        <div className="newsBlock">
          <div className="imageNews">
            <img src="/images/NewsOne.jpg" alt="news" />
          </div>

          <div className="textNews">
            <p className="textNewsTitle">Lorem ipsum dolor</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>

        <div className="newsBlock">
          <div className="textNews">
            <p className="textNewsTitle">Lorem ipsum dolor</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          
          <div className="imageNews">
            <img src="/images/newsTwo.jpg" alt="news" />
          </div>
        </div>

        <div className="newsBlock">
          <div className="imageNews">
          <img src="/images/newsTwo.jpg" alt="news" />
          </div>

          <div className="textNews">
            <p className="textNewsTitle">Lorem ipsum dolor</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
