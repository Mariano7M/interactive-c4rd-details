import { useCardDetails } from '../hooks/card-details.hooks';
import cardLogoImg from '../assets/images/card-logo.svg';
import './front-bank-card.css';

export function FrontBankCard() {
  const cardDetails = useCardDetails();
  return (
    <div className="front-bank-card">
      <img className="card_logo" src={cardLogoImg} alt="bank log card" />
      <div className="front-back-card__info">
        <span className="card__info-number">{cardDetails.cardNumber}</span>
        <div className="card__info-details">
          <span className="card__info-name">{cardDetails.cardHolderName}</span>
          <span className="card__info-expiration">
            {cardDetails.expirationMonth}/{cardDetails.expirationYear}
          </span>
        </div>
      </div>
    </div>
  );
}
