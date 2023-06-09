import { useState } from 'react';
import {
  useCardDetails,
  useCardDetailsDispatch,
} from '../hooks/card-details.hooks';
import { Button } from './button';
import './card-form.css';
export function CardForm() {
  const cardDetails = useCardDetails();
  const dispatch = useCardDetailsDispatch();
  const CANT_BE_BLANK_ERROR = "Cant't be blank";
  const WRONG_FORMAT_ERROR = 'Wrong format, numbers only';
  const validInput = {
    isInvalid: false,
    errorMessage: '',
  };
  const [holderNameValidation, setHolderNameValidation] = useState(validInput);
  const [cardNumberValidation, setCardNumberValidation] = useState(validInput);
  const [expirationValidation, setExpirationValidation] = useState(validInput);
  const [cvcValidation, setCvcValidation] = useState(validInput);

  function onSubmitForm(event) {
    event.preventDefault();
    validateHolderName(cardDetails.cardHolderName);
    validateCardNumber(cardDetails.cardNumber);
    validateExpirationMonth(cardDetails.expirationMonth);
    validateExpirationYear(cardDetails.expirationYear);
    validateCvc(cardDetails.cvc);

    if (
      holderNameValidation.isInvalid ||
      cardNumberValidation.isInvalid ||
      expirationValidation.isInvalid ||
      cvcValidation.isInvalid
    ) {
      return;
    }
  }

  function validateHolderName(cardHolderName) {
    setHolderNameValidation(validInput);
    if (isEmpty(cardHolderName)) {
      setHolderNameValidation({
        isInvalid: true,
        errorMessage: CANT_BE_BLANK_ERROR,
      });
    }
  }

  function validateCardNumber(cardNumber) {
    setCardNumberValidation(validInput);
    if (isEmpty(cardNumber)) {
      setCardNumberValidation({
        isInvalid: true,
        errorMessage: CANT_BE_BLANK_ERROR,
      });
    }

    if (hasWrongFormat(cardNumber)) {
      setCardNumberValidation({
        isInvalid: true,
        errorMessage: WRONG_FORMAT_ERROR,
      });
    }
  }

  function validateExpirationMonth(expirationMonth) {
    setExpirationValidation(validInput);
    if (isEmpty(expirationMonth)) {
      setExpirationValidation({
        isInvalid: true,
        errorMessage: CANT_BE_BLANK_ERROR,
      });
    }

    if (hasWrongFormat(expirationMonth)) {
      setExpirationValidation({
        isInvalid: true,
        errorMessage: WRONG_FORMAT_ERROR,
      });
    }
  }

  function validateExpirationYear(expirationYear) {
    setExpirationValidation(validInput);
    if (isEmpty(expirationYear)) {
      setExpirationValidation({
        isInvalid: true,
        errorMessage: CANT_BE_BLANK_ERROR,
      });
    }

    if (hasWrongFormat(expirationYear)) {
      setExpirationValidation({
        isInvalid: true,
        errorMessage: WRONG_FORMAT_ERROR,
      });
    }
  }

  function validateCvc(cvc) {
    setCvcValidation(validInput);
    if (isEmpty(cvc)) {
      setCvcValidation({
        isInvalid: true,
        errorMessage: CANT_BE_BLANK_ERROR,
      });
      return;
    }

    if (hasWrongFormat(cvc)) {
      setCvcValidation({
        isInvalid: true,
        errorMessage: WRONG_FORMAT_ERROR,
      });
    }
  }

  function onHolderNameChange(event) {
    const holderNameInputValue = event.target.value;
    dispatch({
      type: 'ADD_CARDHOLDER_NAME',
      cardHolderName: holderNameInputValue,
    });
    validateHolderName(holderNameInputValue);
  }

  function onCardNumberChange(event) {
    let cardNumberInputValue = event.target.value.trim();
    const cardInputValueWithoutSpace = cardNumberInputValue.replaceAll(' ', '');

    const formattedCardNumber = cardInputValueWithoutSpace
      .replace(/([\d|\w]{4})(?=)/g, '$1 ')
      .trim();

    dispatch({
      type: 'ADD_CARD_NUMBER',
      cardNumber: formattedCardNumber,
    });
    validateCardNumber(formattedCardNumber);
  }

  function onExpirationMonthChange(event) {
    const expirationMonthInputValue = event.target.value;
    dispatch({
      type: 'ADD_EXPIRATION_MONTH',
      expirationMonth: expirationMonthInputValue,
    });
    validateExpirationMonth(expirationMonthInputValue);
  }

  function onExpirationChange(event) {
    const expirationYearInputValue = event.target.value;
    dispatch({
      type: 'ADD_EXPIRATION_YEAR',
      expirationYear: expirationYearInputValue,
    });
    validateExpirationYear(expirationYearInputValue);
  }

  function onCvcChange(event) {
    const cvcInputValue = event.target.value;
    dispatch({
      type: 'ADD_CVC',
      cvc: cvcInputValue,
    });
    validateCvc(cvcInputValue);
  }

  function hasWrongFormat(value) {
    return !new RegExp(/^[\d\s]*$/).test(value);
  }

  function isEmpty(value) {
    return value === '';
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
        {holderNameValidation.isInvalid && (
          <span className="error__messaje">
            {holderNameValidation.errorMessage}
          </span>
        )}
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
        {cardNumberValidation.isInvalid && (
          <span className="error__messaje">
            {cardNumberValidation.errorMessage}
          </span>
        )}
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
              onChange={(e) => onExpirationChange(e)}
            />
          </div>
          {expirationValidation.isInvalid && (
            <span className="error__messaje">
              {expirationValidation.errorMessage}
            </span>
          )}
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
          {cvcValidation.isInvalid && (
            <span className="error__messaje">{cvcValidation.errorMessage}</span>
          )}
        </div>
      </div>
      <Button type="submit" text="Confirm" />
    </form>
  );
}
