import { CardIcon } from './CardIcon';
import { EasyReturnIcon } from './EasyReturnIcon';
import { EnvironmentIcon } from './EnvironmentIcon';
import { FreeDelivery } from './FreeDeliveryIcon';
import { QualityIcon } from './QualityIcon';
import { ShopOnline } from './ShopOnline';
import './WhyUs.css';

export function WhyUs() {
  return (
    <>
      <section className="sectionWrapper">
        <div className="sectionContainer">
          <QualityIcon />
          <p className="sectionTitle">Best Quality</p>
          <p className="sectionDescribtion">
            We prioritise quality and taste to create better coffee experiences for our customers.
          </p>
        </div>

        <div className="sectionContainer">
          <CardIcon />
          <p className="sectionTitle">Money secure</p>
          <p className="sectionDescribtion">
            3D Secure is an additional layer of security for online credit and debit card
            transactions with an authentication step.
          </p>
        </div>

        <div className="sectionContainer">
          <EnvironmentIcon />
          <p className="sectionTitle">Environment safe</p>
          <p className="sectionDescribtion">
            We have published a comprehensive sustainability report and have now partnered with
            Ekos.
          </p>
        </div>

        <div className="sectionContainer">
          <ShopOnline />
          <p className="sectionTitle">Shop online</p>
          <p className="sectionDescribtion">
            Secure Card Payment With VISA and MasterCard, Maestro and American Express. There are no
            extra credit card fees for you.
          </p>
        </div>

        <div className="sectionContainer">
          <FreeDelivery />
          <p className="sectionTitle">Free delivery</p>
          <p className="sectionDescribtion">
            For all orders in Sweden and Finland, free shipping is for SEK 300 or more. Otherwise, a
            SEK 50 freight fee will be added.
          </p>
        </div>

        <div className="sectionContainer">
          <EasyReturnIcon />
          <p className="sectionTitle">Easy return</p>
          <p className="sectionDescribtion">
            As a customer, you always have 14 days of withdrawal on distance contracts and contracts
            outside commercial premises.
          </p>
        </div>
      </section>
    </>
  );
}
