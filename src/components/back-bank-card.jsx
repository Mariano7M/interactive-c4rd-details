import { useCardDetails } from '../hooks/card-details.hooks';
import './back-bank-card.css';

export function BackBankCard() {
  const cardDetails = useCardDetails();

  return (
    <div className="back-bank-card">
      <span className="back-bank-card__cvc">{cardDetails.cvc}</span>
    </div>
  );
}
