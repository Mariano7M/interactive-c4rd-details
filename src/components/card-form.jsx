import { Button } from './button';
import './card-form.css';
export function CardForm() {
  function onSubmitForm(event) {
    event.preventDefault();
    console.log('🚀 ~ file: card-form.jsx:5 ~ onSubmitForm ~ e:', event);
  }

  function onHolderNameChange(event) {
    console.log(event.target.value);
  }

  function onCardNumberChange(event) {
    console.log(event.target.value);
  }

  function onExpirationMonthChange(event) {
    console.log(event.target.value);
  }

  function onExpirationYearChange(event) {
    console.log(event.target.value);
  }

  function onCvcChange(event) {
    console.log(event.target.value);
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
          onChange={(event) => onHolderNameChange(event)}
        />
      </div>
      <div className="card-form__input-group">
        <label className="label" htmlFor="cardnumber">
          Card Number
        </label>
        <input
          className="input"
          type="number"
          name="cardnumber"
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
              onChange={(e) => onExpirationMonthChange(e)}
            />
            <input
              className="input"
              type="text"
              maxLength={2}
              name="expirationDate"
              placeholder="YY"
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
            onChange={(e) => onCvcChange(e)}
          />
        </div>
      </div>
      <Button type="submit" text="Confirm" />
    </form>
  );
}
