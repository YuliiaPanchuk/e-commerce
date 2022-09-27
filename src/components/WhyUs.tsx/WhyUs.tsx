import { CardIcon } from './CardIcon';
import { EasyReturnIcon } from './EasyReturnIcon';
import { EnvironmentIcon } from './EnvironmentIcon';
import { FreeDelivery } from './FreeDeliveryIcon';
import { QualityIcon } from './QualityIcon';
import { ShopOnline } from './ShopOnline';
import './WhyUs.css';

export function HomeSection() {
  return (
    <>
      <section className="sectionWrapper">
        <div className="sectionContainer">
          <QualityIcon />
          <p className="sectionTitle">Best Quality</p>
          <p className="sectionDescribtion">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="sectionContainer">
          <CardIcon />
          <p className="sectionTitle">Money secure</p>
          <p className="sectionDescribtion">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="sectionContainer">
          <EnvironmentIcon />
          <p className="sectionTitle">Environment safe</p>
          <p className="sectionDescribtion">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="sectionContainer">
          <ShopOnline />
          <p className="sectionTitle">Shop online</p>
          <p className="sectionDescribtion">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="sectionContainer">
          <FreeDelivery />
          <p className="sectionTitle">Free delivery</p>
          <p className="sectionDescribtion">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="sectionContainer">
          <EasyReturnIcon />
          <p className="sectionTitle">Easy return</p>
          <p className="sectionDescribtion">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </section>
    </>
  );
}
