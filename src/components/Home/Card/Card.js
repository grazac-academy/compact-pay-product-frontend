import classes from './Card.module.css';
import iphone from 'assets/Landing/productMobileImage.png';
import appstore from 'assets/Landing/appleStore.png';
import googleplay from 'assets/Landing/googlePlayButton.png';
import { works } from '../../../constants/index';
import CardItem from 'components/Home/CardItem/CardItem';

const Card = () => {
  return (
    <div>
      <div className={classes.mobile}>
        <h2 className={classes.H2text}>
          Transfer money online at your own conveniency
        </h2>
        <div className={classes.iphone}>
          <img src={iphone} alt="iphone" />
        </div>
        <div className={classes.transfer}>
          <h2>Transfer money online at your own conveniency</h2>
          <p>
            Download our app for free to transfer money online across the border
            at your own conviniency. Track your payments and view your
            transaction history anytime and anywhere.
          </p>
          <div className={classes.applications}>
            <img src={appstore} alt="appstore" />
            <img src={googleplay} alt="googleplay" />
          </div>
        </div>
      </div>
      <div className={classes.how}>
        <h2>How it works</h2>
        <p>
          Skilline is one powerful online software suite that combines all the
          tools needed to run a successful school or office.
        </p>
        <div className={classes.work}>
          {works.map((item) => (
            <CardItem
              key={item.id}
              img={item.img}
              title={item.title}
              content={item.content}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
