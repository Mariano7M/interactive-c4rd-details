import {
  useCardDetails,
  useCardDetailsDispatch,
} from '../hooks/card-details.hooks';
import { Button } from './button';
import './card-form.css';
export function CardForm() {
  const cardDetails = useCardDetails();
  const dispatch = useCardDetailsDispatch();

  function onSubmitForm(event) {
    event.preventDefault();
  }

  function onHolderNameChange(event) {
    const holderNameInputValue = event.target.value;
    dispatch({
      type: 'ADD_CARDHOLDER_NAME',
      cardHolderName: holderNameInputValue,
    });
  }

  function onCardNumberChange(event) {
    let cardNumberInputValue = event.target.value.trim();
    const cardInputValueWithoutSpace = cardNumberInputValue.replaceAll(' ', '');

    const formattedCardNumber = cardInputValueWithoutSpace
      .replace(/(\d{4})(?=)/g, '$1 ')
      .trim();

    dispatch({
      type: 'ADD_CARD_NUMBER',
      cardNumber: formattedCardNumber,
    });
  }

  function onExpirationMonthChange(event) {
    const expirationMonthInputValue = event.target.value;
    dispatch({
      type: 'ADD_EXPIRATION_MONTH',
      expirationMonth: expirationMonthInputValue,
    });
  }

  function onExpirationYearChange(event) {
    const expirationYearInputValue = event.target.value;
    dispatch({
      type: 'ADD_EXPIRATION_YEAR',
      expirationYear: expirationYearInputValue,
    });
  }

  function onCvcChange(event) {
    const cvcInputValue = event.target.value;
    dispatch({
      type: 'ADD_CVC',
      cvc: cvcInputValue,
    });
  }

  return (
    <form className="card-form" onSubmit={onSubmitForm}>
      <div className="card-form__input-group">
        <label className="label" htmlFor="cardholdername">
          Cardholder Name
        </label>
        <input
          className="input"
          type="text"
          name="cardholdername"
          placeholder="e.g Jane Appleseed"
          value={cardDetails.cardHolderName}
          onChange={(event) => onHolderNameChange(event)}
        />
      </div>
      <div className="card-form__input-group">
        <label className="label" htmlFor="cardnumber">
          Card Number
        </label>
        <input
          className="input"
          type="text"
          name="cardnumber"
          maxLength={19}
          value={cardDetails.cardNumber}
          placeholder="e.g. 1234 5678 9123 000"
          onChange={(event) => onCardNumberChange(event)}
        />
      </div>
      <div className="card-form__details-group">
        <div className="card-form__expiration-group">
          <label className="label" htmlFor="expirationDate">
            Exp. Date (MM/YY)
          </label>
          <div className="card-form__expiration-inputs">
            <input
              className="input"
              type="text"
              maxLength={2}
              name="expirationDate"
              placeholder="MM"
              value={cardDetails.expirationMonth}
              onChange={(e) => onExpirationMonthChange(e)}
            />
            <input
              className="input"
              type="text"
              maxLength={2}
              name="expirationDate"
              placeholder="YY"
              value={cardDetails.expirationYear}
              onChange={(e) => onExpirationYearChange(e)}
            />
          </div>
        </div>
        <div className="card-form__input-group">
          <label className="label" htmlFor="cvc">
            CVC
          </label>
          <input
            className="input"
            type="text"
            maxLength={3}
            name="cvc"
            placeholder="e.g 123"
            value={cardDetails.cvc}
            onChange={(e) => onCvcChange(e)}
          />
        </div>
      </div>
      <Button type="submit" text="Confirm" />
    </form>
  );
}
