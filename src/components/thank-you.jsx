import { Button } from './button';
import iconComplete from '../assets/images/icon-complete.svg';
import './thank-you.css';

export function ThankYou() {
  return (
    <section className="thankyou">
      <img src={iconComplete} alt="Icon for completed form flow" />
      <div className="thankyou__content">
        <h1 className="thankyou__title">THANK YOU!</h1>
        <p className="thankyou__message">We&apos;ve added your card details</p>
      </div>
      <Button text="Continue" />
    </section>
  );
}
