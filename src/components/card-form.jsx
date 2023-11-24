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
  const CANT_BE_BLANK_ERROR = "Can't be blank";
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
    const holderNameValidation = validateHolderName(cardDetails.cardHolderName);
    const cardNumberValidation = validateCardNumber(cardDetails.cardNumber);
    const expirationMonthValidation = validateExpirationMonth(
      cardDetails.expirationMonth
    );
    const expirationYearValidation = validateExpirationYear(
      cardDetails.expirationYear
    );
    const cvcValidation = validateCvc(cardDetails.cvc);

    if (
      holderNameValidation.isInvalid ||
      cardNumberValidation.isInvalid ||
      expirationMonthValidation.isInvalid ||
      expirationYearValidation.isInvalid ||
      cvcValidation.isInvalid
    ) {
      setHolderNameValidation(holderNameValidation);
      setCardNumberValidation(cardNumberValidation);
      setExpirationValidation(expirationMonthValidation);
      setExpirationValidation(expirationYearValidation);
      setCvcValidation(cvcValidation);
      return;
    }

    dispatch({
      type: 'MARK_CARD_COMPLETED',
      isCardCompleted: true,
    });
  }

  function validateHolderName(cardHolderName) {
    if (isEmpty(cardHolderName)) {
      return {
        isInvalid: true,
        errorMessage: CANT_BE_BLANK_ERROR,
      };
    }
    return validInput;
  }

  function validateCardNumber(cardNumber) {
    if (isEmpty(cardNumber)) {
      setCardNumberValidation({
        isInvalid: true,
        errorMessage: CANT_BE_BLANK_ERROR,
      });
      return true;
    }

    if (hasWrongFormat(cardNumber)) {
      return {
        isInvalid: true,
        errorMessage: WRONG_FORMAT_ERROR,
      };
    }
    return validInput;
  }

  function validateExpirationMonth(expirationMonth) {
    if (isEmpty(expirationMonth)) {
      return {
        isInvalid: true,
        errorMessage: CANT_BE_BLANK_ERROR,
      };
    }

    if (hasWrongFormat(expirationMonth)) {
      return {
        isInvalid: true,
        errorMessage: WRONG_FORMAT_ERROR,
      };
    }
    return validInput;
  }

  function validateExpirationYear(expirationYear) {
    if (isEmpty(expirationYear)) {
      return {
        isInvalid: true,
        errorMessage: CANT_BE_BLANK_ERROR,
      };
    }

    if (hasWrongFormat(expirationYear)) {
      return {
        isInvalid: true,
        errorMessage: WRONG_FORMAT_ERROR,
      };
    }
    return validInput;
  }

  function validateCvc(cvc) {
    if (isEmpty(cvc)) {
      return {
        isInvalid: true,
        errorMessage: CANT_BE_BLANK_ERROR,
      };
    }

    if (hasWrongFormat(cvc)) {
      return {
        isInvalid: true,
        errorMessage: WRONG_FORMAT_ERROR,
      };
    }
    return validInput;
  }

  function onHolderNameChange(event) {
    const holderNameInputValue = event.target.value;
    dispatch({
      type: 'ADD_CARDHOLDER_NAME',
      cardHolderName: holderNameInputValue,
    });
    setHolderNameValidation(validateHolderName(holderNameInputValue));
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
    setCardNumberValidation(validateCardNumber(formattedCardNumber));
  }

  function onExpirationMonthChange(event) {
    const expirationMonthInputValue = event.target.value;
    dispatch({
      type: 'ADD_EXPIRATION_MONTH',
      expirationMonth: expirationMonthInputValue,
    });
    setExpirationValidation(validateExpirationMonth(expirationMonthInputValue));
  }

  function onExpirationChange(event) {
    const expirationYearInputValue = event.target.value;
    dispatch({
      type: 'ADD_EXPIRATION_YEAR',
      expirationYear: expirationYearInputValue,
    });
    setExpirationValidation(validateExpirationYear(expirationYearInputValue));
  }

  function onCvcChange(event) {
    const cvcInputValue = event.target.value;
    dispatch({
      type: 'ADD_CVC',
      cvc: cvcInputValue,
    });
    setCvcValidation(validateCvc(cvcInputValue));
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
          id="cardholdername"
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
          id="cardnumber"
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
          <label className="label" htmlFor="expirationMonthDate">
            Exp. Date (MM/YY)
          </label>
          <div className="card-form__expiration-inputs">
            <input
              className="input"
              type="text"
              id="expirationMonthDate"
              maxLength={2}
              name="expirationMonthDate"
              placeholder="MM"
              value={cardDetails.expirationMonth}
              onChange={(e) => onExpirationMonthChange(e)}
            />
            <input
              className="input"
              type="text"
              maxLength={2}
              name="expirationYearDate"
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
            id="cvc"
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
      <Button type="submit" text="Confirm" onHandleClick={onSubmitForm} />
    </form>
  );
}
