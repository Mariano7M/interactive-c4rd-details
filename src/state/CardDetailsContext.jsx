import { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';

export const CardDetailsContext = createContext(null);
export const CardDetailsDispatchContext = createContext(null);

export function CardDetailsProvider({ children }) {
  const [cardDetails, dispatch] = useReducer(
    cardDetailsReducer,
    initialCardDetails
  );

  return (
    <CardDetailsContext.Provider value={cardDetails}>
      <CardDetailsDispatchContext.Provider value={dispatch}>
        {children}
      </CardDetailsDispatchContext.Provider>
    </CardDetailsContext.Provider>
  );
}

CardDetailsProvider.propTypes = {
  children: PropTypes.array,
};

const initialCardDetails = {
  cardHolderName: '',
  cardNumber: '',
  expirationMonth: '',
  expirationYear: '',
  cvc: '',
};

function cardDetailsReducer(cardDetails, action) {
  switch (action.type) {
    case 'ADD_CARDHOLDER_NAME':
      return {
        ...cardDetails,
        cardHolderName: action.cardHolderName,
      };
    case 'ADD_CARD_NUMBER':
      return {
        ...cardDetails,
        cardNumber: action.cardNumber,
      };
    case 'ADD_EXPIRATION_MONTH':
      return {
        ...cardDetails,
        expirationMonth: action.expirationMonth,
      };
    case 'ADD_EXPIRATION_YEAR':
      return {
        ...cardDetails,
        expirationYear: action.expirationYear,
      };
    case 'ADD_CVC':
      return {
        ...cardDetails,
        cvc: action.cvc,
      };
    default:
      throw Error('Unknown action: ' + action.type);
  }
}
