import React from 'react';
import { LogoFrame } from './LogoFrame';
import './Footer.css';

export function Footer() {
  return (
    <>
      <section className="footerWrapper">
        <div className="footer">
          <div className="location">
            <iframe
              className="mapLocation"
              src="https://maps.google.com/maps?q=Malm%C3%B6&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameBorder="0"
              style={{ border: 0 }}
            />
          </div>
          <div className="footerInfo">
            <p>Contact</p>
            <small>We are here to help</small>
            <small>nomnom@coffee.com</small>

            <div className="footerWorkingHours">
              <small>Monday to Friday</small>
              <small>From 10am to 18.30pm</small>
              <small>0046 760 123 123</small>
            </div>
          </div>

          <div className="footerInfo">
            <p>Help</p>
            <small>Frequently Asked Questions</small>
            <small>Stores</small>
          </div>

          <div className="footerInfo">
            <p>Shop</p>
            <small>Lorem lorem</small>
            <small>Lorem lorem</small>
            <small>Lorem lorem</small>
          </div>
        </div>
      </section>

      <div className="rightsReserver">
        <small>© 2022 Nom Nom Coffee | All Rights Reserved</small>
      </div>
    </>
  );
}
