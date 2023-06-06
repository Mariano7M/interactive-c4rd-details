// import PropTypes from 'prop-types';
import cardLogoImg from '../assets/images/card-logo.svg';
import './front-bank-card.css';

export function FrontBankCard() {
  const expirationMonth = '00';
  const expirationYear = '00';
  const cardNumberRegistered = '0000 0000 0000 0000';
  const holderName = 'Jane Appleseed';
  return (
    <div className="front-bank-card">
      <img className="card_logo" src={cardLogoImg} alt="bank log card" />
      <div className="front-back-card__info">
        <span className="card__info-number">{cardNumberRegistered}</span>
        <div className="card__info-details">
          <span className="card__info-name">{holderName}</span>
          <span className="card__info-expiration">
            {expirationMonth}/{expirationYear}
          </span>
        </div>
      </div>
    </div>
  );
}

// FrontBankCard.propTypes = {
//   month: PropTypes.string.isRequired,
//   year: PropTypes.string.isRequired,
//   cardNumber: PropTypes.string.isRequired,
//   cardHolderName: PropTypes.string.isRequired,
// };
